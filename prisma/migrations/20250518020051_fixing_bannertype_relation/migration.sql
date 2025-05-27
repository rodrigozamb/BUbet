/*
  Warnings:

  - You are about to drop the column `eventId` on the `banner_types` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "banner_types" DROP CONSTRAINT "banner_types_eventId_fkey";

-- AlterTable
ALTER TABLE "banner_types" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "_BannerTypeToEvent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BannerTypeToEvent_AB_unique" ON "_BannerTypeToEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_BannerTypeToEvent_B_index" ON "_BannerTypeToEvent"("B");

-- AddForeignKey
ALTER TABLE "_BannerTypeToEvent" ADD CONSTRAINT "_BannerTypeToEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "banner_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BannerTypeToEvent" ADD CONSTRAINT "_BannerTypeToEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
