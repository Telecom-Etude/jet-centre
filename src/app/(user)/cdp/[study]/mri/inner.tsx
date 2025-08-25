'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { MriStatus } from '@prisma/client';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { FaCheck, FaCheckCircle, FaClock, FaPaperPlane, FaPen, FaQuestion } from 'react-icons/fa';

import {
    Box,
    BoxButtonPlus,
    BoxCollapseButton,
    BoxCollapser,
    BoxContent,
    BoxHeader,
    BoxTitle,
} from '@/components/boxes/boxes';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { LoadingFullStops } from '@/components/loading';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { reloadWindow } from '@/lib/utils';

import MRICreationForm from './form/form';
import { createNewMri, deleteMri, loadStudyMris, setMriStatus, storeMriData } from './form/mri';
import {
    DEFAULT_MRI_VALUES,
    MriFormType,
    MriServerData,
    equalMri,
    mriCreationSchema,
} from './form/schema';
import { RenderMRI } from './render';

interface InnerProps {
    studyCode: string;
    loadedMriData: MriServerData[];
}

export default function Inner({ studyCode, loadedMriData }: InnerProps) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const [collapseMriSelector, setCollapseMriSelector] = useState(false);

    const [serverMriData, setServerMriData] = useState(loadedMriData);

    const [selectedMriId, setSelectedMriId] = useState<string | undefined>(serverMriData[0]?.mriId);

    const selectedMri: MriServerData | undefined = useMemo(() => {
        return serverMriData.find((d) => d.mriId === selectedMriId);
    }, [serverMriData, selectedMriId]);

    if (selectedMriId && !selectedMri) {
        throw Error(`Couldn't find Mri of id ${selectedMriId} in ${serverMriData}`);
    }

    const form: UseFormReturn<MriFormType> = useForm<MriFormType>({
        resolver: zodResolver(mriCreationSchema),
        defaultValues: selectedMri?.data ?? DEFAULT_MRI_VALUES,
    });

    // this changes the form values when a new mri is selected
    useEffect(() => {
        if (selectedMri) {
            form.reset(selectedMri.data);
        }
    }, [selectedMri, form]);

    // this creates an mri if there are no existing mris
    useEffect(() => {
        if (serverMriData.length === 0) {
            createNewMri(studyCode).then((newMriData) => {
                if (newMriData) {
                    console.log(
                        `New MRI was successfully created for study ${studyCode}, id=${newMriData}`
                    );
                    setServerMriData([newMriData]);
                    setSelectedMriId(newMriData.mriId);
                } else {
                    throw Error('Error while creating a new mri');
                }
            });
        }
    }, [studyCode, serverMriData]);

    const mri = form.watch();

    const updateServer = () => {
        console.log('UPDATING SERVER');
        setStatus(UpdateBoxStatus.Loading);
        const formData = form.watch();
        if (!selectedMriId) {
            console.error('[updateServer]: Selected MRI id is undefined');
            setStatus(UpdateBoxStatus.Error);
        } else {
            storeMriData(selectedMriId, formData).then((updatedMriId) => {
                if (selectedMriId !== updatedMriId) {
                    console.error(
                        `[updateServer]: Updated mri id "${updatedMriId}" doesn't correspond to selected mri id "${selectedMriId}`
                    );
                    setStatus(UpdateBoxStatus.Error);
                }
                loadStudyMris(studyCode).then((data) => {
                    if (data) {
                        const loadedData = data.find((value) => value.mriId === updatedMriId);
                        setStatus(
                            loadedData && equalMri(loadedData?.data, formData)
                                ? UpdateBoxStatus.Ok
                                : UpdateBoxStatus.NotSynced
                        );
                        setServerMriData(data);
                    }
                });
            });
        }
    };

    const setNotSaved = () => {
        setStatus(UpdateBoxStatus.UserPending);
    };

    return selectedMriId && selectedMri ? (
        <div className="flex flex-col space-y-main w-full h-full">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Choix du MRI</BoxTitle>
                    <BoxCollapseButton
                        collapse={collapseMriSelector}
                        setCollapse={setCollapseMriSelector}
                    ></BoxCollapseButton>
                </BoxHeader>
                <BoxCollapser collapse={collapseMriSelector}>
                    <BoxContent>
                        <MriSelector
                            studyCode={studyCode}
                            setSelectedId={setSelectedMriId}
                            serverMriData={serverMriData}
                            setServerMriData={setServerMriData}
                        />
                    </BoxContent>
                </BoxCollapser>
            </Box>
            <div className="flex space-x-main h-full">
                <UpdateBox
                    status={status}
                    update={updateServer}
                    title="Écriture du MRI"
                    editable={selectedMri.status === MriStatus.InProgress}
                >
                    <MriEditorContent
                        setNotSaved={setNotSaved}
                        form={form}
                        updateServer={updateServer}
                        serverMriId={selectedMriId}
                        status={selectedMri.status}
                        study={studyCode}
                    />
                </UpdateBox>
                <Box className="w-full overflow-hidden">
                    <BoxHeader>
                        <BoxTitle>Prévisualisation du MRI</BoxTitle>
                    </BoxHeader>
                    <BoxContent height="limited" noPadding>
                        <RenderMRI mri={mri} study={studyCode} admins={selectedMri.admins || []} />
                    </BoxContent>
                </Box>
            </div>
        </div>
    ) : (
        <LoadingFullStops />
    );
}

