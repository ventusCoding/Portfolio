import React from "react";

import classes from "./HomeSection.module.css";

import backgroundImg from "../../../assets/background.png";
import anwerImg from "../../../assets/anwer-no-bg.png";
import SocialNetwork from "../../HomeSectionComponents/SocialNetwork/SocialNetwork";
import "../grid.css";

import { ModelViewer } from "../../HomeSectionComponents/3dViewer/ModelViewer";
import RoundedButton from "../../UI/RoundedButton";

const HomeSection = () => {
  return (
    <section>
      <div className="row">
        <div className={"col span-1-of-2 box " + classes.Section1Col}>
          <div className={"row span-1-of-4 box " + classes.Model}>
            <ModelViewer />
          </div>
          <div className={"row span-1-of-4 box " + classes.textBlock}>
            <div className={classes.textBlockChild}>
              <p className={classes.text1}>Hello, I'm</p>
              <p className={classes.text2}>
                {" "}
                <span>Anwer Baccar </span>
              </p>
              <p className={classes.text3}>Software Engineer</p>
            </div>
          </div>
          <div className={"row span-1-of-4 box " + classes.SocialIcons}>
            <SocialNetwork />
          </div>
          <div className="row span-1-of-4 box">
            <div className={classes.buttons}>
            <RoundedButton text="Hire Me" classLight="HireMeBtnLight" classNight="HireMeBtnNight"/>
            <RoundedButton  text="See My Resume" classLight="SeeMyResumeBtnLight" classNight="SeeMyResumeBtNLight"/>
            </div>
          </div>
        </div>

        <div className="col span-1-of-2 box">

          <div className={classes.background}>
            <img src={backgroundImg} alt="background" />
          </div>

          <div className={classes.anwer}>
            <img src={anwerImg} alt="anwer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;