import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign_Up.css';

const SignUp = () => {
  // State variables (same as before)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Event handlers (same as before)
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic (same as before)
    // ...

    if (isValid) {
      // Perform sign-up logic here (e.g., send data to server)
      console.log('Form submitted:', { name, phone, email, password });

      // Reset form fields after successful submission (optional)
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member?{' '}
          <span>
            <Link to="/login" style={{ color: '#2190FF' }}>
              Login
            </Link>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>

            {/* --- THIS IS WHERE THE SNIPPET GOES --- */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                type="text"
                onChange={handleNameChange} // Updated to call handleNameChange
                name="name"
                id="name"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                type="tel"
                onChange={handlePhoneChange} // Updated to call handlePhoneChange
                name="phone"
                id="phone"
                className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
              {phoneError && <div className="invalid-feedback">{phoneError}</div>}
            </div>
            {/* Missing Email field from snippet. Add from previous code */}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type="password"
                onChange={handlePasswordChange} // Updated to call handlePasswordChange
                name="password"
                id="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>
            {/* --- END OF SNIPPET --- */}

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Submit
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;