import React, { useState, useEffect } from 'react';
import classes from "./CategoriesItems.module.css";
import CategoriesItem from "./CategoriesItem/CategoriesItem";

const CategoriesItems = (props) => {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_FIREBASE_URL}/categories.json`)
      .then((response) => response.json())
      .then((responseData) => {
        const loadedServicesList = [];
        for (const key in responseData) {
          loadedServicesList.push(
            responseData[key]
          );
        }
        setList(loadedServicesList);
      });
  }, [list]);

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
