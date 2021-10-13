import React from "react";
import classes from "./Technologies.module.css";

const TechnologiesCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default TechnologiesCard;
