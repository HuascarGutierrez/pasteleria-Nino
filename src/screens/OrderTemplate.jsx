import React from 'react';
import OrderDetails from '../components/organisms/OrderDetails';
import "./styles/OrderTemplate.css"

function OrderTemplate({ orderInfo }) {
  return (
    <div className="order-template">
      <OrderDetails orderInfo={orderInfo} />
    </div>
  );
}

export default OrderTemplate;
