import React from "react";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <Card
        logo="https://cdn-icons-png.flaticon.com/512/7186/7186555.png"
        title="Finance for Non-Financial Managers"
        price="350"
        videos="45"
        reviews="2.3k"
      />
      <Card
        logo="https://cdn-icons-png.flaticon.com/512/7186/7186560.png"
        title="Developing Good Employee Relations"
        price="250"
        videos="30"
        reviews="9k"
      />
      <Card
        logo="https://cdn-icons-png.flaticon.com/512/7186/7186587.png"
        title="Stakeholder Management & Psycology"
        price="150"
        videos="15"
        reviews="4.5k"
      />
      <Card
        logo="https://cdn-icons-png.flaticon.com/512/7186/7186555.png"
        title="Finance for Non-Financial Managers"
        price="350"
        videos="45"
        reviews="2.3k"
      />
      <Card
        logo="https://cdn-icons-png.flaticon.com/512/7186/7186560.png"
        title="Developing Good Employee Relations"
        price="250"
        videos="30"
        reviews="9k"
      />
      <Card
        logo="https://cdn-icons-png.flaticon.com/512/7186/7186587.png"
        title="Stakeholder Management & Psycology"
        price="150"
        videos="15"
        reviews="4.5k"
      />
    </div>
  );
}

export default Cards;
