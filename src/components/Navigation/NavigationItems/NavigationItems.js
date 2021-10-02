import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = ({ isAuthenticated }) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/home">Home</NavigationItem>
    <NavigationItem link="/aboutMe">About Me</NavigationItem>
    <NavigationItem link="/services">Services</NavigationItem>
    <NavigationItem link="/technologies">Technologies</NavigationItem>
    <NavigationItem link="/works">Works</NavigationItem>
    <NavigationItem link="/contactMe">Contact Me</NavigationItem>
  </ul>
);

export default navigationItems;
