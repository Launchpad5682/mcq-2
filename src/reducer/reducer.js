export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: [...action.payload] };
    case "ADD_TO_CART":
      const found = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (!found) {
        console.log(found);
        const product = state.products.find(
          (product) => product.id === action.payload.id
        );
        const cart = { ...product, quantity: 1 };
        return { ...state, cart: [...state.cart, cart] };
      }
      return state;
    case "REMOVE_FROM_CART": {
      const cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, cart };
    }
    case "INCREASE_QUANTITY_IN_CART": {
      const cart = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      return { ...state, cart };
    }
    case "DECREASE_QUANTITY_IN_CART": {
      const cart = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      return { ...state, cart };
    }
    case "MOVE_TO_SAVE_FOR_LATER": {
      const product = state.cart.find(
        (product) => product.id === action.payload.id
      );
      const cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      const saveForLater = [...state.saveForLater, product];

      return { ...state, cart, saveForLater };
    }
    case "MOVE_TO_CART": {
      const product = state.saveForLater.find(
        (product) => product.id === action.payload.id
      );
      const saveForLater = state.saveForLater.filter(
        (product) => product.id !== action.payload.id
      );
      const cart = [...state.cart, product];

      return { ...state, cart, saveForLater };
    }
    case "REMOVE_FROM_SAVE_FOR_LATER": {
      const saveForLater = state.saveForLater.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, saveForLater };
    }
    default:
      return state;
  }
};
