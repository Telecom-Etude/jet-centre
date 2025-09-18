import { Prisma } from '@prisma/client';

export type StudyWithCode = Prisma.StudyGetPayload<{
    include: {
        information: {
            select: {
                code: true;
            };
        };
    };
    select: {
        id: true;
    };
    omit: {
        informationId: true;
        studyProceedingsId: true;
    };
}>;
