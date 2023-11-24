import React from 'react';
import CardTracking from '../components/organisms/CardTracking';
import './styles/OrderTemplate.css';

function OrderTemplate() {
  const orderStatus = "En camino";
  const deliveryPerson = {
    name: "Juan Carlos Torrez",
    imageUrl: "path-to-delivery-person-image.jpg" 
  };
  const mapImageUrl = "path-to-map-image.jpg"; 

  return (
    <div className="order-template">
      <CardTracking 
        status={orderStatus} 
        deliveryPerson={deliveryPerson} 
        mapImageUrl={mapImageUrl} 
      />
    </div>
  );
}

export default OrderTemplate;
