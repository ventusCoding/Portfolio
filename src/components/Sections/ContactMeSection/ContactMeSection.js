import React, { useContext } from 'react';
import classes from './ContactMeSection.module.css';
import Divider from '../../UI/Divider/Divider';
import '../grid.css';
import SocialNetwork from '../../HomeSectionComponents/SocialNetwork/SocialNetwork';
import { ThemeContext } from '../../../Helper/Context';
import emailjs from 'emailjs-com';

const ContactMeSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const textTheme = theme === 'light' ? classes.textLight : classes.textNight;

  const themeInput =
    theme === 'light' ? classes.inputLight : classes.inputNight;
  const inputClass = classes.input + ' ' + themeInput + ' ' + textTheme;

  const btnTheme = theme === 'light' ? classes.btnLight : classes.btnNight;

  const btnCss = classes.btn + ' ' + btnTheme + ' ' + textTheme;

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_Email_JS_Service_ID,
        process.env.REACT_APP_To_Me_Email_JS,
        e.target,
        process.env.REACT_APP_Email_JS_User_ID,
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

      emailjs
      .sendForm(
        process.env.REACT_APP_Email_JS_Service_ID,
        process.env.REACT_APP_To_Client_Email_JS,
        e.target,
        process.env.REACT_APP_Email_JS_User_ID,
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <footer>
      <section>
        <Divider title="Contact Me" />
        <div
          className={
            theme === 'light' ? classes.footerLight : classes.footerNight
          }
        >
          <form onSubmit={sendEmailHandler}>
            <div className="row">
              <div className="col span-1-of-2 ">
                <div className={classes.inputsSection}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      className={inputClass}
                      placeholder="Your Name"
                    />
                    <br />
                    <input
                      type="email"
                      name="email"
                      className={inputClass}
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col span-1-of-2 box">
                <div className={classes.areaSection}>
                  <textarea
                    name="content"
                    className={classes.inputArea + ' ' + inputClass}
                    placeholder="Content"
                    maxLength="400"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className={classes.networkAndBtnSection}>
                <SocialNetwork footer={true} />

                <button type="submit" className={btnCss}>
                  Send
                </button>
              </div>
            </div>
          </form>
          <p
            className={
              theme === 'light' ? classes.footerLight : classes.footerNight
            }
          >
            © Copyright 2021 By Anwer Baccar
          </p>
        </div>
      </section>
    </footer>
  );
};

export default ContactMeSection;
