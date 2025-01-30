// This code is the component for the home page and handles the login and logout functionality

// Import necessary modules and components
import React, { useState } from 'react';

// Define a function component called Home
function Home() {
  // Initialize state variables for the username and whether the user is logged in
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Define a function to handle the login and logout functionality
  const handleLoginLogout = () => {
    if (loggedIn) {
      setLoggedIn(false);
      setUsername('');
    } else {
      if (username.trim() === '') return;
      setLoggedIn(true);
    }
  };
  // Render the Home component
  return (
    <div className="container">
      {/* Render different content based on whether the user is logged in */}
      {loggedIn ? (
        <div>
          <h1>Welcome {username}</h1>
          <button className="btn btn-danger" onClick={handleLoginLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {/* Render the login form with an input field and a button to login if the user is not logged in OR a logout button 
          if the user is logged in */}
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <button 
            className="btn btn-primary mt-2" 
            onClick={handleLoginLogout}
            disabled={username.trim() === ''}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
