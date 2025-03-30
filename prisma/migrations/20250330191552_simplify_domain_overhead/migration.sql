/*
  Warnings:

  - You are about to drop the `Domains` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DomainsToStudyInfos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DomainsToStudyInfos" DROP CONSTRAINT "_DomainsToStudyInfos_A_fkey";

-- DropForeignKey
ALTER TABLE "_DomainsToStudyInfos" DROP CONSTRAINT "_DomainsToStudyInfos_B_fkey";

-- AlterTable
ALTER TABLE "StudyInfos" ADD COLUMN     "domain" "Domain"[];

-- DropTable
DROP TABLE "Domains";

-- DropTable
DROP TABLE "_DomainsToStudyInfos";
