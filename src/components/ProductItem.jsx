import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.content}</p>
        <p className="card-text"><strong>{product.price} VND</strong></p>
      </div>
    </div>
  );
};

export default ProductItem;
