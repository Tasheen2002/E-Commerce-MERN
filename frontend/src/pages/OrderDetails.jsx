import React from "react";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {

    const {id} = useParams();
    const [orderDetails,setOrderDetails]=useState(null);

    useEffect(()=>{
        const mockOrderDetails={
            _id:id,
            createdAt:new Date(),
            isPaid:true,
            isDelivered:false,
            paymentMethod:"PayPal",
            shippingMethod:"Standard",
            shippingAddress:{
                city:"New York",
                country:"USA",
            },
            orderItems:[
                {
                    productId:"1",
                    name:"Jacket",
                    price:120,
                    quantity:1,
                    image:"https://picsum.photos/150?random=1",
                },
                {
                    productId:"1",
                    name:"Shirt",
                    price:150,
                    quantity:1,
                    image:"https://picsum.photos/150?random=2",
                },
            ]
        };
        setOrderDetails(mockOrderDetails);
    },[id]);

  return <div>OrderDetails</div>;
};

export default OrderDetails;
