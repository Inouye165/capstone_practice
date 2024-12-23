import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
// Import the DoctorCard component
import DoctorCard from './Components/DoctorCard/DoctorCard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          {/* Add a route to display DoctorCard components or integrate it into an existing route */}
          <Route path="/doctors" element={<DoctorCard />} />
          {/* Add routes for other components (e.g., Appointments, Profile) here in the future */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;