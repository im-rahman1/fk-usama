import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { getProducts } from "./services/fakeProductsServices";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/routes.js";

const App = () => {
  const products = getProducts();

  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    const ifProductExists = cartItems.find((item) => item._id === product._id);

    if (ifProductExists) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...ifProductExists, quantity: ifProductExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const ifProductExists = cartItems.find((item) => item._id === product._id);

    if (ifProductExists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...ifProductExists, quantity: ifProductExists.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <NavBar cartItems={cartItems} />
        <Routes
          products={products}
          cartItems={cartItems}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      </Router>
      {/* <ProductsPage></ProductsPage> */}
      {/* <Cart></Cart> */}
    </>
  );
};

export default App;

// send selected products to cart
