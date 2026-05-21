-- CreateTable
CREATE TABLE "album_cards_trades" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "traded_at" TIMESTAMP(3),
    "from_user_id" TEXT NOT NULL,
    "to_user_id" TEXT NOT NULL,
    "offered_card_id" TEXT NOT NULL,
    "offered_quantity" INTEGER NOT NULL DEFAULT 1,
    "trade_card_id" TEXT NOT NULL,
    "trade_quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "album_cards_trades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "album_cards_trades" ADD CONSTRAINT "album_cards_trades_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "album_cards_trades" ADD CONSTRAINT "album_cards_trades_to_user_id_fkey" FOREIGN KEY ("to_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "album_cards_trades" ADD CONSTRAINT "album_cards_trades_offered_card_id_fkey" FOREIGN KEY ("offered_card_id") REFERENCES "album_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "album_cards_trades" ADD CONSTRAINT "album_cards_trades_trade_card_id_fkey" FOREIGN KEY ("trade_card_id") REFERENCES "album_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
