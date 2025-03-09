'use client';

import { Box, BoxContent, BoxHeader, BoxLink, BoxTitle } from '@/components/boxes/boxes';
import MRICreationForm from './form/form';
import { defaultMriCreationSchema, FormType, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Inner({ etude }: { etude: string }) {
    const form = useForm<FormType>({
        resolver: zodResolver(mriCreationSchema),
        // @ts-ignore - react-hook-form use empty string ("") as default value even for non-string fields
        defaultValues: defaultMriCreationSchema,
    });

    const mri = form.watch();

    return (
        <div className="flex space-x-main h-full">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>MRI - {etude}</BoxTitle>
                    <BoxLink href="/mri-examples">Examples de MRIs</BoxLink>
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
                    <RenderMRI mri={mri} />
                </BoxContent>
            </Box>
        </div>
    );
}
