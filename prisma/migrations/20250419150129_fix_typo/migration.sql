/*
  Warnings:

  - The values [DocumentWrote] on the enum `StudyProgressStep` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StudyProgressStep_new" AS ENUM ('Created', 'Recruited', 'TripartiteMeeting', 'DocumentsWrote', 'InStudy', 'Ended', 'CompanyFactored', 'AssigneePaid', 'SatisfactionFormSent', 'WarrantyExpired');
ALTER TABLE "StudyProceedings" ALTER COLUMN "studyProcessStep" DROP DEFAULT;
ALTER TABLE "StudyProceedings" ALTER COLUMN "studyProcessStep" TYPE "StudyProgressStep_new" USING ("studyProcessStep"::text::"StudyProgressStep_new");
ALTER TYPE "StudyProgressStep" RENAME TO "StudyProgressStep_old";
ALTER TYPE "StudyProgressStep_new" RENAME TO "StudyProgressStep";
DROP TYPE "StudyProgressStep_old";
ALTER TABLE "StudyProceedings" ALTER COLUMN "studyProcessStep" SET DEFAULT 'Created';
COMMIT;
