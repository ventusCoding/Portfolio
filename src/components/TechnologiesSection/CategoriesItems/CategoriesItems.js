import React from "react";
import classes from "./CategoriesItems.module.css";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const CategoriesItems = (props) => {
  const list = ["All", "Web", "Mobile", "AR", "Other"];

  return (
    <ul className={classes.CategoriesItems}>
      {list.map((item, index) => {
        return (
          <CategoriesItem key={index} categoryactive={props.category === item ? true : false}>
            <p
              onClick={() => {
                return props.handleSetTag(item);
              }}
            >
              {item}
            </p>
          </CategoriesItem>
        );
      })}
    </ul>
  );
};

export default CategoriesItems;
