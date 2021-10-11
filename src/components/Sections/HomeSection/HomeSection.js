import React, { useState, useEffect } from "react";

import classes from "./HomeSection.module.css";

import backgroundImg from "../../../assets/background-cropped.png";
import SocialNetwork from "../../HomeSectionComponents/SocialNetwork/SocialNetwork";
import "../grid.css";

import { ModelViewer } from "../../HomeSectionComponents/3dViewer/ModelViewer";
import RoundedButton from "../../UI/RoundedButton/RoundedButton";

import Aos from "aos";
import "aos/dist/aos.css";

const HomeSection = ({ responseData }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    setImageUrl(responseData.imageUrl);
  }, [responseData.imageUrl]);

  return (
    <section data-aos="fade-up" id="home">
      <div className={"row " + classes.sectionRow}>
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
            <SocialNetwork list={responseData.socialNetworkLinks} />
          </div>
          <div className="row span-1-of-4 box">
            <div className={classes.buttons}>
              <a href="#contactMe">
                <RoundedButton
                  text="Hire Me"
                  classLight="HireMeBtnLight"
                  classNight="HireMeBtnNight"
                />
              </a>
              <a href={responseData.cv}>
                <RoundedButton
                  text="See My Resume"
                  classLight="SeeMyResumeBtnLight"
                  classNight="SeeMyResumeBtNLight"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={"col span-1-of-2 box " + classes.myStack}>
          <div>
            <img
              src={backgroundImg}
              className={classes.background}
              alt="background"
            />
          </div>
          <div>
            <img src={imageUrl} className={classes.myImage} alt="anwer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
