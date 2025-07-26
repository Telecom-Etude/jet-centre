import { Mri } from '@prisma/client';

import { adminDisplay, MriFormType } from '@/app/(user)/cdp/[study]/mri/form/schema';
import { RenderMRI } from '@/app/(user)/cdp/[study]/mri/render';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';

import { getStudyInfosWithMRI } from '../actions';

function assertAllFieldsFull(
    mri: Mri | null,
    title: string | null
): MriFormType | undefined | null {
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
    if (title === null) return;

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
        title,
    };
}

async function LoadMRI({ study }: { study: string }) {
    const studyInfos = await getStudyInfosWithMRI(study);
    if (!studyInfos || !studyInfos.study) {
        throw new Error('Failed to fetch study.');
    }
    const mri = assertAllFieldsFull(studyInfos.study.mri, studyInfos.title);
    return mri === null ? (
        <p>Le MRI n&apos;a pas encore été fini.</p>
    ) : mri === undefined ? (
        <p>La rédaction du MRI n&apos;a pas encore commencé</p>
    ) : (
        <RenderMRI mri={mri} study={study} admins={studyInfos.study.cdps.map(adminDisplay)} />
    );
}

export default async function Page({ params }: { params: Promise<{ study?: string[] }> }) {
    const { study } = await params;
    return (
        <Box>
            <BoxHeader>
                <BoxTitle>MRI à valider</BoxTitle>
            </BoxHeader>
            <BoxContent>
                {study && study[0] ? (
                    <LoadMRI study={study[0]} />
                ) : (
                    <div className="h-full flex items-center justify-center">
                        <p>Sélectionnez un MRI pour le visualiser.</p>
                    </div>
                )}
            </BoxContent>
        </Box>
    );
}
