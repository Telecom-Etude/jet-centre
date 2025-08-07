-- AlterTable
ALTER TABLE "Mri" ADD COLUMN     "sameTitleAsStudy" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "title" TEXT;
