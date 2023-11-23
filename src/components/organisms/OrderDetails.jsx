import React from 'react';
import CartItem from '../atoms/CartItem';
import ShippingMethod from '../molecules/ShippingMethod';
import PaymentMethod from '../molecules/PaymentMethod';
import "./styles/OrderDetails.css";

function OrderDetails({ orderInfo }) {
  
  return (
    <div className="order-details">
      <CartItem {...orderInfo.cartItemProps} />
      <ShippingMethod {...orderInfo.shippingMethodProps} />
      <PaymentMethod {...orderInfo.paymentMethodProps} />
      
    </div>
  );
}

export default OrderDetails;