interface MriSelectorProps {
    studyCode: string;
    setSelectedId: Dispatch<SetStateAction<string | undefined>>;
    serverMriData: MriServerData[];
    setServerMriData: Dispatch<SetStateAction<MriServerData[]>>;
}

function MriSelector({
    studyCode,
    setSelectedId,
    serverMriData,
    setServerMriData,
}: MriSelectorProps) {
    const [loading, setLoading] = useState(true);
    const [mris, setMris] = useState<MriServerData[] | undefined>();

    useEffect(() => {
        loadStudyMris(studyCode).then((data) => {
            setMris(data);
            setLoading(false);
        });
    }, [studyCode, serverMriData]);

    const getStatusAssets = (status: MriStatus) => {
        switch (status) {
            case 'InProgress':
                return { text: "En cours d'écriture", color: 'text-yellow-300', logo: <FaPen /> };
            case 'Finished':
                return {
                    text: 'En cours de validation',
                    color: 'text-green-300',
                    logo: <FaCheck />,
                };
            case 'Validated':
                return { text: 'Validé', color: 'text-teal-300', logo: <FaCheckCircle /> };
            case 'Sent':
                return { text: 'Envoyé', color: 'text-blue-300', logo: <FaPaperPlane /> };
            case 'Expired':
                return { text: 'Expiré', color: 'text-red-300', logo: <FaClock /> };
            default:
                return { text: 'Inconnu', color: 'text-white-300', logo: <FaQuestion /> };
        }
    };

    if (loading) {
        return <LoadingFullStops />;
    } else {
        if (mris === undefined) {
            return <p>Error loading mris !</p>;
        } else {
            return (
                <div className="flex flex-col w-full items-center">
                    <ToggleGroup
                        type="single"
                        unselectable="off"
                        value="selectedId"
                        onValueChange={(newValue) => {
                            if (newValue) {
                                setSelectedId(newValue);
                            }
                        }}
                    >
                        {/* reversing elements to put more recent mris first */}
                        <div className="flex flex-col-reverse">
                            {mris.map((mri, i) => (
                                <ToggleGroupItem
                                    value={mri.mriId ?? 'new_mri'}
                                    key={i}
                                    className={getStatusAssets(mri.status).color}
                                >
                                    <p>{mri.data.title ? mri.data.title : '<MRI sans titre>'}</p>
                                    <div className="group relative inline-block">
                                        {getStatusAssets(mri.status).logo}

                                        <div
                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block 
                  bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap shadow-lg"
                                        >
                                            {getStatusAssets(mri.status).text}
                                        </div>
                                    </div>
                                </ToggleGroupItem>
                            ))}
                        </div>
                    </ToggleGroup>
                    <BoxButtonPlus
                        onClick={() => {
                            createNewMri(studyCode).then((newMriData) => {
                                if (newMriData) {
                                    console.log(
                                        `New MRI was successfully created for study ${studyCode}, id=${newMriData}`
                                    );
                                    setServerMriData([newMriData, ...serverMriData]);
                                    setSelectedId(newMriData.mriId);
                                } else {
                                    throw Error('Error while creating a new mri');
                                }
                            });
                        }}
                        bg-black
                    />{' '}
                </div>
            );
        }
    }
}

interface MriEditorContentProps {
    form: UseFormReturn<MriFormType>;
    serverMriId: string;
    updateServer: () => void;
    status: MriStatus;
    study: string;
    setNotSaved: () => void;
}

