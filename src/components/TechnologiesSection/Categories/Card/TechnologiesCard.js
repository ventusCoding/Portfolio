import React,{useContext} from 'react'
import classes from "./ServicesCard.module.css";
import { ThemeContext } from '../../../../Helper/Context';

const TechnologiesCard = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default TechnologiesCard;
