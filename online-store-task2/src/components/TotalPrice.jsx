// TotalPrice.jsx
// This code is the component for the total price display

// Import necessary modules
import React, { useContext } from 'react';
import { TotalPriceContext } from '../components/TotalPriceContext'; // Import the context
import "../Custom.css";

// Define the TotalPrice function and render the total price
function TotalPrice() {
  const { totalPrice } = useContext(TotalPriceContext); // Access totalPrice from context

  return (
    <div className="total-price" style={{ top: '10px', width: '300px' }}>
      <h2>Total price: £{totalPrice}</h2>
    </div>
  );
}

export default TotalPrice;

