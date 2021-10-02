import React from "react";

import classes from "./HomeSection.module.css";

import "../grid.css";

import { ModelViewer } from "../../HomeSectionComponents/3dViewer/ModelViewer";

const HomeSection = () => {
  return (
    <section>
      <div className="row">
        <div className="col span-1-of-2 box">
          <div className="row span-1-of-4 box">
            <ModelViewer />
          </div>
          <div className={"row span-1-of-4 box " + classes.textBlock}>
            <p className={classes.text1}>Hello, I'm</p>
            <p className={classes.text2}> <span>Anwer Baccar </span></p>
            <p className={classes.text3}>Software Engineer</p>
          </div>
          <div className="row span-1-of-4 box">
            {
              //TODO network icons
            }
          </div>
          <div className="row span-1-of-4 box">
            {
              //TODO hire me see my resume buttons
            }
          </div>
        </div>

        <div className="col span-1-of-2 box">
          {
            //TODO anwer photo with background section
          }
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
