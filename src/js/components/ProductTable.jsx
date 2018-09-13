import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = ({ products, stockCheckbox }) => {
  const productCategories = [];

  products.forEach(product => {
    //find all unique product categories
    if (!productCategories.includes(product.category)) {
      productCategories.push(product.category);
    }
  });

  //sort all the products according to the unique categories
  //so that in the end I get an array with category objects that contain all product belonging to that one category
  const productsSortedByCategory = productCategories.map(category => {
    let productsForCategory = {};
    productsForCategory[category] = products.filter(product => {
      if (stockCheckbox) {
        if (product.category === category && product.stocked === true)
          return product;
      } else {
        if (product.category === category) return product;
      }
    });
    return productsForCategory;
  });

  //go through the categories
  //create a ProductCategoryRow component for the component
  //create ProductRow for all items
  const productsMappedByCategory = productsSortedByCategory.map(product => {
    let category = Object.keys(product)[0];

    let products = product[category].map(el => {
      return <ProductRow productItem={el} />;
    });

    return (
      <div>
        <ProductCategoryRow categoryTitle={category} />
        {products}
      </div>
    );
  });

  return <div>{productsMappedByCategory}</div>;
};

export default ProductTable;
