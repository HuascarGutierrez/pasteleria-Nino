import React from 'react';
import HeaderGo from '../moleculas/HeaderGo';
import CartItem from '../atomos/CartItem'; 
import OrderSummary from '../moleculas/OrderSummary';
import InfoButton from '../atomos/InfoButton';
import "./styles/SuccessfulOrder.css";

function SuccessfulOrder() {
  
  return (
    <div className="successful-order">
      <HeaderGo />
      <OrderSummary />
      <InfoButton />
    </div>
  );
}

export default SuccessfulOrder;