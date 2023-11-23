import React from 'react';
import "./styles/BackButton.css";


function BackButton() {
  return (
    <a className="back-button">
     <img src='public/flecha atras.svg' className='back-button-icon' alt="" />
    </a>
  );
}

export default BackButton;
