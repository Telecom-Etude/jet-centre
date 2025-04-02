-- AlterTable
ALTER TABLE "Mri" ALTER COLUMN "status" SET DEFAULT 'InProgress';

-- AlterTable
ALTER TABLE "Phase" ALTER COLUMN "phaseStatus" SET DEFAULT 'NotStarted';

-- AlterTable
ALTER TABLE "StudyProceedings" ALTER COLUMN "process" SET DEFAULT 'StudyCreation';
