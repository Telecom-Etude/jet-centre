'use client';

import {
    Box,
    BoxButtonIcon,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import MRICreationForm from './form/form';
import { MriFormType, MriServerData, equalMri, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { loadMriData, setMriStatus, storeMriData } from './form/mri';
import { FaBug, FaCheck, FaQuestion } from 'react-icons/fa6';
import { useState } from 'react';
import { IoWarning } from 'react-icons/io5';
import { reloadWindow } from '../docs/utils';
import { Button } from '@/components/ui/button';
import { MriStatus } from '@prisma/client';
import { dbg, log } from '@/lib/utils';

enum Status {
    Ok,
    Error,
    NotSynced,
    Loading,
    NotFound,
}

function getIcon(status: Status) {
    switch (status) {
        case Status.Ok:
            return { Icon: FaCheck };
        case Status.Loading:
            return { Icon: AiOutlineLoading3Quarters, className: 'animate-spin' };
        case Status.Error:
            return { Icon: IoWarning, className: 'text-destructive' };
        case Status.NotSynced:
            return { Icon: FaBug, className: 'text-destructive' };
        case Status.NotFound:
            return { Icon: FaQuestion, className: 'text-destructive' };
    }
}

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

    const [status, setStatus] = useState(Status.Ok);

    const updateServer = () => {
        setStatus(Status.Loading);
        log('##### Storing #####');
        storeMriData(study, form.watch()).then((success) => {
            if (!success) {
                setStatus(Status.Error);
            }
            log('##### Checking #####');
            loadMriData(study).then((data) => {
                log('##### Finished #####');
                setStatus(
                    data && equalMri(data?.data, form.watch()) ? Status.Ok : Status.NotSynced
                );
            });
        });
    };

    return (
        <div className="flex space-x-main h-full">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>MRI - {study}</BoxTitle>
                    <BoxHeaderBlock>
                        <BoxButtonIcon {...getIcon(status)} onClick={() => updateServer()} />
                    </BoxHeaderBlock>
                </BoxHeader>
                <BoxContent height="limited">
                    <MriEditorContent
                        form={form}
                        updateServer={updateServer}
                        serverMriId={serverMriData.mriId}
                        status={serverMriData.status}
                        study={study}
                    />
                </BoxContent>
            </Box>
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
                <div className="flex items-center justify-center">
                    {loading ? (
                        <LoadingPrimary />
                    ) : (
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
                    )}
                </div>
            );
        case MriStatus.InProgress:
            return (
                <div className="flex flex-col items-center ">
                    <MRICreationForm form={form} updateServer={updateServer} />
                    {loading ? (
                        <LoadingPrimary />
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
                                        setMriStatus(mriId, MriStatus.Validated).then(() => {
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

function LoadingPrimary() {
    return (
        <div className="flex gap-2 justify-center rounded items-center p-main w-fit">
            <span className="sr-only">Loading...</span>
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce [animation-delay:-0.4s]"></div>
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="h-2 w-2 size-8 bg-primary rounded-full animate-bounce"></div>
        </div>
    );
}
