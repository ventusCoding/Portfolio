import React,{useContext} from "react";
import "./Divider.css";
import { ThemeContext } from "../../../Helper/Context";

const Divider = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const classes = theme === "light" ? " light" : " night";
  return (
    <div className="divider">
        <hr className={"rounded roundedRight" + classes} />
        <p className="title">{props.title}</p>
        <hr className={"rounded roundedLeft" + classes}/>
    </div>
  );
};

export default Divider;
