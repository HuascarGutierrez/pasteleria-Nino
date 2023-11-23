import React from 'react';
import "../atomos/styles/OrderSummaryItem.css";

function OrderSummaryItem({ title, value }) {
  return (
    <div className="order-summary-item">
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </div>
  );
}

export default OrderSummaryItem;