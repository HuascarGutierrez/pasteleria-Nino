import React from 'react';
import '../molecules/styles/DeliveryStatusHeader.css';

function DeliveryStatusHeader({ status }) {
  return (
    <div className="delivery-status-header">
      <h2>Estado del Pedido</h2>
      <p>{status}</p>
    </div>
  );
}

export default DeliveryStatusHeader;
