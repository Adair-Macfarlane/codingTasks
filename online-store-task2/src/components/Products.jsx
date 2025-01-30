// Products.jsx
// This code is the component for the products page and handles the buy and color selection functionality

// Import necessary modules and components
import React, { useState, useContext } from 'react';
import { Card, Button, Dropdown } from "react-bootstrap";

import { TotalPriceContext } from '../components/TotalPriceContext'; // Import the context
import TotalPrice from '../components/TotalPrice'; // Ensure this path is correct


// import TotalPrice from './TotalPrice';
import productImage from '../assets/AM.logo.compact.png';


function Products() {
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext); // Access totalPrice and setTotalPrice from context
  const [selectedColors, setSelectedColors] = useState({}); // Track selected colours for each product

  // Define a function to handle the buy functionality
  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
  };

  // Define a function to handle colour selection
  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevState) => ({
      ...prevState,
      [productId]: color, // Update the selected color for the specific product
    }));
  };

// Define an array of product data
const productData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for product 1',
    price: 100,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for product 2',
    price: 200,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for product 3',
    price: 300,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for product 4',
    price: 400,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for product 5',
    price: 500,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for product 6',
    price: 600,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 7,
    title: 'Product 7',
    description: 'Description for product 7',
    price: 700,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 8,
    title: 'Product 8',
    description: 'Description for product 8',
    price: 800,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 9,
    title: 'Product 9',
    description: 'Description for product 9',
    price: 900,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: 10,
    title: 'Product 10',
    description: 'Description for product 10',
    price: 1000,
    image: productImage,
    colors: ['Red', 'Blue', 'Green'],
  },
];

// Define the Products function and render the product cards 
  // Render the product cards
  return (
    <div className="container">
      <div className="row">
        {/* Map over the product data and render a card for each product */}
        {productData.map((product) => (
          <div key={product.id} className="col-md-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: £{product.price}</Card.Text>
                <Dropdown>
                  {/* Render the dropdown menu for colour selection */}
                  <Dropdown.Toggle variant="secondary">
                    {selectedColors[product.id] || 'Select Color'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product.colors.map((color) => (
                      <Dropdown.Item 
                        key={color} 
                        onClick={() => handleColorSelect(product.id, color)}>
                        {color}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {/* Render the buy button */}
                <Button 
                  variant="primary" 
                  onClick={() => handleBuy(product.price)}>
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/* Render the total price only if it is greater than 0 */}
      {totalPrice > 0 && <TotalPrice totalPrice={totalPrice} />}
    </div>
  );
}

export default Products;