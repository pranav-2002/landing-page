import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="https://i.pinimg.com/736x/bf/60/62/bf6062511bb9f6779b39c1aecd0a889f.jpg"
          alt="logo"
        />
      </div>
      <div className="navbar__center">
        <p>Home</p>
        <p>Programs</p>
        <p>Professional Education</p>
        <p>Courses</p>
        <p>Admissions</p>
        <p>Testimonials</p>
      </div>
      <div className="navbar__right">
        <p>Log in</p>
        <button>Registration</button>
      </div>
    </div>
  );
}

export default Navbar;
