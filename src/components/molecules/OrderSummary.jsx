import React from 'react';
import OrderSummaryItem from '../atomos/OrderSummaryItem';
import "./styles/OrderSummary.css";

function OrderSummary() {
  return (
    <div className="order-summary">
      <OrderSummaryItem title="Sub Total" value="Bs. 18" />
      <OrderSummaryItem title="Delivery" value="Bs. 10" />
      <OrderSummaryItem title="Total" value="Bs. 28" />
    </div>
  );
}

export default OrderSummary;