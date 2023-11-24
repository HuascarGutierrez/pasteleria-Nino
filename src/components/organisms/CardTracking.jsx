import React from 'react';
import DeliveryStatusHeader from '../molecules/DeliveryStatusHeader';
import DeliveryInfo from '../molecules/DeliveryInfo';
import MapCard from '../molecules/MapCard'; // Suponiendo que ya tienes un componente MapCard
import Button from '../atoms/Button';
import '../organisms/styles/CardTracking.css';
import BackButton from '../atoms/BackButton';
import OrderStatusProgress from '../molecules/OrderStatusProgress';

function CardTracking({ status, deliveryPerson, mapImageUrl }) {
  return (
    <div className="card-tracking">
      <BackButton />
      <OrderStatusProgress/>
      <DeliveryStatusHeader status={status} />
      <MapCard imageUrl={mapImageUrl} />
      <DeliveryInfo name={deliveryPerson.name} imageUrl={deliveryPerson.imageUrl} />
      <Button type="primary">Seguir Pedido</Button>
      <Button type="secondary">Regresar al Inicio</Button>
    </div>
  );
}

export default CardTracking;
