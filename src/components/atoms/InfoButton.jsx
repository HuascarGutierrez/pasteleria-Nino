import React from 'react';
import "./styles/InfoButton.css";

function InfoButton({ onClick }) {
  return (
    <button className="info-button" onClick={onClick}>
      Información
    </button>
  );
}

export default InfoButton;
