import React from "react";
import "./products.css";

const ListOfProducts = ({ products, handleAdd }) => {
  const productItems = products;
  // console.log(productItems);

  return (
    <div className="center">
      <div className="productsPage">
        {productItems.map((p) => (
          <div className="productContainer" key={p._id}>
            <div className="product">
              <div className="productImage">
                <img src={p.img} alt="" />
              </div>
              <div className="productDetail">
                <div className="productText">
                  <h2>{p.name}</h2>
                  <p>•${p.price}</p>
                </div>
                <div className="btnContainer">
                  <button className="btnCart" onClick={() => handleAdd(p)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfProducts;
