import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const name = email ? email.split("@")[0] : "";

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <Link to="/">StayHealthy</Link>
        </div>
        <ul className="nav__links active">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          {email ? (
            <>
              <li className="link">Hello, {name}</li>
              <li className="link">
                <button onClick={handleLogout} className="btn1">Logout</button>
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
    </div>
  );
}

export default Navbar;
