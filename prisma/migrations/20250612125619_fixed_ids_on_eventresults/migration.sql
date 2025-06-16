/*
  Warnings:

  - You are about to drop the column `eventResultsCompetitorId` on the `banner_types` table. All the data in the column will be lost.
  - You are about to drop the column `eventResultsEventId` on the `banner_types` table. All the data in the column will be lost.
  - The primary key for the `events_results` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `events_results` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "banner_types" DROP CONSTRAINT "banner_types_eventResultsCompetitorId_eventResultsEventId_fkey";

-- AlterTable
ALTER TABLE "banner_types" DROP COLUMN "eventResultsCompetitorId",
DROP COLUMN "eventResultsEventId";

-- AlterTable
ALTER TABLE "events_results" DROP CONSTRAINT "events_results_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "events_results_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_BannerTypeToEventResults" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BannerTypeToEventResults_AB_unique" ON "_BannerTypeToEventResults"("A", "B");

-- CreateIndex
CREATE INDEX "_BannerTypeToEventResults_B_index" ON "_BannerTypeToEventResults"("B");

-- AddForeignKey
ALTER TABLE "_BannerTypeToEventResults" ADD CONSTRAINT "_BannerTypeToEventResults_A_fkey" FOREIGN KEY ("A") REFERENCES "banner_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BannerTypeToEventResults" ADD CONSTRAINT "_BannerTypeToEventResults_B_fkey" FOREIGN KEY ("B") REFERENCES "events_results"("id") ON DELETE CASCADE ON UPDATE CASCADE;
