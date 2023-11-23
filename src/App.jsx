import './App.css'
import React from 'react';
import CheckoutPage from './screens/Checkoutpage';
import Payment from './screens/Payment';
import OrderTemplate from './screens/OrderTemplate';
import OrderTrackingTemplate from './screens/OrderTrackingTemplate';

function App() {
  return (
    <div className="app">
      <Payment/>
    </div>
  );
}

export default App;