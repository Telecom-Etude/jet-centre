/*
  Warnings:

  - You are about to drop the column `STAR_A` on the `FormInterviews` table. All the data in the column will be lost.
  - You are about to drop the column `STAR_R` on the `FormInterviews` table. All the data in the column will be lost.
  - You are about to drop the column `STAR_S` on the `FormInterviews` table. All the data in the column will be lost.
  - You are about to drop the column `STAR_T` on the `FormInterviews` table. All the data in the column will be lost.
  - Added the required column `starA` to the `FormInterviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starR` to the `FormInterviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starS` to the `FormInterviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starT` to the `FormInterviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FormInterviews" DROP COLUMN "STAR_A",
DROP COLUMN "STAR_R",
DROP COLUMN "STAR_S",
DROP COLUMN "STAR_T",
ADD COLUMN     "starA" TEXT NOT NULL,
ADD COLUMN     "starR" TEXT NOT NULL,
ADD COLUMN     "starS" TEXT NOT NULL,
ADD COLUMN     "starT" TEXT NOT NULL;
