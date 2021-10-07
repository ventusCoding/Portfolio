import React from "react";
import classes from "./CategoriesItems.module.css";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const CategoriesItems = () => {
  const list = ["All", "Web", "Mobile", "AR", "Other"];

  return (
    <ul className={classes.CategoriesItems}>
      {list.map((item, index) => {
        return <CategoriesItem key={index}>{item}</CategoriesItem>;
      })}
    </ul>
  );
};

export default CategoriesItems;
