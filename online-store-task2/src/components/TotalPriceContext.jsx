// TotalPriceContext.js
// This code is the context for the total price
// Import necessary modules
import React, { createContext, useState } from 'react';

// Create a Context for the Total Price
export const TotalPriceContext = createContext();

// Create a Provider component
export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};