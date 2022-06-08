import React from "react";
import { priceCalculate } from "../utils/priceCalculate";

export function VerticalCard({
  product,
  quantityHandler = {},
  inCart,
  saveHandler,
  removeHandler,
}) {
  const { id, title, thumbnail, price, discountPercentage, quantity } = product;
  return (
    <div className="flex flex-row w-full h-48 rounded-md gap-4 shadow-2xl border-1 border-blue-700">
      <div className="h-full w-48 flex flex-col gap-2">
        <img src={thumbnail} alt={`title-id`} />
        <div className="text-2xl text-black flex gap-2 items-center">
          <button
            disabled={quantity <= 1 || !inCart}
            className="rounded-full bg-red-50 h-10 w-10"
            onClick={() => quantityHandler?.decreaseQuantity(id)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="rounded-full bg-red-50 h-10 w-10"
            disabled={!inCart}
            onClick={() => quantityHandler?.increaseQuantity(id)}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div className="text-2xl">{title}</div>
        <div className="flex gap-5 text-xl">
          <span className="line-through">{price}</span>
          <span>{priceCalculate(price, discountPercentage)}</span>
          <span>{discountPercentage} %</span>
        </div>
        <div className="flex gap-5">
          <button onClick={() => saveHandler(id, inCart)} className="text-xl ">
            {inCart ? "SAVE FOR LATER" : "MOVE TO WISHLIST"}
          </button>
          <button onClick={() => removeHandler(id, inCart)} className="text-xl">
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
