// src/Components/BookingConsultation.js
import React, { useEffect, useState } from 'react';
import './BookingConsultation.css'; // Assuming you'll use the same styles
import { useSearchParams } from 'react-router-dom';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch'; 
import DoctorCard from './DoctorCard/DoctorCard'; 

const BookingConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const getDoctorsDetails = async () => {
      try {
        const response = await fetch('https://api.npoint.io/9a5543d36f1460da2f63');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    getDoctorsDetails();
  }, []);

  useEffect(() => {
    const speciality = searchParams.get('speciality')?.toLowerCase();
    const location = searchParams.get('location')?.toLowerCase(); 

    const filtered = doctors.filter(doctor => {
      const matchesSpeciality = speciality ? doctor.speciality.toLowerCase() === speciality : true;
      const matchesLocation = location ? doctor.location.toLowerCase().includes(location) : true; 
      
      return matchesSpeciality && matchesLocation;
    });

    setFilteredDoctors(filtered);
  }, [doctors, searchParams]);

  return (
    <div className="searchpage-container">
      <FindDoctorSearch /> 
      <div className="search-results-container">
        {filteredDoctors.length > 0 ? (
          <>
            <h2>{filteredDoctors.length} doctors are available {searchParams.get('location') || ''}</h2>
            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
            {filteredDoctors.map(doctor => (
              <DoctorCard className="doctorcard" {...doctor} key={doctor.name} /> 
            ))}
          </>
        ) : (
          <p>No doctors found for this criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BookingConsultation;