import React from 'react';
import HeaderGo from '../molecules/HeaderGo';
import OrderSummary from '../molecules/OrderSummary';
import InfoButton from '../atoms/InfoButton';
import "./styles/SuccesfulOrder.css"

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