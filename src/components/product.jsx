import React from "react";
import "./product.css";

function Product(props) {
  let { name, price, pic, k } = props;
  // console.log(pic);

  let handleClick = (ky) => {
    return ky;
  };

  return (
    <div>
      <div className="productContainer">
        <div className="product">
          <div className="productImage">
            <img src={pic} alt="" />
          </div>
          <div className="productDetail">
            <div className="productText">
              <h3>{name}</h3>
              <p>•{price}</p>
            </div>
            <div className="btnContainer">
              <button className="btnCart" onClick={() => handleClick(k)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
