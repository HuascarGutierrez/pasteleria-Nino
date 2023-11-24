import React from 'react';
import "./styles/ButtonGo.css";

function InfoButton({ onClick }) {
  return (
    <button className="info-button1" onClick={onClick}>
      Seguir Pedido
    </button>
  );
}

export default InfoButton;
