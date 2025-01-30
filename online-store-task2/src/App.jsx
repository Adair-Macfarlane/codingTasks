//App.jsx
// This code is the main entry point for the application.
// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TotalPriceProvider } from "./components/TotalPriceContext"; // Import the provider
import NavigationMenu from "./components/NavigationMenu";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import "./Custom.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // Wrap the app with the TotalPriceProvider to share the totalPrice state
    <TotalPriceProvider>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TotalPriceProvider>
  );
}

export default App;











// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavigationMenu from "./components/NavigationMenu";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import About from "./components/About";
// import "./Custom.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Define the App component and render the navigation menu and routes
// function App() {

//   return (
//     // Render the navigation menu and routes
//     <>
//       <Router>
//         <NavigationMenu />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;