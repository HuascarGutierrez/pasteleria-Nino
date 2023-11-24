import React from 'react';
import '../molecules/styles/DeliveryInfo.css';
import deliveryIcon from '/icons/image 13.png'; 

function DeliveryInfo({ name, imageUrl }) {
  return (
    <div className="delivery-info">
      <img src={'/icons/image 13.png' || deliveryIcon} alt="Delivery person" />
      <span>{name}</span>
    </div>
  );
}

export default DeliveryInfo;
