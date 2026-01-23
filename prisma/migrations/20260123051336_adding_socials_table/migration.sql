-- CreateEnum
CREATE TYPE "SocialType" AS ENUM ('YOUTUBE', 'INSTAGRAM');

-- AlterTable
ALTER TABLE "seasons" ADD COLUMN     "competitorId" TEXT,
ADD COLUMN     "eventId" TEXT,
ADD COLUMN     "judgeId" TEXT,
ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "socials" (
    "id" TEXT NOT NULL,
    "type" "SocialType" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "judges"("id") ON DELETE SET NULL ON UPDATE CASCADE;
