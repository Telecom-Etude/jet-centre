/*
  Warnings:

  - You are about to drop the column `asScholarship` on the `AssigneeInfos` table. All the data in the column will be lost.
  - You are about to drop the column `selection` on the `StudyAssignee` table. All the data in the column will be lost.
  - Added the required column `hasScholarship` to the `AssigneeInfos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selectionNotes` to the `StudyAssignee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "MriStatus" ADD VALUE 'Expired';

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_personId_fkey";

-- AlterTable
ALTER TABLE "AssigneeInfos" DROP COLUMN "asScholarship",
ADD COLUMN     "hasScholarship" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "StudyAssignee" DROP COLUMN "selection",
ADD COLUMN     "selectionNotes" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
