function maxProfit(prices) {
  let minPrice = prices[0];

  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;
    maxPrice = Math.max(maxPrice, potentialProfit);
  }

  return maxPrice;
}

console.log(
  `Found maximum profit to be: $${maxProfit([7, 1, 3, 5, 8, 6, 9, 11])}`
);
