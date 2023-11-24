import React from 'react';
import "./styles/ButtonHome.css";

function InfoButton({ onClick }) {
  return (
    <button className="info-button" onClick={onClick}>
      Regresar al inicio
    </button>
  );
}

export default InfoButton;
