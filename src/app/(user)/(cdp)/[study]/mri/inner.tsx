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
import { loadMriData, storeMriData, validateMri } from './form/mri';
import { FaBug, FaCheck, FaQuestion } from 'react-icons/fa6';
import { useState } from 'react';
import { IoWarning } from 'react-icons/io5';
import { reloadWindow } from '../docs/utils';
import { Button } from '@/components/ui/button';

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
        storeMriData(study, form.watch()).then((success) => {
            if (!success) {
                setStatus(Status.Error);
            }
            console.log('switching to check');
            loadMriData(study).then((data) => {
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
                    <MRICreationForm form={form} updateServer={updateServer} />
                    <Button
                        onClick={() => {
                            const mriId = serverMriData.mriId;
                            if (mriId) {
                                validateMri(mriId).then(() => reloadWindow());
                            } else {
                                window.alert('??');
                            }
                        }}
                    >
                        Valider le MRI
                    </Button>
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
