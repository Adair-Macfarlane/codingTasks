//About.jsx
// This code is the component for the about page
// Import necessary modules and components
import React, { useState, useContext } from 'react';
import { Figure } from 'react-bootstrap';
import storeLogo from '../assets/AM.logo.compact.png';
import storeImage from '../assets/AM.logo.compact.png';
import { TotalPriceContext } from '../components/TotalPriceContext'; // Import the context
import "../Custom.css";
import TotalPrice from './TotalPrice';

// Define the About function and render the about page
function About() {
  const { totalPrice } = useContext(TotalPriceContext);
  return (
    <div className="container">
      <h2>About Our Store</h2>
      <Figure>
        <Figure.Image 
          width={171} 
          height={180} 
          alt="Store Logo" 
          src={storeLogo}
        />
        <Figure.Caption>
          Our amazing store where you can find all sorts of great products!
        </Figure.Caption>
      </Figure>
      <h3>How to Contact Us:</h3>
      <p>Email us at: info@AM-Website-Designs.com</p>
      <p>Call us at: 07766 106688</p>
      <div className="row">
        <div className="col-md-6">
          <Figure>
            <Figure.Image 
              width={171} 
              height={180} 
              alt="Store Image" 
              src={storeImage}
            />
          </Figure>
        </div>
        <TotalPrice />
      </div>
      
    </div>
  );
}

export default About;
