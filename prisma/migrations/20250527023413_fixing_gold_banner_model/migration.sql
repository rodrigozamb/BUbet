/*
  Warnings:

  - The primary key for the `bets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `golden_banners` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `bets` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `betId` to the `golden_banners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `golden_banners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bets" DROP CONSTRAINT "bets_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "bets_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "golden_banners" DROP CONSTRAINT "golden_banners_pkey",
ADD COLUMN     "betId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "golden_banners_pkey" PRIMARY KEY ("competitorId", "eventId", "bannerTypeId", "userId");

-- CreateIndex
CREATE INDEX "bets_userId_eventId_idx" ON "bets"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "golden_banners" ADD CONSTRAINT "golden_banners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "golden_banners" ADD CONSTRAINT "golden_banners_betId_fkey" FOREIGN KEY ("betId") REFERENCES "bets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
