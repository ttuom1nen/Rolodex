import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="card">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
      />
      <h3 key={props.monster.id}>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
