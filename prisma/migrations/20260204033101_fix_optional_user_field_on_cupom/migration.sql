/*
  Warnings:

  - Made the column `userId` on table `cupons` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cupons" DROP CONSTRAINT "cupons_userId_fkey";

-- AlterTable
ALTER TABLE "cupons" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "cupons" ADD CONSTRAINT "cupons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
