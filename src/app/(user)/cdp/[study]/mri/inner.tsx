'use client';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import MRICreationForm from './form/form';
import { MriFormType, MriServerData, equalMri, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { loadMriData, setMriStatus, storeMriData } from './form/mri';
import { useState } from 'react';
import { reloadWindow } from '../docs/utils';
import { Button } from '@/components/ui/button';
import { MriStatus } from '@prisma/client';
import { dbg, log } from '@/lib/utils';
import { LoadingFullStops } from '@/components/loading';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';

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
        log('##### Storing #####');
        storeMriData(study, form.watch()).then((success) => {
            if (!success) {
                setStatus(UpdateBoxStatus.Error);
            }
            log('##### Checking #####');
            loadMriData(study).then((data) => {
                log('##### Finished #####');
                setStatus(
                    data && equalMri(data?.data, form.watch())
                        ? UpdateBoxStatus.Ok
                        : UpdateBoxStatus.NotSynced
                );
            });
        });
    };

    return (
        <div className="flex space-x-main h-full">
            <UpdateBox status={status} update={updateServer} title="Écriture du MRI">
                <MriEditorContent
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
}

function MriEditorContent({
    form,
    updateServer,
    serverMriId,
    status,
    study,
}: MriEditorContentProps) {
    const [loading, setLoading] = useState(false);

    dbg(study, 'study');
    dbg(serverMriId, 'mriId');

    switch (status) {
        case MriStatus.Sent:
            return <p>Trop tard... Il est parti...</p>;
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
                    <MRICreationForm form={form} updateServer={updateServer} />
                    {loading ? (
                        <LoadingFullStops />
                    ) : (
                        <Button
                            onClick={() => {
                                setLoading(true);
                                storeMriData(study, form.watch()).then((mriId) => {
                                    if (mriId === undefined) {
                                        setLoading(false);
                                        dbg('', 'storing failed');
                                        return;
                                    }
                                    loadMriData(study).then((data) => {
                                        if (!data?.data) {
                                            dbg('', 'loading failed on data');
                                            setLoading(false);
                                            return;
                                        }
                                        if (!equalMri(data?.data, form.watch())) {
                                            dbg('', 'loading returned wrong data');
                                            dbg(form.watch(), 'form data');
                                            dbg(data?.data, 'response data');
                                            setLoading(false);
                                            return;
                                        }
                                        setMriStatus(mriId, MriStatus.Finished).then(() => {
                                            dbg('', 'reloading window');
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
