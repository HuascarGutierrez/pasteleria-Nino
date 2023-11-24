import React from 'react';
import HeaderGo from '../molecules/HeaderGo';
import OrderSummary from '../molecules/OrderSummary';
import InfoButton from '../atoms/InfoButton';
import BackButton from '../atoms/BackButton';
import "./styles/OrderTraking.css"
import OrderStatus from './OrderStatus';
import MapImage from '../molecules/MapImage';
import ButtonHome from '../atoms/ButtonHome';
import ButtonGo from '../atoms/ButtonGo';
function SuccessfulOrder() {
  
  return (
    <div className="order">
      <div className='back-buton'>
      <BackButton />
      </div>
      
      <OrderStatus 
        title="Su orden ya fue entregada al repartidor"
        description="Su pastel está en camino..."
      />
      <MapImage />
      <ButtonGo />
      <ButtonHome />
    </div>
  );
}

export default SuccessfulOrder;