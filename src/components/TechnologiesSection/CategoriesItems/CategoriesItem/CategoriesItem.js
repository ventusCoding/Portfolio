import React from "react";
import classes from "./CategoriesItem.module.css";

const CategoriesItem = ({ children }) => {
  return <li className={classes.CategoriesItem}>{children}</li>;
};

export default CategoriesItem;
