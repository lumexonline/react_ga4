
import React from 'react';
import { trackEvent } from '../utils/analytics';

function Checkout() {
  const startCheckout = () => {
    trackEvent('begin_checkout', {});
  };

  const completePurchase = () => {
    trackEvent('purchase', {
      transaction_id: 'T12345',
      value: 300,
      currency: 'USD'
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={startCheckout}>Start Checkout</button>
      <button onClick={completePurchase}>Complete Purchase</button>
    </div>
  );
}

export default Checkout;
    