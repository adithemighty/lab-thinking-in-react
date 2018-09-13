import React from "react";
import FilterableProductTable from "./FilterableProductTable";

class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <FilterableProductTable />
      </div>
    );
  }
}

export default Application;
