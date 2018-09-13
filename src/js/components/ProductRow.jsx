import React from "react";

const ProductRow = ({ productItem }) => {
  return (
    <div>
      <p>
        {productItem.name} - {productItem.price} -{" "}
        {productItem.stocked ? "in stock" : "NOT in stock"}
      </p>
    </div>
  );
};

export default ProductRow;
