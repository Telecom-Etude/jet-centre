-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "senior" BOOLEAN;

-- AlterTable
ALTER TABLE "Study" ADD COLUMN     "referentID" TEXT;

-- CreateTable
CREATE TABLE "_senior" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_senior_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_senior_B_index" ON "_senior"("B");

-- AddForeignKey
ALTER TABLE "Study" ADD CONSTRAINT "Study_referentID_fkey" FOREIGN KEY ("referentID") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_senior" ADD CONSTRAINT "_senior_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_senior" ADD CONSTRAINT "_senior_B_fkey" FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;
