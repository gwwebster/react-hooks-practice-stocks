import React from "react";

function SearchBar({ onFilter, onSort }) {

  return (
    <div>
      <strong>Sort by:</strong>
      <form onChange={(e) => onSort(e.target.id)} >
        <label>
          <input
            type="radio"
            value="Alphabetically"
            id="alpha"
            name="sort"
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            id="price"
            name="sort"
          />
          Price (Ascending)
        </label>
      </form>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
