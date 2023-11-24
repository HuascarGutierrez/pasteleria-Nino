import React from 'react';
import OrderStatus from './OrderStatus';
import MapImage from '../molecules/MapImage';
import '../organisms/styles/OrderTrackingTemplate.css';

function OrderTrackingTemplate() {
  return (
    <div className="order-tracking-template">
      <OrderStatus 
        title="Su orden ya fue entregada al repartidor"
        description="Su pastel está en camino..."
      />
      <MapImage />
      <Button type="primary">Seguir Pedido</Button>
      <Button type="secondary">Regresar al Inicio</Button>
    </div>
  );
}

export default OrderTrackingTemplate;