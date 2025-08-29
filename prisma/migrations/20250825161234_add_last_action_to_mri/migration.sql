/*
  Warnings:

  - Added the required column `lastEditedActionId` to the `Mri` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Mri" ADD COLUMN     "lastEditedActionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Action" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mri" ADD CONSTRAINT "Mri_lastEditedActionId_fkey" FOREIGN KEY ("lastEditedActionId") REFERENCES "public"."Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
