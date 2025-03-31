'use client';

import { Box, BoxContent, BoxHeader, BoxHeaderBlock, BoxTitle } from '@/components/boxes/boxes';
import MRICreationForm from './form/form';
import { FormType, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { MriServerData, storeMriData } from './form/mri';
import { FaCheck, FaCross, FaX } from 'react-icons/fa6';
import { useState } from 'react';
import { IoWarning } from 'react-icons/io5';

enum Status {
    Ok,
    Error,
    Loading,
}

function getIcon(status: Status) {
    switch (status) {
        case Status.Ok:
            return <FaCheck />;
        case Status.Error:
            return <IoWarning />;
        case Status.Loading:
            return <AiOutlineLoading3Quarters className="animate-spin" />;
    }
}

interface InnerProps {
    study: string;
    serverMriData: MriServerData;
}

export default function Inner({ study, serverMriData }: InnerProps) {
    const form: UseFormReturn<FormType> = useForm<FormType>({
        resolver: zodResolver(mriCreationSchema),
        defaultValues: serverMriData.data,
    });

    const mri = form.watch();

    const [status, setStatus] = useState(Status.Ok);

    const updateServer = () => {
        setStatus(Status.Loading);
        storeMriData(study, form.getValues()).then((success) =>
            setStatus(success ? Status.Ok : Status.Error)
        );
    };

    return (
        <div className="flex space-x-main h-full">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>MRI - {study}</BoxTitle>
                    <BoxHeaderBlock>{getIcon(status)}</BoxHeaderBlock>
                </BoxHeader>
                <BoxContent height="limited">
                    <MRICreationForm form={form} updateServer={updateServer} />
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
