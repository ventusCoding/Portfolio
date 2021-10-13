import React from "react";


import classes from "./LogoWithName.module.css";

const LogoWithName = ({ image, imageName }) => {


  return (
    <div className={classes.logo}>
      <img className={classes.img} src={image} alt={imageName} />
      <p className={classes.name}>
        Anwer
        <br />
        Baccar
      </p>
    </div>
  );
};

export default LogoWithName;
