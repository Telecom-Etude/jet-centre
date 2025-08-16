import { Mri } from '@prisma/client';

import {
    adminDisplay,
    DEFAULT_MRI_VALUES,
    MriFormType,
} from '@/app/(user)/cdp/[study]/mri/form/schema';
import { RenderMRI } from '@/app/(user)/cdp/[study]/mri/render';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';

import { fetchMriById } from '../actions';

enum MriValidity {
    NotStarted,
    NotFinished,
}

function assertAllFieldsFull(mri: Mri | undefined): MriFormType | MriValidity {
    if (!mri) return MriValidity.NotStarted;

    if (
        mri.wageLowerBound === null ||
        mri.wageUpperBound === null ||
        mri.wageLevel === null ||
        mri.difficulty === null ||
        mri.mainDomain === null ||
        mri.introductionText === null ||
        mri.descriptionText === null ||
        mri.timeLapsText === null ||
        mri.requiredSkillsText === null ||
        mri.title === null ||
        mri.gformUrl === null ||
        mri.wageLowerBound === DEFAULT_MRI_VALUES.wageLowerBound ||
        mri.wageUpperBound === DEFAULT_MRI_VALUES.wageUpperBound ||
        mri.wageLevel === DEFAULT_MRI_VALUES.wageLevel ||
        mri.difficulty === DEFAULT_MRI_VALUES.difficulty ||
        mri.mainDomain === DEFAULT_MRI_VALUES.mainDomain ||
        mri.introductionText === DEFAULT_MRI_VALUES.introductionText ||
        mri.descriptionText === DEFAULT_MRI_VALUES.descriptionText ||
        mri.timeLapsText === DEFAULT_MRI_VALUES.timeLapsText ||
        mri.requiredSkillsText === DEFAULT_MRI_VALUES.requiredSkillsText ||
        mri.title === DEFAULT_MRI_VALUES.title ||
        mri.gformUrl === DEFAULT_MRI_VALUES.gformUrl
    )
        return MriValidity.NotFinished;

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
        gformUrl: mri.gformUrl,
    };
}

async function LoadMRI({ mriId }: { mriId: string }) {
    const mri = await fetchMriById(mriId);
    const mriClean = assertAllFieldsFull(mri);

    return mriClean === MriValidity.NotFinished ? (
        <p>Le MRI n&apos;a pas encore été fini.</p>
    ) : mriClean === MriValidity.NotStarted ? (
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
