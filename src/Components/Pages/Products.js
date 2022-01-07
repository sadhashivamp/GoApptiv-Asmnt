import React from "react";
import "./Pages.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products-list">
      {productItems.map((productItems) => (
        <div className="card">
          <div>
            <img className="product-image" src={productItems.image} alt="" />
          </div>

          <div>
            <h3 className="product.name">{productItems.name}</h3>
          </div>
          <div className="product-price">${productItems.price}</div>
          <div>
            <button
              className="product-add-button"
              onClick={() => handleAddProduct(productItems)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
