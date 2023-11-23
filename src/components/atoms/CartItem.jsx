import React from 'react';
import "./styles/CartItem.css";

function CartItem({ title, quantity, price, description, imageUrl }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img src={imageUrl} alt={title} className="cart-item-image" />
      </div>
      <div className="cart-item-info">
        <h3 className="cart-item-title">{title}</h3>
        <p className="cart-item-quantity">{`Cantidad ${quantity} unidades`}</p>
        <p className="cart-item-description">{description}</p>
        <p className="cart-item-price">{`Bs ${price}`}</p>
      </div>
    </div>
  );
}

export default CartItem;
