export const priceCalculate = (price, discountPercentage) =>
  Math.floor(((100 - discountPercentage) * price) / 100);
