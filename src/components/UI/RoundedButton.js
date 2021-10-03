import React,{useContext} from 'react'

import { ThemeContext } from '../../Helper/Context';

import  "./RoundedButton.css";

const RoundedButton = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={"button"}>
            <button className={theme === "light" ? props.classLight : props.classNight}>{props.text}</button>
        </div>
    )
}

export default RoundedButton
