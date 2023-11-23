import './App.css'
import React from 'react';
import CheckoutPage from './screens/Checkoutpage';
import Payment from './screens/Payment';
import OrderTemplate from './screens/OrderTemplate';
import PaymentMethod from './components/molecules/PaymentMethod';

function App() {
  return (
    <div className="app">
      < PaymentMethod/>
    </div>
  );
}

export default App;