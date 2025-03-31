import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { MRI } from '@prisma/client';
import { adminDisplay, MriFormType } from '@/app/(user)/(cdp)/[study]/mri/form/schema';
import { RenderMRI } from '@/app/(user)/(cdp)/[study]/mri/render';
import { getStudyInfosWithMRI } from './action';

function assertAllFieldsFull(
    mri: MRI | null,
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

export default async function Page({ params }: { params: Promise<{ study?: string }> }) {
    const { study } = await params;
    const studyInfos = study ? await getStudyInfosWithMRI(study) : undefined;
    if (!studyInfos || !studyInfos.study) {
        throw new Error('Failed to fetch study.');
    }
    const mri = assertAllFieldsFull(studyInfos.study.mri, studyInfos.title);
    return study ? (
        <Box>
            <BoxHeader>
                <BoxTitle>MRI à valider</BoxTitle>
            </BoxHeader>
            <BoxContent>
                {mri === null ? (
                    <p>Le MRI n'a pas encore été fini.</p>
                ) : mri === undefined ? (
                    <p>La rédaction du MRI n'a pas encore commencé</p>
                ) : (
                    <RenderMRI
                        mri={mri}
                        study={study}
                        admins={studyInfos.study.cdps.map(adminDisplay)}
                    />
                )}
            </BoxContent>
        </Box>
    ) : (
        <></>
    );
}
