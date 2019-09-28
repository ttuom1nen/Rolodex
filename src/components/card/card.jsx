import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <h3 key={props.monster.id}>{props.monster.name}</h3>
    </div>
  );
};

export default Card;
