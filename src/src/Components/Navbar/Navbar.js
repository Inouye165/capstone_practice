import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phone');
    localStorage.removeItem('doctorData');

    // Remove reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('reviewFormData_')) {
        localStorage.removeItem(key);
      }
    }

    setIsLoggedIn(false);
    setUsername('');
    setEmail('');

    // Redirect to the home page after logout
    navigate('/');
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('email');
    if (storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
      setUsername(sessionStorage.getItem('name'));
    }
  }, []);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        {/* Updated Appointments link */}
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>
        {/* Instant Consultation Link */}
        <li className="link">
          <Link to="/instant-consultation">
            <button className="btn1">Instant Consultation</button>
          </Link>
        </li>
        {/* Add a link to the doctors listing page */}
        <li className="link">
          <Link to="/doctors">Doctors</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link">
              {/* Dropdown menu */}
              <div className="dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                <button className="btn2 dropdown-toggle" type="button">
                  {username || email}
                </button>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;