import React from 'react';
import './MapCard.css'; // Asegúrate de tener este archivo CSS
import mapImage from './path-to-map-image.jpg'; // Asegúrate de tener esta imagen en tus activos

function MapCard() {
  return (
    <div className="map-card">
      <img src={mapImage} alt="Mapa" />
    </div>
  );
}

export default MapCard;
