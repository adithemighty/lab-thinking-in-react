import React, { Component } from "react";
import { data } from "../../../data.json";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      products: data,
      stockCheckbox: false
    };
    this._handleSearch = this._handleSearch.bind(this);
    // this._handleSearchProducts = this._handleSearchProducts.bind(this);
    this._handleStockCheckboxChange = this._handleStockCheckboxChange.bind(
      this
    );
  }

  render() {
    // console.log(data);

    const filteredProducts = this.state.products.filter(product => {
      // if(this.state.stockCheckbox){

      // }
      return product.name.match(
        new RegExp(`.*${this.state.searchQuery}.*`, "i")
      );
    });
    return (
      <div>
        <SearchBar
          handleSearch={this._handleSearch}
          handleStockCheckboxChange={this._handleStockCheckboxChange}
          searchQuery={this.state.searchQuery}
          stockCheckbox={this.state.stockCheckbox}
        />

        <ProductTable
          products={filteredProducts}
          stockCheckbox={this.state.stockCheckbox}
        />
      </div>
    );
  }

  _handleSearch(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  _handleStockCheckboxChange() {
    this.setState({
      stockCheckbox: !this.state.stockCheckbox
    });
  }
}

export default FilterableProductTable;
