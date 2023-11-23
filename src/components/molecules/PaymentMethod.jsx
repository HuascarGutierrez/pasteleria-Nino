import React from 'react';
import "./styles/PaymentMethod.css";

function PaymentMethod({ method, isSelected }) {
  // Aquí, `isSelected` podría ser una prop booleana que determina si se muestra como seleccionado.
  const className = `payment-method${isSelected ? ' selected' : ''}`;
  return (
    <div className={className}>
      <p>{method}</p>
      {/* Agregar icono o indicador de selección si es necesario */}
    </div>
  );
}

export default PaymentMethod;
