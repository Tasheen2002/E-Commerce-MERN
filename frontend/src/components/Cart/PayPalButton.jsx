import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQQ7vUif1fG2MpK9TAoJygUxJts9Rgh_cXWRbTcTibNztN5HJcP6fzD_w0jhQ85JWiItIuVTGnc4qyX-",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          console.log("Creating order", amount); // Debugging line to check amount
          return actions.order.create({
            purchase_units: [
              { amount: { value: parseFloat(amount).toFixed(2) } },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
