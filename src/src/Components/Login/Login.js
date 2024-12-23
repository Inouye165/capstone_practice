import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // Perform login logic here (e.g., send data to server)
      console.log('Form submitted:', { email, password });

      // Reset form fields after successful submission (optional)
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member?{' '}
          <span>
            <Link to="/signup" style={{ color: '#2190FF' }}>
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>

            {/* --- THIS IS WHERE THE PASSWORD SNIPPET GOES --- */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={handlePasswordChange}
                type="password"
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
            {/* --- END OF PASSWORD SNIPPET --- */}

            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Login
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                Reset
              </button>
            </div>
            <br />
            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;