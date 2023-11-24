import React from 'react';
import '../molecules/styles/OrderStatusProgress.css'

function OrderStatusProgress({ currentStage }) {
  // Los íconos serían imágenes o SVGs que representan cada estado del pedido
  const statusIcons = {
    preparing: '/icons/Group 348.png', 
   
  };

  return (
    <div className="order-status-progress">
      <div className={`status-icon ${currentStage >= 0 ? 'active' : ''}`}>
        <img src={statusIcons.preparing} alt="Preparándose" />
      </div>
    </div>
  );
}

export default OrderStatusProgress;
