import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import LogoWithName from "../UI/LogoWithName/LogoWithName";
import Anwer from "../assets/anwer.jpg";
import Toggle from "../Toogle/Toggle";

const Toolbar = ({ drawerToggleClicked }) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={drawerToggleClicked} />

    <div className={classes.DesktopOnly}>
      <div className={classes.fixElements}>
        <LogoWithName image={Anwer} imageName="Anwer" />
        <div className={classes.Toggle}>
        <Toggle/>
        </div>
      </div>
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
