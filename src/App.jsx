import './App.css'
import React from 'react';
import CheckoutPage from './screens/Checkoutpage';
import Payment from './screens/Payment';
import OrderTrackingTemplate from './screens/OrderTrackingTemplate';

function App() {
  return (
    <div className="app">
      <OrderTrackingTemplate/>
    </div>
  );
}

export default App;