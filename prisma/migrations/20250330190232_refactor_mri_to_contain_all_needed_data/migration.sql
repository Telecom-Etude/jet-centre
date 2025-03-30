/*
  Warnings:

  - You are about to drop the column `contact` on the `MRIs` table. All the data in the column will be lost.
  - You are about to drop the column `introduction` on the `MRIs` table. All the data in the column will be lost.
  - You are about to drop the column `paycheck_over` on the `MRIs` table. All the data in the column will be lost.
  - You are about to drop the column `paycheck_under` on the `MRIs` table. All the data in the column will be lost.
  - You are about to drop the column `schedule` on the `MRIs` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `MRIs` table. All the data in the column will be lost.
  - The `difficulty` column on the `MRIs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('Low', 'Medium', 'High');

-- AlterTable
ALTER TABLE "MRIs" DROP COLUMN "contact",
DROP COLUMN "introduction",
DROP COLUMN "paycheck_over",
DROP COLUMN "paycheck_under",
DROP COLUMN "schedule",
DROP COLUMN "skills",
ADD COLUMN     "descriptionText" TEXT,
ADD COLUMN     "introductionText" TEXT,
ADD COLUMN     "mainDomain" "Domain",
ADD COLUMN     "paycheckLevel" "Level",
ADD COLUMN     "requiredSkillsText" TEXT,
ADD COLUMN     "timeLapsText" TEXT,
ADD COLUMN     "wageLowerBound" INTEGER,
ADD COLUMN     "wageUpperBound" INTEGER,
DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" "Level";
