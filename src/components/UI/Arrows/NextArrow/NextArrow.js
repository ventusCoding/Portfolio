import React,{useContext} from 'react'
import classes from "./NextArrow.module.css";
import { ThemeContext } from '../../../../Helper/Context';

const NextArrow = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const currentTheme = theme === "light" ? classes.light : classes.night;
    const cssClasses = classes.arrow + ' ' + classes.right + ' ' +  currentTheme  ;   
    return (
        <i className={cssClasses}></i>
    )
}

export default NextArrow
