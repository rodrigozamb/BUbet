-- CreateTable
CREATE TABLE "user_album_packs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "card_pack_id" TEXT NOT NULL,
    "obtained_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_obtained_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "user_album_packs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_album_packs" ADD CONSTRAINT "user_album_packs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_album_packs" ADD CONSTRAINT "user_album_packs_card_pack_id_fkey" FOREIGN KEY ("card_pack_id") REFERENCES "card_packs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
