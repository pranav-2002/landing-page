import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>Lockdown Can't Stop Your Learning</h1>
        <p>
          Elearn is a Global training provider based across the UK that
          specializes in accredited and bespoke training courses. We crush the
          barriers to getting a degree.
        </p>
        <button>Explore Courses</button>
      </div>
      <div className="hero__image">
        <img
          src="https://justcamp-next.netlify.app/_next/static/images/hero-image-man-4be8d0dcae3c06520d0043ef3d385b63.png"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Hero;
