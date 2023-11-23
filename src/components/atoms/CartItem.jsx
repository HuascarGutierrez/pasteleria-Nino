import React from 'react';
import "./styles/CartItem.css";

function CartItem({ title, quantity, price, description, imageUrl }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={title} className="cart-item-image" />
      <div className="cart-item-content">
        <div className="cart-item-header">
          <h3 className="cart-item-title">{title}</h3>
         
        </div>
        
          <p className="cart-item-quantity">{`Cantidad ${quantity} unidades`}</p>
      <div className="cart-item-body">
          <div className='precio_desc'>
          <p className="cart-item-description">{description}</p>
          <div className = "precio">
          <span className="cart-item-price">{`Bs ${price}`}</span>
          </div>


            
           
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default CartItem;