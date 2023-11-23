import React from 'react';
import "./styles/ShippingMethod.css";

function ShippingMethod({ method, price }) {
  return (
    <div className="shipping-method">
      <p>{method}</p>
      <p>{`Bs ${price}`}</p>
    </div>
  );
}

export default ShippingMethod;
