import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick, filterValue, selectedSort }) {

  const filteredStocks = stocks.filter(stock => {
    if (filterValue === "All") return true
    return stock.type === filterValue
  });

  const stocksToDisplay = selectedSort === "alpha" ? filteredStocks.toSorted((a, b) => {
    const nameA = a.ticker.toLowerCase();
    const nameB = b.ticker.toLowerCase();
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
: selectedSort === "price" ? filteredStocks.toSorted((a, b) => a.price - b.price)
: filteredStocks

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map(stock => (
        <Stock key={stock.id} stock={stock} onStockClick={onStockClick} />
      ))}
    </div>
  );
}

export default StockContainer;
