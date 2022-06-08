import React from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { useDataProvider } from "../context/data-provider";

export function ProductListing() {
  const { products, dispatch } = useDataProvider();

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: { id } });
  };

  return (
    <div className="h-screen w-full overflow-y-auto flex flex-col gap-5">
      <Header />
      <div className="flex flex-row max-w-full gap-32 flex-wrap p-5">
        {products.map((product) => (
          <ProductCard
            product={product}
            clickHandler={addToCart}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
