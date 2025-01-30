// This code is the component for the navigation menu and links to the other pages

// Import necessary modules and components
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// Define the NavigationMenu component and render the navigation links
function NavigationMenu() {
  return (
    // Render the navigation menu with links to the other pages
    <Navbar bg="light" expand="lg">
      {/* Render the navigation links */}
      <Nav className="nav-links">
        {/* // Render the navigation links with the Link component from react-router-dom */}
        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
        <Nav.Link as={Link} to="/products" className="nav-link">Products</Nav.Link>
        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationMenu;