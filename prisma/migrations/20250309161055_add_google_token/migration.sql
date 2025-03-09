/*
  Warnings:

  - You are about to drop the column `editable` on the `Docs` table. All the data in the column will be lost.
  - You are about to drop the column `extension` on the `Docs` table. All the data in the column will be lost.
  - You are about to drop the column `googlePath` on the `Docs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[googleId]` on the table `Docs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[googleFolder]` on the table `StudyInfos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `googleId` to the `Docs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Docs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `googleFolder` to the `StudyInfos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Docs" DROP COLUMN "editable",
DROP COLUMN "extension",
DROP COLUMN "googlePath",
ADD COLUMN     "googleId" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StudyInfos" ADD COLUMN     "googleFolder" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Docs_googleId_key" ON "Docs"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "StudyInfos_googleFolder_key" ON "StudyInfos"("googleFolder");
