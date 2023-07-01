import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, []);

  function handleStockClick(id) {
    const newPortfolioStock = stocks.filter(stock => stock.id === id)
    setPortfolioStocks([...portfolioStocks, newPortfolioStock[0]]);

    portfolioStocks.map(portfolioStock => {
      if (portfolioStock.id === id) {
        return setPortfolioStocks(portfolioStocks.filter(portfolioStock => portfolioStock.id !== id))
      } else {
        return portfolioStock
      }      
    });
  }

  return (
    <div>
      <SearchBar 
        onFilter={setFilterValue}
        onSort={setSelectedSort} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocks} 
            onStockClick={handleStockClick} 
            filterValue={filterValue}
            selectedSort={selectedSort} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolioStocks={portfolioStocks} 
            onStockClick={handleStockClick} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
