import React from "react";

const OrderConfirmationPage = () => {
  const checkout = {
    _id: "12345",
    createdAt: new Date(),
    checkoutItems: [
      {
        productId: "1",
        name: "Jacket",
        color: "black",
        price: 150,
        quantity: 1,
        image: "https://picsum.photos/150?random=1",
      },
      {
        productId: "2",
        name: "T-Shirt",
        color: "black",
        price: 120,
        quantity: 1,
        image: "https://picsum.photos/150?random=2",
      },
    ],
    shippingAddress:{
        Address:"123 Fashion Street",
        city:"New York",
        country:"USA",
    }
  };
  return <div>OrderConfirmationPage</div>;
};

export default OrderConfirmationPage;
