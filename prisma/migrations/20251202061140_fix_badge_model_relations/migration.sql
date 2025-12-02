/*
  Warnings:

  - You are about to drop the column `competitor_id` on the `badges` table. All the data in the column will be lost.
  - You are about to drop the column `judge_id` on the `badges` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `badges` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "badges" DROP CONSTRAINT "badges_competitor_id_fkey";

-- DropForeignKey
ALTER TABLE "badges" DROP CONSTRAINT "badges_judge_id_fkey";

-- DropForeignKey
ALTER TABLE "badges" DROP CONSTRAINT "badges_user_id_fkey";

-- AlterTable
ALTER TABLE "badges" DROP COLUMN "competitor_id",
DROP COLUMN "judge_id",
DROP COLUMN "user_id";

-- CreateTable
CREATE TABLE "_BadgeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BadgeToCompetitor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BadgeToJudge" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BadgeToUser_AB_unique" ON "_BadgeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BadgeToUser_B_index" ON "_BadgeToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BadgeToCompetitor_AB_unique" ON "_BadgeToCompetitor"("A", "B");

-- CreateIndex
CREATE INDEX "_BadgeToCompetitor_B_index" ON "_BadgeToCompetitor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BadgeToJudge_AB_unique" ON "_BadgeToJudge"("A", "B");

-- CreateIndex
CREATE INDEX "_BadgeToJudge_B_index" ON "_BadgeToJudge"("B");

-- AddForeignKey
ALTER TABLE "_BadgeToUser" ADD CONSTRAINT "_BadgeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "badges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToUser" ADD CONSTRAINT "_BadgeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToCompetitor" ADD CONSTRAINT "_BadgeToCompetitor_A_fkey" FOREIGN KEY ("A") REFERENCES "badges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToCompetitor" ADD CONSTRAINT "_BadgeToCompetitor_B_fkey" FOREIGN KEY ("B") REFERENCES "competitors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToJudge" ADD CONSTRAINT "_BadgeToJudge_A_fkey" FOREIGN KEY ("A") REFERENCES "badges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToJudge" ADD CONSTRAINT "_BadgeToJudge_B_fkey" FOREIGN KEY ("B") REFERENCES "judges"("id") ON DELETE CASCADE ON UPDATE CASCADE;
