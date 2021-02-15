import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../contex/AppContex';
import handleSumTotal from '../utils/handleSumTotal';
const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId:
      'ATiamoK88n7uVV5hQGzo2WQej7YB97EucwtYjJxx9HQJVlIDjAGTYviCwjlUCcX9MYToBY7OY6CskK0B',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('start')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={() => console.log('usuario cancela')}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
