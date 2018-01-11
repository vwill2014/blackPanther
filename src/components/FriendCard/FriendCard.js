import React from "react";
import "./FriendCard.css";

const FriendCard = props => (

  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={ () => {props.handleIncrement(props.id); props.shuffleCards()}} />

    </div>
  </div>
);

export default FriendCard;



