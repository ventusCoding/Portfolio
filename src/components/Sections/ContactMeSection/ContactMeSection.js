import React, { useContext } from "react";
import classes from "./ContactMeSection.module.css";
import Divider from "../../UI/Divider/Divider";
import "../grid.css";
import SocialNetwork from "../../HomeSectionComponents/SocialNetwork/SocialNetwork";
import { ThemeContext } from "../../../Helper/Context";

const ContactMeSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const textTheme = theme === "light" ? classes.textLight : classes.textNight;

  const themeInput =
    theme === "light" ? classes.inputLight : classes.inputNight;
  const inputClass = classes.input + " " + themeInput + " " + textTheme;

  const btnTheme = theme === "light" ? classes.btnLight : classes.btnNight;

  const btnCss = classes.btn + " " + btnTheme + " " + textTheme;
  return (
    <footer>
      <section>
        <Divider title="Contact Me" />
        <div
          className={
            theme === "light" ? classes.footerLight : classes.footerNight
          }
        >
          <form>
            <div className="row">
              <div className="col span-1-of-2 ">
                <div className={classes.inputsSection}>
                  <div>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Your Name"
                    />
                    <br />
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col span-1-of-2 box">
                <div className={classes.areaSection}>
                  <textarea
                    className={classes.inputArea + " " + inputClass}
                    placeholder="Content"
                    maxLength="400"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className={classes.networkAndBtnSection}>
                <SocialNetwork footer={true}/>

                <button className={btnCss}>Send</button>
              </div>
            </div>
          </form>
          <p className={theme === "light" ? classes.footerLight : classes.footerNight}>© Copyright 2021 By Creative space</p>
        </div>
      </section>
    </footer>
  );
};

export default ContactMeSection;
