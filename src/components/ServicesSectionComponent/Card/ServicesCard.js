import React, { useContext, useEffect } from "react";
import classes from "./ServicesCard.module.css";
import { ThemeContext } from "../../../Helper/Context";

const ServicesCard = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={classes.card}>
      <img
        src={props.image}
        alt={props.name}
        className={theme === "light" ? classes.light : classes.night}
      />
      <h3>{props.name}</h3>
    </div>
  );
};

export default ServicesCard;
