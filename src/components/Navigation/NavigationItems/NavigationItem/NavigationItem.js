import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";
import { ThemeContext } from "../../../../Helper/Context";

const NavigationItem = ({ children, link, exact }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={link}
        activeClassName={classes.active}
        exact={exact}
        className={theme === "light" ? classes.light : classes.night}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
