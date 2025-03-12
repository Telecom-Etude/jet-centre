/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `StudyInfos` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `deliverable` on the `JEHs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `code` to the `StudyInfos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StudyProgress" DROP CONSTRAINT "StudyProgress_studyId_fkey";

-- DropIndex
DROP INDEX "StudyInfos_title_key";

-- AlterTable
ALTER TABLE "JEHs" DROP COLUMN "deliverable",
ADD COLUMN     "deliverable" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Studies" ADD COLUMN     "studyProgressId" TEXT;

-- AlterTable
ALTER TABLE "StudyInfos" ADD COLUMN     "code" TEXT NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StudyInfos_code_key" ON "StudyInfos"("code");

-- AddForeignKey
ALTER TABLE "Studies" ADD CONSTRAINT "Studies_studyProgressId_fkey" FOREIGN KEY ("studyProgressId") REFERENCES "StudyProgress"("id") ON DELETE SET NULL ON UPDATE CASCADE;
