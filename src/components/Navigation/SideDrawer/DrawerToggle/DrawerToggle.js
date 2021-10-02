import PropTypes from "prop-types";

import React, { useContext } from "react";

import { ThemeContext } from "../../../../Helper/Context";

import { BiMenu } from "@react-icons/all-files/bi/BiMenu";

import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ clicked }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div
      className={classes.DrawerToggle}
      role="button"
      tabIndex={0}
      onKeyDown={clicked}
      onClick={clicked}
    >
      <div>
        <BiMenu size={30} color={theme === "light" ? "black" : "white"} />
      </div>
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};
export default DrawerToggle;
