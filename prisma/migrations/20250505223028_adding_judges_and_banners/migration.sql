/*
  Warnings:

  - You are about to drop the column `judges` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "judges";

-- CreateTable
CREATE TABLE "judges" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "judges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banner_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "banner_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "golden_banners" (
    "competitorId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "bannerTypeId" TEXT NOT NULL,

    CONSTRAINT "golden_banners_pkey" PRIMARY KEY ("competitorId","eventId","bannerTypeId")
);

-- CreateTable
CREATE TABLE "_EventToJudge" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToJudge_AB_unique" ON "_EventToJudge"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToJudge_B_index" ON "_EventToJudge"("B");

-- AddForeignKey
ALTER TABLE "golden_banners" ADD CONSTRAINT "golden_banners_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "golden_banners" ADD CONSTRAINT "golden_banners_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "golden_banners" ADD CONSTRAINT "golden_banners_bannerTypeId_fkey" FOREIGN KEY ("bannerTypeId") REFERENCES "banner_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToJudge" ADD CONSTRAINT "_EventToJudge_A_fkey" FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToJudge" ADD CONSTRAINT "_EventToJudge_B_fkey" FOREIGN KEY ("B") REFERENCES "judges"("id") ON DELETE CASCADE ON UPDATE CASCADE;
