import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useDataProvider } from "./context/data-provider";
import { ProductListing } from "./routes/ProductListing";
import Products from "./data/data.json";
import { useEffect } from "react";
import { Cart } from "./routes/Cart";

function App() {
  const { dispatch } = useDataProvider();

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: Products.products });
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ProductListing />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
