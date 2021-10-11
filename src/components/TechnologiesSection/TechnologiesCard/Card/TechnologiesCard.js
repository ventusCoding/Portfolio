import React, { useContext, useEffect } from 'react';
import classes from './Technologies.module.css';
import { ThemeContext } from '../../../../Helper/Context';
import Aos from 'aos';
import 'aos/dist/aos.css';

const TechnologiesCard = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div data-aos="zoom-out-up" className={classes.card}>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default TechnologiesCard;
