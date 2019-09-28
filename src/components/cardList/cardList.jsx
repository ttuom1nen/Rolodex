import React from "react";
import "./cardList.css";

const CardList = props => {
  return <div className="card-list">{props.children}</div>;
};

export default CardList;
