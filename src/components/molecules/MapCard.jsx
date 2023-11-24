import React from 'react';
import '../molecules/styles/MapCard.css';
import mapImage from '/images/Group 347.png'; 

function MapCard() {
  return (
    <div className="map-card">
      <img src={mapImage} alt="Mapa" />
    </div>
  );
}

export default MapCard;
