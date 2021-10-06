import Divider from "../../UI/Divider/Divider";
import React from "react";
import classes from "./AboutMeSection.module.css";
import "../grid.css";
import anwerImg from "../../../assets/anwer2.jpg";
import RoundedButton from "../../UI/RoundedButton/RoundedButton";

const AboutMeSection = () => {
  return (
    <section>
      <Divider title="About Me" />
      <div className="row">
        <div className="col span-1-of-2 box">
          <img src={anwerImg} alt="anwer" className={classes.anwer} />
        </div>
        <div className="col span-1-of-2 box">
          <div className={"row span-1-of-3 box " + classes.whoAmISection}>
            <h1 className={classes.whoAmI}>Who AM I</h1>
          </div>

          <p className={classes.description}>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>

          <div className="row span-1-of-3 box">
            <div className={classes.buttons}>
              <RoundedButton
                text="Hire Me"
                classLight="HireMeBtnLight"
                classNight="HireMeBtnNight"
              />
              <RoundedButton
                text="See My Resume"
                classLight="SeeMyResumeBtnLight"
                classNight="SeeMyResumeBtNLight"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
