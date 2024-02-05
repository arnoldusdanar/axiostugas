import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
  }
  
export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      //const data = await response.json();
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <h2>Product List</h2>
      <ul>
        {Array.isArray(products) && products.length > 0 ? (
          products.slice(0, 3).map((product) => (
            <li key={product.id}>
              {/* Render your product details here */}
              {product.title} - ${product.price}
              <img src={product.thumbnail}></img>
            </li>
          ))
        ) : (
          <li>No products available</li>
        )}
      </ul>
    </div>
  );
};
