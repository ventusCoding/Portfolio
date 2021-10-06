import React,{useContext} from 'react'
import classes from "./PrevArrow.module.css";
import { ThemeContext } from '../../../../Helper/Context';

const PrevArrow = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const currentTheme = theme === "light" ? classes.light : classes.night;
    const cssClasses = classes.arrow + ' ' + classes.left + ' ' +  currentTheme  ;   
    return (
        <i className={cssClasses}></i>
    )
}

export default PrevArrow
