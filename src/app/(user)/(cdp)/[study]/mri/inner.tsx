'use client';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import MRICreationForm from './form/form';
import { defaultMriCreationSchema, FormType, mriCreationSchema } from './form/schema';
import { RenderMRI } from './render';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ServerMriData } from '@/actions/study';

export default function Inner({
    study,
    serverMriData,
}: {
    study: string;
    serverMriData?: ServerMriData;
}) {
    const defaultValues = defaultMriCreationSchema;
    if (serverMriData?.title) {
        defaultValues.title = serverMriData.title;
    }
    if (serverMriData?.description) {
        defaultValues.intro = serverMriData.description;
    }
    if (serverMriData?.domain) {
        defaultValues.domain = serverMriData.domain;
    }

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
                    <RenderMRI mri={mri} study={study} admins={serverMriData?.admins || []} />
                </BoxContent>
            </Box>
        </div>
    );
}
