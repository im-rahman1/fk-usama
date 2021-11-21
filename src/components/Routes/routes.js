import React from "react";
import ListOfProducts from "../listOfProducts";
import Cart from "../cart.jsx";
import { Route, Switch } from "react-router-dom";

const Routes = ({ products, cartItems, handleAdd, handleRemove }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <ListOfProducts products={products} handleAdd={handleAdd} />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
