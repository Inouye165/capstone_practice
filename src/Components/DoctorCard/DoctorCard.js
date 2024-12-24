import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'; 
import { v4 as uuidv4 } from 'uuid'; 

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false); 
  const [appointments, setAppointments] = useState([]); 

  // Function to handle the booking of an appointment (December 24, 2024)
  const handleBooking = () => {
    setShowModal(true); 
  };

  // Function to handle the cancellation of an appointment (December 24, 2024)
  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments); 
  };

  // Function to handle the submission of the appointment form (December 24, 2024)
  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(), 
      ...appointmentData, 
    };
    const updatedAppointments = [...appointments, newAppointment]; 
    setAppointments(updatedAppointments);
    setShowModal(false); 
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          {/* Displaying a default SVG icon for the doctor's profile picture */}
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
        </div>
        <div className="doctor-card-details">
          {/* Displaying the doctor's name, speciality, experience, and ratings */}
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
      </div>

      {/* Container for the booking/cancellation options (December 24, 2024) */}
      <div className="doctor-card-options-container"> 
            {/* Trigger for the modal (the button) (December 24, 2024)*/}
            <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`} onClick={appointments.length > 0 ? () => handleCancel(appointments[0].id) : handleBooking}> 
              {/* Changing the button text based on whether an appointment is booked (December 24, 2024)*/}
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div> 
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div> {/* Text indicating no booking fee */}
            </button>
          
        {/* Modal for booking appointment (December 24, 2024)*/}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>&times;</span> 
              {/* Conditionally rendering the content of the modal (December 24, 2024)*/}
              {appointments.length > 0 ? (
                // If an appointment is booked, display the appointment details and a cancel button (December 24, 2024)
                <>
                  <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phoneNumber}</p>
                    </div>
                  ))}
                </>
              ) : (
                // If no appointment is booked, display the appointment form (December 24, 2024)
                <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;