import React from "react";
import { Header } from "../components/Header";
import { PriceDetails } from "../components/PriceDetails";
import { VerticalCard } from "../components/VerticalCard";
import { useDataProvider } from "../context/data-provider";

export function Cart() {
  const { cart, saveForLater, dispatch } = useDataProvider();

  const increaseQuantity = (id) =>
    dispatch({ type: "INCREASE_QUANTITY_IN_CART", payload: { id } });

  const decreaseQuantity = (id) =>
    dispatch({ type: "DECREASE_QUANTITY_IN_CART", payload: { id } });

  const removeProduct = (id, inCart) => {
    if (inCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    } else {
      dispatch({ type: "REMOVE_FROM_SAVE_FOR_LATER", payload: { id } });
    }
  };

  const saveHandler = (id, inCart) => {
    if (inCart) {
      dispatch({ type: "MOVE_TO_SAVE_FOR_LATER", payload: { id } });
    } else {
      dispatch({ type: "MOVE_TO_CART", payload: { id } });
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-5">
      <Header />
      <div className="flex h-full w-full pb-6 overflow-y-auto">
        <div className="w-4/6 overflow-y-auto p-10 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-2xl">Orders</div>
            {cart.map((product) => (
              <VerticalCard
                quantityHandler={{ increaseQuantity, decreaseQuantity }}
                product={product}
                saveHandler={saveHandler}
                inCart={true}
                removeHandler={removeProduct}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl">Save for Later</div>
            {saveForLater.map((product) => (
              <VerticalCard
                product={product}
                saveHandler={saveHandler}
                inCart={false}
                removeHandler={removeProduct}
              />
            ))}
          </div>
        </div>
        <div className="bg-blue-200 w-2/6 h-full">
          <PriceDetails />
        </div>
      </div>
    </div>
  );
}
