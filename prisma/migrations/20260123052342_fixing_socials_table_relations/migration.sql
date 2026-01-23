/*
  Warnings:

  - You are about to drop the column `competitorId` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `judgeId` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `seasons` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_competitorId_fkey";

-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_eventId_fkey";

-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_judgeId_fkey";

-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_userId_fkey";

-- AlterTable
ALTER TABLE "seasons" DROP COLUMN "competitorId",
DROP COLUMN "eventId",
DROP COLUMN "judgeId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "socials" ADD COLUMN     "competitorId" TEXT,
ADD COLUMN     "eventId" TEXT,
ADD COLUMN     "judgeId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "judges"("id") ON DELETE SET NULL ON UPDATE CASCADE;
