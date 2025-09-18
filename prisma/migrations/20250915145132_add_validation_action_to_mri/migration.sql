-- CreateTable
CREATE TABLE "_validation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_validation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_validation_B_index" ON "_validation"("B");

-- AddForeignKey
ALTER TABLE "_validation" ADD CONSTRAINT "_validation_A_fkey" FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_validation" ADD CONSTRAINT "_validation_B_fkey" FOREIGN KEY ("B") REFERENCES "Mri"("id") ON DELETE CASCADE ON UPDATE CASCADE;
