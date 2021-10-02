import React, { useState, useContext } from "react";
import classes from "./Toggle.module.css";
import { ThemeContext } from "../../../Helper/Context"; 

const Toggle = ({ toogled, onClick }) => {

  const { theme, setTheme } = useContext(ThemeContext);

  const [toggled, setToggled] = useState(theme === "light" ? true : false);
  const handleToggleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setToggled((toggle) => !toggle);
  };

  return (
    <div
      onClick={handleToggleClick}
      className={
        toggled ? classes.toggle : classes.toggle + " " + classes.night
      }
    >
      <div className={classes.notch}>
        <div className={classes.crater} />
        <div className={classes.crater} />
      </div>
      <div>
        <div className={classes.shape + " " + classes.sm} />
        <div className={classes.shape + " " + classes.sm} />
        <div className={classes.shape + " " + classes.md} />
        <div className={classes.shape + " " + classes.lg} />
      </div>
    </div>
  );
};

export default Toggle;
