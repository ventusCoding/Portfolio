import React, { useContext } from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import LogoWithName from "../UI/LogoWithName/LogoWithName";
import Anwer from "../../../assets/anwer.jpg";
import Toggle from "../Toogle/Toggle";

import { ThemeContext } from "../../../Helper/Context";

const Toolbar = ({ drawerToggleClicked,responseData }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={classes.Toolbar} style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
      <DrawerToggle clicked={drawerToggleClicked} />

      <div className={classes.DesktopOnly}>
        <div className={classes.fixElements}>
          <LogoWithName image={responseData.icon} imageName="Anwer" />
          <div className={classes.Toggle}>
            <Toggle />
          </div>
        </div>
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
