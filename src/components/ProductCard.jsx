import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { priceCalculate } from "../utils/priceCalculate";

export function ProductCard({ product, clickHandler }) {
  const { id, title, price, discountPercentage, thumbnail } = product;

  return (
    <div className="w-64 h-72 rounded-md shadow-2xl border-1 border-blue-700">
      <div className="w-full h-40 aspect-auto rounded-t-md">
        <img
          src={thumbnail}
          alt={`title-id`}
          className="w-full h-full rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="font-semibold">{title}</div>
        <div className="flex gap-5 text-xl">
          <span className="line-through">{price}</span>
          <span>{priceCalculate(price, discountPercentage)}</span>
          <span>{discountPercentage} %</span>
        </div>
        <button
          className="flex gap-2 items-center bg-blue-600 text-white font-bold text-lg p-1 rounded-md"
          onClick={() => clickHandler(id)}
        >
          <AiOutlineShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}
