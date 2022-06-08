export const calculateCartTotal = (cart) => {
  const total = { totalPrice: 0, discount: 0, totalRealizedPrice: 0, count: 0 };

  cart.forEach((product) => {
    total.totalPrice =
      total.totalPrice + Number(product.price) * Number(product.quantity);
    total.totalRealizedPrice =
      total.totalRealizedPrice +
      Math.floor(
        ((product.price * (100 - product.discountPercentage)) / 100) *
          product.quantity
      );
    total.count = total.count + product.quantity;
  });

  total.discount = total.totalPrice - total.totalRealizedPrice;
  return total;
};
