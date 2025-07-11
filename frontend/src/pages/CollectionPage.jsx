import React from "react";
import { useState, useEffect } from "react";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 8,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 9,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=11" }],
        },
        {
          _id: 10,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=12" }],
        },
        {
          _id: 11,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=13" }],
        },
        {
          _id: 12,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=14" }],
        },
      ];
      setProducts(fetchedProducts);
    },1000);
  }, []);

  return <div>CollectionPage</div>;
};

export default CollectionPage;
