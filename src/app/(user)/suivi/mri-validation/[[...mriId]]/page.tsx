import { Mri } from '@prisma/client';

import { adminDisplay, MriFormType } from '@/app/(user)/cdp/[study]/mri/form/schema';
import { RenderMRI } from '@/app/(user)/cdp/[study]/mri/render';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';

import { fetchMriById } from '../actions';

function assertAllFieldsFull(mri: Mri | undefined): MriFormType | undefined | null {
    if (!mri) return null;

    if (mri.wageLowerBound === null) return;
    if (mri.wageUpperBound === null) return;
    if (mri.wageLevel === null) return;
    if (mri.difficulty === null) return;
    if (mri.mainDomain === null) return;
    if (mri.introductionText === null) return;
    if (mri.descriptionText === null) return;
    if (mri.timeLapsText === null) return;
    if (mri.requiredSkillsText === null) return;
    if (mri.title === null) return;

    return {
        wageLowerBound: mri.wageLowerBound,
        wageUpperBound: mri.wageUpperBound,
        wageLevel: mri.wageLevel,
        difficulty: mri.difficulty,
        mainDomain: mri.mainDomain,
        introductionText: mri.introductionText,
        descriptionText: mri.descriptionText,
        timeLapsText: mri.timeLapsText,
        requiredSkillsText: mri.requiredSkillsText,
        title: mri.title,
    };
}

async function LoadMRI({ mriId }: { mriId: string }) {
    const mri = await fetchMriById(mriId);
    const mriClean = assertAllFieldsFull(mri);

    return mriClean === null ? (
        <p>Le MRI n&apos;a pas encore été fini.</p>
    ) : mriClean === undefined ? (
        <p>La rédaction du MRI n&apos;a pas encore commencé</p>
    ) : mri?.studyId && mri?.study ? (
        <RenderMRI mri={mriClean} study={mri.studyId} admins={mri.study.cdps.map(adminDisplay)} />
    ) : (
        <p>Erreur lors du chargement du MRI</p>
    );
}

export default async function Page({ params }: { params: Promise<{ mriId?: string[] }> }) {
    const { mriId } = await params;
    return (
        <Box>
            <BoxHeader>
                <BoxTitle>MRI à valider</BoxTitle>
            </BoxHeader>
            <BoxContent>
                {mriId && mriId[0] ? (
                    <LoadMRI mriId={mriId[0]} />
                ) : (
                    <div className="h-full flex items-center justify-center">
                        <p>Sélectionnez un MRI pour le visualiser.</p>
                    </div>
                )}
            </BoxContent>
        </Box>
    );
}
