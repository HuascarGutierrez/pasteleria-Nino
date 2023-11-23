import React from 'react';
import InputField from '../atomos/InputField';
import "./styles/AddressForm.css";

function AddressForm() {
  return (
    <div className="address-form">
      <InputField placeholder="Dirección" />
      <InputField placeholder="Ciudad" />
      <InputField placeholder="Código Postal" />
      <InputField placeholder="Número" />
      <InputField placeholder="Fecha y Hora" />
    </div>
  );
}

export default AddressForm;
