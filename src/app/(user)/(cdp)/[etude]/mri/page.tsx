import { Box, BoxContent, BoxHeader, BoxLink, BoxTitle } from '@/components/boxes/boxes';
import { Metadata } from 'next';
import MRICreationForm from './form/form';
import { RenderMRI } from './render';

export const metadata = {
    title: 'Écriture MRI',
} satisfies Metadata;

export default ({ params: { etude } }: { params: { etude: string } }) => {
    return (
        <div className="flex space-x-main h-full">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>MRI-{etude}</BoxTitle>
                    <BoxLink href="/mri-examples">Examples de MRIs</BoxLink>
                </BoxHeader>
                <BoxContent height="limited">
                    <MRICreationForm />
                </BoxContent>
            </Box>
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Prévisualisation du MRI</BoxTitle>
                </BoxHeader>
                <BoxContent height="limited">
                    <RenderMRI etude={etude} />
                </BoxContent>
            </Box>
        </div>
    );
};
