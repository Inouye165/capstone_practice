import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'; // Import AppointmentForm
import { v4 as uuidv4 } from 'uuid';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBookAppointment = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
        id: uuidv4(), // Use uuidv4 to generate a unique ID
        ...appointmentData,
    };
    setAppointments([...appointments, newAppointment]);
    setShowModal(false);
};

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {/* You can replace this with an actual image if you have profilePic data */}
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
        <div>
          <button className='book-appointment-btn' onClick={handleBookAppointment}>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>
      </div>

      {/* Modal for booking appointment */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;