/*
  Warnings:

  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_statusId_fkey";

-- DropTable
DROP TABLE "Status";

-- CreateTable
CREATE TABLE "DocStatus" (
    "id" TEXT NOT NULL,
    "docsId" TEXT NOT NULL,
    "created" TIMESTAMP(3),
    "wrote" TIMESTAMP(3),
    "audited" TIMESTAMP(3),
    "sent" TIMESTAMP(3),
    "approved" TIMESTAMP(3),
    "signed" TIMESTAMP(3),
    "end_of_validity" TIMESTAMP(3),
    "writing_deadline" TIMESTAMP(3),
    "documentId" TEXT NOT NULL,

    CONSTRAINT "DocStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocStatus_docsId_key" ON "DocStatus"("docsId");

-- CreateIndex
CREATE UNIQUE INDEX "DocStatus_documentId_key" ON "DocStatus"("documentId");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "DocStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
