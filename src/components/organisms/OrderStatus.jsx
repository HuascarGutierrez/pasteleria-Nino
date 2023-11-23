import React from 'react';
import '../organisms/styles/OrderStatus.css';

function OrderStatus({ title, description }) {
  return (
    <div className="order-status">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default OrderStatus;