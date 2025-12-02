-- AlterTable
ALTER TABLE "users" ADD COLUMN     "favorite_competitor_id" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_favorite_competitor_id_fkey" FOREIGN KEY ("favorite_competitor_id") REFERENCES "competitors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
