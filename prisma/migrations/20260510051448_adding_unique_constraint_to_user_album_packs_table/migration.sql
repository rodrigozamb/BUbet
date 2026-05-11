/*
  Warnings:

  - A unique constraint covering the columns `[user_id,card_pack_id]` on the table `user_album_packs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_album_packs_user_id_card_pack_id_key" ON "user_album_packs"("user_id", "card_pack_id");
