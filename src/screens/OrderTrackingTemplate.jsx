import React from 'react';
import BackButton from '../components/atoms/BackButton';
import MapCard from '../components/molecules/MapCard'; 
import Button from '../components/atoms/Button'; 
import '../screens/styles/OrderTrackingTemplate.css'; 

function OrderTrackingTemplate() {
  
  const handleBackClick = () => {
    console.log('Retroceder');
  };
  const handleTrackOrder = () => {
    console.log('Seguir Pedido');
  };
  const handleReturnHome = () => {
    console.log('Regresar al Inicio');
  };
  return (
    <div className="order-tracking-template">
      <BackButton onClick={handleBackClick} />
      <div className="order-tracking-content">
        <h3>Su orden ya fue entregada al repartidor</h3>
        <p>Su pastel está en camino...</p>
        <MapCard />
        <Button type="primary" onClick={handleTrackOrder}>Seguir Pedido</Button>
        <Button type="secondary" onClick={handleReturnHome}>Regresar al Inicio</Button>
      </div>
    </div>
  );
}
export default OrderTrackingTemplate;
