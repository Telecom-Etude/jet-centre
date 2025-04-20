/*
  Warnings:

  - A unique constraint covering the columns `[title,studyProceedingsId]` on the table `Phase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Phase_title_studyProceedingsId_key" ON "Phase"("title", "studyProceedingsId");
