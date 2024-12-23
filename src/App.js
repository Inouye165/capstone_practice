import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components

import Navbar from './Components/Navbar/Navbar'; // Navbar component
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Landing Page component
import Sign_Up from './Components/Sign_Up/Sign_Up'; // Sign Up component
import Login from './Components/Login/Login'; // Login component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
