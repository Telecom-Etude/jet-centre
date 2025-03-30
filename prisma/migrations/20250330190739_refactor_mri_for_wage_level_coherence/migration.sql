/*
  Warnings:

  - You are about to drop the column `paycheckLevel` on the `MRIs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MRIs" DROP COLUMN "paycheckLevel",
ADD COLUMN     "wageLevel" "Level";
