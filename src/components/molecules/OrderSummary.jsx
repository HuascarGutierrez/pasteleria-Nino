import React from 'react';
import OrderSummaryItem from '../atoms/OrderSummaryItem';
import CartItem from '../atoms/CartItem';
import "./styles/OrderSummary.css";
function OrderSummary() {
  return (
    <div className="order-summary">
       <CartItem 
        title="Pastel de tres leches" 
        quantity={2} 
        price={18} 
        description="ummh sabroso!" 
        imageUrl="./public/images/image 29.png" 
      />
      
      <OrderSummaryItem title="Sub Total" value="Bs. 18" />
      <OrderSummaryItem title="Delivery" value="Bs. 10" />
      <OrderSummaryItem title="Total" value="Bs. 28" />
      
      
    </div>
  
  );
}

export default OrderSummary;
