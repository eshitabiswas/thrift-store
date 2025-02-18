import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">💲 {product.price}</p>
      </div>
    </div>
  );
};

export default Card;
