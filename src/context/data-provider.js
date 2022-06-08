import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const initialState = {
  products: [],
  cart: [],
  saveForLater: [],
};
export const DataContext = createContext(initialState);

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [{ products, cart, saveForLater }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <DataContext.Provider value={{ products, cart, saveForLater, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
