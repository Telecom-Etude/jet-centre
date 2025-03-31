'use client';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import MRICreationForm from './form/form';
import { FormType, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { MriServerData } from './form/mri';
import { useEffect } from 'react';

export default function Inner({
    study,
    serverMriData,
}: {
    study: string;
    serverMriData: MriServerData;
}) {
    const form: UseFormReturn<FormType> = useForm<FormType>({
        resolver: zodResolver(mriCreationSchema),
        defaultValues: serverMriData.data,
    });

    const mri = form.watch();

    useEffect(() => {
        console.log('Changed');
    }, [mri]);

    return (
        <div className="flex space-x-main h-full">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>MRI - {study}</BoxTitle>
                </BoxHeader>
                <BoxContent height="limited">
                    <MRICreationForm form={form} />
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
