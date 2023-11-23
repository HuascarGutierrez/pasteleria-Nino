import React from 'react';
import BackButton from '../atomos/BackButton';
import BalloonsImage from '../atomos/BalloonsImage';
import SuccessfulMessage from '../atomos/SuccessMessage';
import "./styles/HeaderGo.css";

function HeaderGo() {
  return (
    <div className="header-go">
      <BackButton />
      <BalloonsImage />
      <SuccessfulMessage message="¡Tu pedido fue realizado con éxito!" />
    </div>
  );
}

export default HeaderGo;
