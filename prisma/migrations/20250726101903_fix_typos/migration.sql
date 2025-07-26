/*
  Warnings:

  - You are about to drop the column `number` on the `Person` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "number",
ADD COLUMN     "phone_number" TEXT;
