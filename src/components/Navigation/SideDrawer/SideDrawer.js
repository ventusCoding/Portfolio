import React, { useContext } from "react";

import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import Toggle from "../Toogle/Toggle";

import { ThemeContext } from "../../../Helper/Context";

const SideDrawer = ({ closed, isShown, isAuth }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const colorTheme = theme === "light" ? classes.light : classes.night;

  const attachedClasses = [classes.SideDrawer, classes.Close, colorTheme];
  if (isShown) {
    attachedClasses.splice(1, 1, classes.Open);
  }

  return (
    <>
      <Backdrop show={isShown} clicked={closed} />
      <div
        className={attachedClasses.join(" ")}
        onKeyDown={closed}
        role="button"
        tabIndex={0}
        onClick={closed}
      >
        <div className={classes.Toggle}>
          <Toggle />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
