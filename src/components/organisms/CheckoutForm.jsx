import React from 'react';
import BackButton from '../atoms/BackButton';
import AddressForm from '../molecules/AddressForm';
import OrderSummary from '../molecules/OrderSummary';
import PaymentButton from '../atoms/PaymentButton';
import "./styles/CheckoutForm.css";

function CheckoutForm() {
  return (
    <div className="checkout-form">
      <BackButton />
      <div className='subtitulo'>
      <p>Añadir Dirección</p>
      </div>
      <AddressForm />
      <OrderSummary />
      <PaymentButton />
    </div>
  );
}

export default CheckoutForm;