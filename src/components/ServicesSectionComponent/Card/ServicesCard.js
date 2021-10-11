import React,{useContext,useEffect} from 'react'
import classes from "./ServicesCard.module.css";
import { ThemeContext } from '../../../Helper/Context';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServicesCard = (props) => {

  useEffect(() => {
    Aos.init({
      duration : 1000
    })

  }, []);

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div data-aos="zoom-in" className={classes.card}>
      <img src={props.image} alt={props.name} className={theme === "light" ? classes.light : classes.night}/>
      <h3>{props.name}</h3>
    </div>
  );
};

export default ServicesCard;
