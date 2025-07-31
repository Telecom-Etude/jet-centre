'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { MriStatus } from '@prisma/client';
import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { LoadingFullStops } from '@/components/loading';
import { Button } from '@/components/ui/button';
import { reloadWindow } from '@/lib/utils';

import MRICreationForm from './form/form';
import { loadMriData, setMriStatus, storeMriData } from './form/mri';
import { MriFormType, MriServerData, equalMri, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';

interface InnerProps {
    study: string;
    serverMriData: MriServerData;
}

export default function Inner({ study, serverMriData }: InnerProps) {
    const form: UseFormReturn<MriFormType> = useForm<MriFormType>({
        resolver: zodResolver(mriCreationSchema),
        defaultValues: serverMriData.data,
    });

    const mri = form.watch();

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        const formData = form.watch();
        storeMriData(study, formData).then((success) => {
            if (!success) {
                setStatus(UpdateBoxStatus.Error);
            }
            loadMriData(study).then((data) => {
                setStatus(
                    data && equalMri(data?.data, formData)
                        ? UpdateBoxStatus.Ok
                        : UpdateBoxStatus.NotSynced
                );
            });
        });
    };

    const setNotSaved = () => {
        setStatus(UpdateBoxStatus.UserPending);
    };

    return (
        <div className="flex space-x-main h-full">
            <UpdateBox
                status={status}
                update={updateServer}
                title="Écriture du MRI"
                editable={serverMriData.status === MriStatus.InProgress}
            >
                <MriEditorContent
                    setNotSaved={setNotSaved}
                    form={form}
                    updateServer={updateServer}
                    serverMriId={serverMriData.mriId}
                    status={serverMriData.status}
                    study={study}
                />
            </UpdateBox>
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Prévisualisation du MRI</BoxTitle>
                </BoxHeader>
                <BoxContent height="limited" noPadding>
                    <RenderMRI mri={mri} study={study} admins={serverMriData.admins || []} />
                </BoxContent>
            </Box>
        </div>
    );
}

interface MriEditorContentProps {
    form: UseFormReturn<MriFormType>;
    serverMriId?: string;
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
                        <Button
                            onClick={() => {
                                setLoading(true);
                                storeMriData(study, form.watch()).then((mriId) => {
                                    if (mriId === undefined) {
                                        setLoading(false);
                                        return;
                                    }
                                    loadMriData(study).then((data) => {
                                        if (!data?.data) {
                                            setLoading(false);
                                            return;
                                        }
                                        if (!equalMri(data?.data, form.watch())) {
                                            setLoading(false);
                                            return;
                                        }
                                        setMriStatus(mriId, MriStatus.Finished).then(() => {
                                            reloadWindow();
                                        });
                                    });
                                });
                            }}
                        >
                            Valider le MRI
                        </Button>
                    )}
                </div>
            );
    }
}
