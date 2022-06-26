import React from "react";
import "./Card.css";

function Card({ logo, title, price, videos, reviews }) {
  return (
    <div className="card">
      <img src={logo} alt="icon" width="50px" />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <hr />
      <div className="card__info">
        <div className="info__left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/189/189638.png"
            alt="play-icon"
            width="15px"
            style={{ marginRight: "0.4rem" }}
          />
          <p>{videos} videos</p>
        </div>
        <div className="info__left">
          <img
            src="https://cdn-icons.flaticon.com/png/512/3334/premium/3334307.png?token=exp=1656243668~hmac=5d136fb9c752a9f84fc3a1503df6dcfa"
            alt="play-icon"
            width="15px"
            style={{ marginRight: "0.4rem" }}
          />
          <p>{reviews} reviews</p>
        </div>
      </div>
      <button>Join Now</button>
    </div>
  );
}

export default Card;
