import React from 'react';
import "./styles/PaymentSummary.css";

function PaymentSummary({ subtotal, deliveryFee, total, paymentMethod }) {
  return (
    <div className="payment-summary">
      <div className="payment-line">Subtotal: Bs. {subtotal}</div>
      <div className="payment-line">Delivery: Bs. {deliveryFee}</div>
      <div className="payment-total">Total: Bs. {total}</div>
      <div className="payment-method">Método de pago utilizado: {paymentMethod}</div>
    </div>
  );
}

export default PaymentSummary;
