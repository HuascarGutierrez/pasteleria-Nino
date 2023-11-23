import React from 'react';
import '../molecules/styles/MapImage.css';
/*import mapImage from './path-to-your-map-image.jpg'; // Asegúrate de reemplazar esto con la ruta real a tu imagen de mapa*/

function MapImage() {
  return (
    <div className="map-container">
      <img src={mapImage} alt="Mapa del seguimiento del pedido" />
    </div>
  );
}

export default MapImage;