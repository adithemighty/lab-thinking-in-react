import React from "react";

const SearchBar = ({
  handleSearch,
  searchQuery,
  handleSearchProducts,
  handleStockCheckboxChange,
  stockCheckbox
}) => {
  return (
    <div>
      <label htmlFor="stock">Only show products in stock</label>
      <input
        type="checkbox"
        id="stock"
        onChange={() => handleStockCheckboxChange()}
      />
      <label htmlFor="search">What are you looking for?</label>
      <input
        id="search"
        type="text"
        onChange={event => handleSearch(event)}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchBar;
