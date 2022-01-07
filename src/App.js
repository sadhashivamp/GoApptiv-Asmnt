import React, { useState } from "react";
import ProductData from "./Components/Data/ProductsData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/Pages/About";
import Signup from "./Components/Pages/Signup";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Pages/Products";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";

const App = () => {
  const { productItems } = ProductData;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };
  return (
    <div>
      <Router>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
