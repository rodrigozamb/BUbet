-- CreateTable
CREATE TABLE "user_album_cards" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "album_card_id" TEXT NOT NULL,
    "obtained_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "user_album_cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_album_cards" ADD CONSTRAINT "user_album_cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_album_cards" ADD CONSTRAINT "user_album_cards_album_card_id_fkey" FOREIGN KEY ("album_card_id") REFERENCES "album_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
