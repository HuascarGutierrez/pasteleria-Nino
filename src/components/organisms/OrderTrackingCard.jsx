import React from 'react';
import IconButton from '../atoms/IconButton';
import Button from '../atoms/Button';
import MapCard from '../molecules/MapCard';
import './OrderTrackingCard.css'; // Asegúrate de tener este archivo CSS

function OrderTrackingCard() {
  return (
    <div className="order-tracking-card">
      <IconButton />
      <h3>Su orden ya fue entregada al repartidor</h3>
      <p>Su pastel está en camino...</p>
      <MapCard />
      <Button type="primary">Seguir Pedido</Button>
      <Button type="secondary">Regresar al Inicio</Button>
    </div>
  );
}

export default OrderTrackingCard;
