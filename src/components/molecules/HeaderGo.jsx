import React from 'react';
import BackButton from '../atoms/BackButton';
import BalloonsImage from '../atoms/BalloonsImage';
import SuccessfulMessage from '../atoms/SuccessMessage';
import "./styles/HeaderGo.css";

function HeaderGo() {
  return (

    <div className="header-go">
      <BackButton/>
      <BalloonsImage />
      <SuccessfulMessage message="¡Tu pedido fue realizado con éxito!" />
    </div>
  );
}

export default HeaderGo;
