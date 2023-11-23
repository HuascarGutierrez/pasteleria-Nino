import React from 'react';
import HeaderGo from '../molecules/HeaderGo';
import OrderSummary from '../molecules/OrderSummary';
import InfoButton from '../atoms/InfoButton';
import BackButton from '../atoms/BackButton';
import "./styles/SuccesfulOrder.css"

function SuccessfulOrder() {
  
  return (
    <div className="successful-order">
      <div className='back-buton'>
      <BackButton />
      </div>
       
      <HeaderGo />
      <OrderSummary />
      <InfoButton />
    </div>
  );
}

export default SuccessfulOrder;