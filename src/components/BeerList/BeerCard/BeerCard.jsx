import React from "react";
import "./BeerCard.css";

export default function BeerCard(props) {
  return (
    <div className="list_card">
      <h1 className="list_card_name">{props.name}</h1>
      <div className="list_card_img_container">
        <img src={props.imageUrl} alt={props.name} className="list_card_img" />
      </div>
      <div className="list_card_description">{props.description}</div>
    </div>
  );
}
