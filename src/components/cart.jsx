import React from "react";
import "./cart.css";

const Cart = ({ cartItems, handleAdd, handleRemove }) => {
  const totalCartPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div>
      {cartItems.length === 0 && (
        <div>
          <h2 className="emptyCart">Cart is Empty</h2>
        </div>
      )}
      <div className="cartProducts">
        <div className="container">
          {cartItems.map((cartProduct) => (
            <div key={cartProduct._id}>
              <div className="productItem">
                <div className="imgDescContainer">
                  <div className="productImg">
                    <img src={cartProduct.img} alt=""></img>
                  </div>
                  <div className="productText">
                    <h2>{cartProduct.name}</h2>
                    <p>•${cartProduct.price}</p>
                  </div>
                </div>
                <div className="counterContainer">
                  <div className="counter">
                    <button
                      onClick={() => handleRemove(cartProduct)}
                      className="btn">
                      -
                    </button>
                    <span>{cartProduct.quantity}</span>
                    <button
                      onClick={() => handleAdd(cartProduct)}
                      className="btn">
                      +
                    </button>
                  </div>
                  <p>${cartProduct.quantity * cartProduct.price}</p>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <div className="totalCartPrice">
              <p>
                Total Price:{" "}
                <span className="totalPrice">${totalCartPrice}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
