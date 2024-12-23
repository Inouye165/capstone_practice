import React, { useState } from 'react';
import './FindDoctorSearchIC.css';

const FindDoctorSearchIC = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [specialities, setSpecialities] = useState([
    'Allergist',
    'Cardiologist',
    'Dermatologist',
    'Endocrinologist',
    'Gastroenterologist',
    'General Practitioner',
    'Gynecologist',
    'Hematologist',
    'Internist',
    'Nephrologist',
    'Neurologist',
    'Oncologist',
    'Ophthalmologist',
    'Orthopedic Surgeon',
    'Otolaryngologist',
    'Pediatrician',
    'Psychiatrist',
    'Pulmonologist',
    'Rheumatologist',
    'Urologist',
  ]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text);
    setShowDropdown(true); // Show dropdown when input changes
  };

  const handleSpecialitySelect = (speciality) => {
    setSearchText(speciality);
    onSearch(speciality);
    setShowDropdown(false); // Hide dropdown when specialty is selected
  };

  const handleFocus = () => {
    setShowDropdown(true); // Show dropdown on focus
  };

  const handleBlur = () => {
    // Delay hiding the dropdown to allow click events to register
    setTimeout(() => {
      setShowDropdown(false);
    }, 100);
  };

  const filteredSpecialities = specialities.filter((speciality) =>
    speciality.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="find-doctor-search">
      <input
        type="text"
        className="search-input"
        placeholder="Search for doctors by speciality..."
        value={searchText}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {showDropdown && (
        <ul className="speciality-dropdown">
          {filteredSpecialities.map((speciality) => (
            <li key={speciality} onClick={() => handleSpecialitySelect(speciality)}>
              {speciality}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FindDoctorSearchIC;