import React from "react";
import { useDataProvider } from "../context/data-provider";
import { calculateCartTotal } from "../utils/calculateCartTotal";

export function PriceDetails() {
  const { cart } = useDataProvider();
  const { count, totalPrice, discount, totalRealizedPrice } =
    calculateCartTotal(cart);

  return (
    <div className="flex flex-col gap-5 p-10 text-2xl">
      PriceDetails
      <div className="flex justify-between">
        <span>Price ({count} item)</span>
        <span>Rs {totalPrice}</span>
      </div>
      <div className="flex justify-between">
        <span>Discount</span>
        <span>Rs {discount}</span>
      </div>
      <div className="w-full h-1 bg-black"></div>
      <div className="flex justify-between">
        <span>Total Price</span>
        <span>Rs {totalRealizedPrice}</span>
      </div>
    </div>
  );
}