function MriEditorContent({
    form,
    updateServer,
    setNotSaved,
    serverMriId,
    status,
    study,
}: MriEditorContentProps) {
    const [loading, setLoading] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    switch (status) {
        case MriStatus.Sent:
            return (
                <div className="flex flex-col items-center justify-center">
                    <p>Trop tard... Il est parti...</p>
                </div>
            );
        case MriStatus.Finished:
        case MriStatus.Validated:
            return (
                <div className="flex flex-col items-center justify-center">
                    {loading ? (
                        <LoadingFullStops />
                    ) : (
                        <>
                            <p className="p-10 text-center">
                                Ce MRI a été soumis pour validation. Vous devez annuler cette étape
                                pour éditer votre MRI.
                            </p>
                            <Button
                                onClick={() => {
                                    if (serverMriId) {
                                        setLoading(true);
                                        setMriStatus(serverMriId, MriStatus.InProgress).then(() =>
                                            reloadWindow()
                                        );
                                    }
                                }}
                            >
                                Invalider pour modifier
                            </Button>
                        </>
                    )}
                </div>
            );
        case MriStatus.InProgress:
            return (
                <div className="flex flex-col items-center ">
                    <MRICreationForm
                        setNotSaved={setNotSaved}
                        form={form}
                        updateServer={updateServer}
                    />
                    {loading ? (
                        <LoadingFullStops />
                    ) : (
                        <div className="flex flex-row space-x-main">
                            <Button
                                className="font-semibold"
                                onClick={() => {
                                    setLoading(true);
                                    form.trigger().then((validated) => {
                                        if (!validated) {
                                            setLoading(false);
                                            return;
                                        } else {
                                            storeMriData(serverMriId, form.watch()).then(
                                                (updatedMriId) => {
                                                    if (!updatedMriId) {
                                                        setLoading(false);
                                                        return;
                                                    }
                                                    loadStudyMris(study).then((data) => {
                                                        if (!data) {
                                                            setLoading(false);
                                                            return;
                                                        }
                                                        const loadedData = data.find(
                                                            (value) => value.mriId === updatedMriId
                                                        );
                                                        if (loadedData === undefined) {
                                                            console.error(
                                                                `[MriEditorContent] Couldn't find an MRI with the correct id "${updatedMriId}"`
                                                            );
                                                            setLoading(false);
                                                            return;
                                                        }
                                                        if (
                                                            !equalMri(loadedData.data, form.watch())
                                                        ) {
                                                            console.error(
                                                                "[MriEditorContent] Saved MRI value doesn't correspond with the form values"
                                                            );
                                                            setLoading(false);
                                                            return;
                                                        }
                                                        setMriStatus(
                                                            updatedMriId,
                                                            MriStatus.Finished
                                                        ).then(() => {
                                                            reloadWindow();
                                                        });
                                                    });
                                                }
                                            );
                                        }
                                    });
                                }}
                            >
                                Valider le MRI
                            </Button>
                            <Button
                                variant={'destructive'}
                                className="font-semibold"
                                onClick={() => {
                                    setIsDeleteOpen(true);
                                }}
                            >
                                Supprimer le MRI
                            </Button>
                            <DeleteMriDialog
                                isOpen={isDeleteOpen}
                                setIsOpen={setIsDeleteOpen}
                                mriId={serverMriId}
                            />
                        </div>
                    )}
                </div>
            );
    }
}

interface DeleteMriDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    mriId: string;
}

function DeleteMriDialog({ isOpen, setIsOpen, mriId }: DeleteMriDialogProps) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AlertDialog open={isOpen} onOpenChange={() => setIsOpen((isOpen) => !isOpen)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirmer la suppression du MRI</AlertDialogTitle>
                    <AlertDialogDescription>
                        Ce MRI sera définitivement supprimé. Cette action est irréversible.
                    </AlertDialogDescription>
                    {isLoading ? (
                        <div className="w-full items-center flex justify-center">
                            <LoadingFullStops />
                        </div>
                    ) : (
                        <div className="w-full items-center flex justify-between pt-4">
                            <Button
                                variant="outline"
                                className="font-semibold"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Annuler la suppression
                            </Button>
                            <Button
                                variant="destructive"
                                className="font-semibold"
                                onClick={() => {
                                    setIsLoading(true);
                                    deleteMri(mriId).then(() => reloadWindow());
                                }}
                            >
                                Confirmer la suppression
                            </Button>
                        </div>
                    )}
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
