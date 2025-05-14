/*
  Warnings:

  - You are about to drop the column `bypasses` on the `Status` table. All the data in the column will be lost.
  - You are about to drop the column `deadline` on the `Status` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Status" DROP COLUMN "bypasses",
DROP COLUMN "deadline",
ADD COLUMN     "end_of_validity" TIMESTAMP(3),
ADD COLUMN     "writing_deadline" TIMESTAMP(3),
ALTER COLUMN "created" DROP NOT NULL,
ALTER COLUMN "wrote" DROP NOT NULL,
ALTER COLUMN "audited" DROP NOT NULL,
ALTER COLUMN "sent" DROP NOT NULL,
ALTER COLUMN "signed" DROP NOT NULL,
ALTER COLUMN "approved" DROP NOT NULL;
