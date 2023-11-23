import React from 'react';
import "./styles/OrderSummaryItem.css";

function OrderSummaryItem({ title, value }) {
  return (
    <div className="order-summary-item">
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </div>
  );
}

export default OrderSummaryItem;