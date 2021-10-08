import React from "react";
import classes from "./CategoriesItem.module.css";

const CategoriesItem = ({ children, categoryactive }) => {

  const activeClass = categoryactive ? classes.active : null;

  const cssClasses = classes.CategoriesItem + " " + activeClass;

  return <li className={cssClasses}>{children}</li>;
};

export default CategoriesItem;
