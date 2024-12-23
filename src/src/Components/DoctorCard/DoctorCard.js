// DoctorCard.js
import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic, location, clinic_name, fees, onBookAppointment }) => { // Receive onBookAppointment prop
  const handleBookAppointment = () => {
    onBookAppointment({ name, speciality, experience, ratings, profilePic, location, clinic_name, fees }); // Pass doctor data to parent
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <img src={profilePic} alt={name} className="doctor-card-profile-image" />
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-location">{location}</div>
          <div className="doctor-card-detail-clinic">Clinic: {clinic_name}</div>
          <div className="doctor-card-detail-consultationfees">Consultation Fees: ${fees}</div>
          <div className="doctor-card-detail-rating">Ratings: {ratings}</div>
        </div>
        {/* Book Appointment Button with onClick handler */}
        <div>
          <button className='book-appointment-btn' onClick={handleBookAppointment}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;