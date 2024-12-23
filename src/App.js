// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up'; // Import Sign_Up component
import Login from './Components/Login/Login'; // Import Login component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<Sign_Up />} /> {/* Add route for Sign_Up */}
          <Route path="/login" element={<Login />} /> {/* Add route for Login */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
