import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
  'Dentist',
  'Gynecologist/obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-nose-throat (ent) Specialist',
  'Homeopath',
  'Ayurveda',
];

const FindDoctorSearch = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [specialities, setSpecialities] = useState(initSpeciality);
  const navigate = useNavigate();

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/instant-consultation?speciality=${speciality}`);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchDoctor(query);

    // Filter specialties based on the search query
    const filtered = initSpeciality.filter((specialty) =>
      specialty.toLowerCase().includes(query.toLowerCase())
    );
    setSpecialities(filtered);
  };

  const handleInputBlur = () => {
    // Delay hiding the list to allow click on list item
    setTimeout(() => {
      setDoctorResultHidden(true);
    }, 100);
  };

  return (
    <div className="finddoctor">
      <center>
        <h1>Find a doctor and Consult instantly</h1>
        <div>
          <i
            style={{ color: '#000000', fontSize: '20rem' }}
            className="fa fa-user-md"
          ></i>
        </div>
        <div
          className="home-search-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="doctor-search-box">
            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors, clinics, hospitals, etc."
              onFocus={() => setDoctorResultHidden(false)}
              onBlur={handleInputBlur}
              value={searchDoctor}
              onChange={handleInputChange}
            />

            <div className="findiconimg">
              <img
                className="findIcon"
                src={process.env.PUBLIC_URL + '/images/search.svg'}
                alt=""
              />
            </div>
            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
              <table className="specialty-table">
                <tbody>
                  {specialities.map((speciality) => (
                    <tr
                      className="search-doctor-result-item"
                      key={speciality}
                      onMouseDown={() => handleDoctorSelect(speciality)}
                    >
                      <td>
                        <img
                          src={process.env.PUBLIC_URL + '/images/search.svg'}
                          alt=""
                          style={{ height: '16px', width: '16px' }}
                        />
                      </td>
                      <td>{speciality}</td>
                      <td className="speciality-label">SPECIALITY</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearch;