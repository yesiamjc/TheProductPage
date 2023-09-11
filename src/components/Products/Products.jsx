import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="all">
      <div className="rowos-one">
        <div className="card1-row-1">
          <img id="imgRow1" src="../src/assets/website.jpeg" alt="" />
          <p className="textRow1-card1 para">
            Web Development
            <h3>₹ 3000</h3>
            <button className="btn-card1-row1 para">Add To Cart</button>
          </p>
        </div>
        <div className="card2-row-1">
          <img id="imgRow1" src="../src/assets/ios.jpeg" alt="" />
          <p className="textRow1-card2 para">
            Android
            <h3>₹ 3000</h3>
            <button className="btn-card1-row1">Add To Cart</button>
          </p>
        </div>
        <div className="card3-row-1">
          <img id="imgRow1" src="../src/assets/app.jpeg" alt="" />
          <p className="textRow1-card3 para">
            IOS
            <h3>₹ 3000</h3>
            <button className="btn-card1-row1">Add To Cart</button>
          </p>
        </div>
        <div className="card4-row-1">
          <img id="imgRow1" src="../src/assets/fullstack.jpeg" alt="" />
          <p className="textRow1-card4 para">
            Full Stack
            <h3>₹ 3000</h3>
            <button className="btn-card1-row1">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
