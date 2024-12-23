import React, { useEffect, useState } from "react";
import "./InstantConsultation.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import FindDoctorSearchIC from "./FindDoctorSearchIC/FindDoctorSearchIC";
import DoctorCard from "../DoctorCard/DoctorCard"; // Import DoctorCard

const InstantConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const getDoctorsDetails = () => {
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      .then((res) => res.json())
      .then((data) => {
        if (searchParams.get("speciality")) {
          const filtered = data.filter(
            (doctor) =>
              doctor.speciality.toLowerCase() ===
              searchParams.get("speciality").toLowerCase()
          );
          setFilteredDoctors(filtered);
          setIsSearched(true);
        } else {
          setFilteredDoctors([]);
          setIsSearched(false);
        }
        setDoctors(data);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (searchText) => {
    if (searchText === "") {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDoctors(filtered);
      setIsSearched(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    getDoctorsDetails();
    // The commented-out code is for future authentication implementation
    // const authtoken = sessionStorage.getItem("auth-token");
    // if (!authtoken) {
    //   navigate("/login");
    // }
  }, [searchParams]);

  return (
    <div className="searchpage-container">
      <FindDoctorSearchIC onSearch={handleSearch} />

      <div className="search-results-container">
        {isSearched && (
          <div className="search-results">
            <h2>
              {filteredDoctors.length} doctor(s) are available near '
              {searchParams.get("location")}'
            </h2>
            <h3>
              Book appointments with minimum wait-time & verified doctor
              details
            </h3>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard
                  className="doctorcard"
                  key={doctor.name}
                  name={doctor.name}
                  speciality={doctor.speciality}
                  experience={doctor.experience}
                  location={doctor.location}
                  clinic_name={doctor.clinic_name}
                  photo={doctor.photo}
                  fees={doctor.fees}
                  ratings={doctor.ratings} // Make sure to pass the ratings prop
                  profilePic={doctor.photo} // Assuming 'photo' is the URL to the profile picture
                />
              ))
            ) : (
              <p>No doctors found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstantConsultation;