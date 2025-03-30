/*
  Warnings:

  - The values [PRELIMINARY_STUDY,TRIPARTITE_MEETING,ASSIGNEE_PAPERS,IN_STUDY,ENDED,ASSIGNEE_PAID,COMPANY_FACTORED] on the enum `StudyProgressStep` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `nvEmployees` on the `CompanyInfos` table. All the data in the column will be lost.
  - You are about to drop the column `deliverablesId` on the `StudyInfos` table. All the data in the column will be lost.
  - You are about to drop the column `peopleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `notificationLvl` on the `UserSettings` table. All the data in the column will be lost.
  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Assignees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deliverables` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Docs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormMRIs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JEHs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MRIs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Phases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Satisfactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Studies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudyAssignees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudyClients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudyDocs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AdminsToRoles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[documentId]` on the table `Status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[personId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `documentId` to the `Status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notificationLevel` to the `UserSettings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum

-- DropEnum
ALTER TYPE "NotifLvl" RENAME TO "NotificationLevel";
-- CREATE TYPE "NotificationLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterEnum
BEGIN;
CREATE TYPE "StudyProgressStep_new" AS ENUM ('Recruiting', 'TripartiteMeeting', 'WritingDocuments', 'InStudy', 'Ended', 'CompanyFactored', 'AssigneePaid', 'SatisfactionForm');
ALTER TABLE "StudyProgress" ALTER COLUMN "step" TYPE "StudyProgressStep_new" USING ("step"::text::"StudyProgressStep_new");
ALTER TYPE "StudyProgressStep" RENAME TO "StudyProgressStep_old";
ALTER TYPE "StudyProgressStep_new" RENAME TO "StudyProgressStep";
DROP TYPE "StudyProgressStep_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Admins" DROP CONSTRAINT "Admins_userId_fkey";

-- DropForeignKey
ALTER TABLE "AssigneeDocs" DROP CONSTRAINT "AssigneeDocs_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "AssigneeDocs" DROP CONSTRAINT "AssigneeDocs_cniId_fkey";

-- DropForeignKey
ALTER TABLE "AssigneeDocs" DROP CONSTRAINT "AssigneeDocs_socialSecurityId_fkey";

-- DropForeignKey
ALTER TABLE "AssigneeDocs" DROP CONSTRAINT "AssigneeDocs_studentCardId_fkey";

-- DropForeignKey
ALTER TABLE "AssigneeInfos" DROP CONSTRAINT "AssigneeInfos_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "Assignees" DROP CONSTRAINT "Assignees_peopleId_fkey";

-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_peopleId_fkey";

-- DropForeignKey
ALTER TABLE "Companies" DROP CONSTRAINT "Companies_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Companies" DROP CONSTRAINT "Companies_companyInfosId_fkey";

-- DropForeignKey
ALTER TABLE "Docs" DROP CONSTRAINT "Docs_studyDocsId_fkey";

-- DropForeignKey
ALTER TABLE "FormMRIs" DROP CONSTRAINT "FormMRIs_mriId_fkey";

-- DropForeignKey
ALTER TABLE "JEHs" DROP CONSTRAINT "JEHs_phasesId_fkey";

-- DropForeignKey
ALTER TABLE "MRIs" DROP CONSTRAINT "MRIs_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Pages" DROP CONSTRAINT "Pages_roleId_fkey";

-- DropForeignKey
ALTER TABLE "People" DROP CONSTRAINT "People_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Phases" DROP CONSTRAINT "Phases_studyProgressId_fkey";

-- DropForeignKey
ALTER TABLE "Satisfactions" DROP CONSTRAINT "Satisfactions_studyClientId_fkey";

-- DropForeignKey
ALTER TABLE "Satisfactions" DROP CONSTRAINT "Satisfactions_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_docsId_fkey";

-- DropForeignKey
ALTER TABLE "Studies" DROP CONSTRAINT "Studies_informationId_fkey";

-- DropForeignKey
ALTER TABLE "Studies" DROP CONSTRAINT "Studies_studyProgressId_fkey";

-- DropForeignKey
ALTER TABLE "StudyAssignees" DROP CONSTRAINT "StudyAssignees_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "StudyAssignees" DROP CONSTRAINT "StudyAssignees_formInterviewId_fkey";

-- DropForeignKey
ALTER TABLE "StudyAssignees" DROP CONSTRAINT "StudyAssignees_formMRIId_fkey";

-- DropForeignKey
ALTER TABLE "StudyAssignees" DROP CONSTRAINT "StudyAssignees_studyId_fkey";

-- DropForeignKey
ALTER TABLE "StudyClients" DROP CONSTRAINT "StudyClients_clientId_fkey";

-- DropForeignKey
ALTER TABLE "StudyClients" DROP CONSTRAINT "StudyClients_studyId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_accId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_aceId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_armId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_bcrId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_brId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_bvId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_ccId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_cconfId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_ceId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_pvrfId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_pvriId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_rmId_fkey";

-- DropForeignKey
ALTER TABLE "StudyDocs" DROP CONSTRAINT "StudyDocs_studyInfoId_fkey";

-- DropForeignKey
ALTER TABLE "StudyInfos" DROP CONSTRAINT "StudyInfos_deliverablesId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_peopleId_fkey";

-- DropForeignKey
ALTER TABLE "_AdminsToRoles" DROP CONSTRAINT "_AdminsToRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdminsToRoles" DROP CONSTRAINT "_AdminsToRoles_B_fkey";

-- DropForeignKey
ALTER TABLE "_auditor" DROP CONSTRAINT "_auditor_A_fkey";

-- DropForeignKey
ALTER TABLE "_auditor" DROP CONSTRAINT "_auditor_B_fkey";

-- DropForeignKey
ALTER TABLE "_cdp" DROP CONSTRAINT "_cdp_A_fkey";

-- DropForeignKey
ALTER TABLE "_cdp" DROP CONSTRAINT "_cdp_B_fkey";

-- DropIndex
DROP INDEX "User_peopleId_key";

-- AlterTable
ALTER TABLE "CompanyInfos" DROP COLUMN "nvEmployees";

-- AlterTable
ALTER TABLE "Status" ADD COLUMN     "documentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StudyInfos" DROP COLUMN "deliverablesId";

-- AlterTable
ALTER TABLE "User" RENAME COLUMN "peopleId" TO "personId";

-- AlterTable
ALTER TABLE "UserSettings" DROP COLUMN "notificationLvl",
ADD COLUMN     "notificationLevel" "NotificationLevel" NOT NULL;

-- DropTable
DROP TABLE "Admins";

-- DropTable
DROP TABLE "Assignees";

-- DropTable
DROP TABLE "Clients";

-- DropTable
DROP TABLE "Companies";

-- DropTable
DROP TABLE "Deliverables";

-- DropTable
DROP TABLE "Docs";

-- DropTable
DROP TABLE "FormMRIs";

-- DropTable
DROP TABLE "JEHs";

-- DropTable
DROP TABLE "MRIs";

-- DropTable
DROP TABLE "Pages";

-- DropTable
DROP TABLE "People";

-- DropTable
DROP TABLE "Phases";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Satisfactions";

-- DropTable
DROP TABLE "Studies";

-- DropTable
DROP TABLE "StudyAssignees";

-- DropTable
DROP TABLE "StudyClients";

-- DropTable
DROP TABLE "StudyDocs";

-- DropTable
DROP TABLE "_AdminsToRoles";


-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "number" TEXT,
    "addressId" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "position" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,
    "job" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyClient" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "StudyClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Satisfaction" (
    "id" TEXT NOT NULL,
    "studyClientId" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL,
    "howKnowUs" TEXT NOT NULL,
    "whyUs" TEXT NOT NULL,
    "satisfactionObjectives" INTEGER NOT NULL,
    "easiness" INTEGER NOT NULL,
    "timeElapsed" INTEGER NOT NULL,
    "recommendUs" INTEGER NOT NULL,

    CONSTRAINT "Satisfaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "companyInfosId" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "googleId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "studyDocsId" TEXT,
    "statusId" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MRI" (
    "id" TEXT NOT NULL,
    "wageLowerBound" INTEGER,
    "wageUpperBound" INTEGER,
    "wageLevel" "Level",
    "difficulty" "Level",
    "mainDomain" "Domain",
    "introductionText" TEXT,
    "descriptionText" TEXT,
    "timeLapsText" TEXT,
    "requiredSkillsText" TEXT,
    "studyId" TEXT NOT NULL,

    CONSTRAINT "MRI_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assignee" (
    "id" TEXT NOT NULL,
    "nbApplications" INTEGER NOT NULL,
    "peopleId" TEXT NOT NULL,

    CONSTRAINT "Assignee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyAssignee" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "assigneeId" TEXT NOT NULL,
    "formInterviewId" TEXT NOT NULL,
    "formMRIId" TEXT NOT NULL,
    "selection" TEXT NOT NULL,
    "taken" BOOLEAN NOT NULL,

    CONSTRAINT "StudyAssignee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormMRI" (
    "id" TEXT NOT NULL,
    "mriId" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "knowledge" TEXT NOT NULL,
    "ideas" TEXT NOT NULL,
    "jeExperience" INTEGER NOT NULL,

    CONSTRAINT "FormMRI_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Study" (
    "id" TEXT NOT NULL,
    "informationId" TEXT NOT NULL,
    "studyProgressId" TEXT,

    CONSTRAINT "Study_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phase" (
    "id" TEXT NOT NULL,
    "jehs" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "studyProgressId" TEXT,

    CONSTRAINT "Phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deliverable" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "given" BOOLEAN NOT NULL,
    "done" BOOLEAN NOT NULL,
    "phaseId" TEXT NOT NULL,

    CONSTRAINT "Deliverable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_personId_key" ON "Client"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "Satisfaction_studyClientId_key" ON "Satisfaction"("studyClientId");

-- CreateIndex
CREATE UNIQUE INDEX "Satisfaction_studyId_key" ON "Satisfaction"("studyId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_addressId_key" ON "Company"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_googleId_key" ON "Document"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "MRI_studyId_key" ON "MRI"("studyId");

-- CreateIndex
CREATE UNIQUE INDEX "Assignee_peopleId_key" ON "Assignee"("peopleId");

-- CreateIndex
CREATE UNIQUE INDEX "StudyAssignee_formInterviewId_key" ON "StudyAssignee"("formInterviewId");

-- CreateIndex
CREATE UNIQUE INDEX "StudyAssignee_formMRIId_key" ON "StudyAssignee"("formMRIId");

-- CreateIndex
CREATE UNIQUE INDEX "FormMRI_mriId_key" ON "FormMRI"("mriId");

-- CreateIndex
CREATE UNIQUE INDEX "Study_informationId_key" ON "Study"("informationId");

-- CreateIndex
CREATE UNIQUE INDEX "Deliverable_phaseId_key" ON "Deliverable"("phaseId");

-- CreateIndex
CREATE UNIQUE INDEX "Status_documentId_key" ON "Status"("documentId");

-- CreateIndex
CREATE UNIQUE INDEX "User_personId_key" ON "User"("personId");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyClient" ADD CONSTRAINT "StudyClient_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyClient" ADD CONSTRAINT "StudyClient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Satisfaction" ADD CONSTRAINT "Satisfaction_studyClientId_fkey" FOREIGN KEY ("studyClientId") REFERENCES "StudyClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Satisfaction" ADD CONSTRAINT "Satisfaction_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_companyInfosId_fkey" FOREIGN KEY ("companyInfosId") REFERENCES "CompanyInfos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MRI" ADD CONSTRAINT "MRI_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignee" ADD CONSTRAINT "Assignee_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssigneeInfos" ADD CONSTRAINT "AssigneeInfos_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "Assignee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssigneeDocs" ADD CONSTRAINT "AssigneeDocs_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "Assignee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssigneeDocs" ADD CONSTRAINT "AssigneeDocs_cniId_fkey" FOREIGN KEY ("cniId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssigneeDocs" ADD CONSTRAINT "AssigneeDocs_socialSecurityId_fkey" FOREIGN KEY ("socialSecurityId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssigneeDocs" ADD CONSTRAINT "AssigneeDocs_studentCardId_fkey" FOREIGN KEY ("studentCardId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyAssignee" ADD CONSTRAINT "StudyAssignee_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyAssignee" ADD CONSTRAINT "StudyAssignee_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "Assignee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyAssignee" ADD CONSTRAINT "StudyAssignee_formInterviewId_fkey" FOREIGN KEY ("formInterviewId") REFERENCES "FormInterviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyAssignee" ADD CONSTRAINT "StudyAssignee_formMRIId_fkey" FOREIGN KEY ("formMRIId") REFERENCES "FormMRI"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormMRI" ADD CONSTRAINT "FormMRI_mriId_fkey" FOREIGN KEY ("mriId") REFERENCES "MRI"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Study" ADD CONSTRAINT "Study_informationId_fkey" FOREIGN KEY ("informationId") REFERENCES "StudyInfos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyProgress" ADD CONSTRAINT "StudyProgress_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_studyProgressId_fkey" FOREIGN KEY ("studyProgressId") REFERENCES "StudyProgress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cdp" ADD CONSTRAINT "_cdp_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_cdp" ADD CONSTRAINT "_cdp_B_fkey" FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_auditor" ADD CONSTRAINT "_auditor_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_auditor" ADD CONSTRAINT "_auditor_B_fkey" FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;
