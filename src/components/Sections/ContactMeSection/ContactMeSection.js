import React, { useContext, useState } from "react";
import classes from "./ContactMeSection.module.css";
import Divider from "../../UI/Divider/Divider";
import "../grid.css";
import SocialNetwork from "../../HomeSectionComponents/SocialNetwork/SocialNetwork";
import { ThemeContext } from "../../../Helper/Context";
import emailjs from "emailjs-com";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Spinner2 from "../../UI/Spinner2/Spinner2";
import { useForm } from "react-hook-form";

const ContactMeSection = ({ list }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { theme, setTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  const handlerNotificationSuccess = () =>
    store.addNotification({
      title: "Success",
      message: "Your message has been sent successfully!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });

  const handlerNotificationError = () =>
    store.addNotification({
      title: "Danger",
      message: "Failed to send your message Try again please!",
      type: "Danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });

  const textTheme = theme === "light" ? classes.textLight : classes.textNight;

  const themeInput =
    theme === "light" ? classes.inputLight : classes.inputNight;
  const inputClass = classes.input + " " + themeInput + " " + textTheme;

  const btnTheme = theme === "light" ? classes.btnLight : classes.btnNight;

  const btnCss = classes.btn + " " + btnTheme + " " + textTheme;

  const sendEmailHandler = (data, e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_Email_JS_Service_ID,
        process.env.REACT_APP_To_Me_Email_JS,
        e.target,
        process.env.REACT_APP_Email_JS_User_ID
      )
      .then((res) => {
        emailjs
          .sendForm(
            process.env.REACT_APP_Email_JS_Service_ID,
            process.env.REACT_APP_To_Client_Email_JS,
            e.target,
            process.env.REACT_APP_Email_JS_User_ID
          )
          .then((res) => {
            setLoading(false);
            handlerNotificationSuccess();
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            handlerNotificationError();
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        handlerNotificationError();
      });
  };

  return (
    <footer>
      <section id="contactMe">
        <Divider title="Contact Me" />
        <div
          className={
            theme === "light" ? classes.footerLight : classes.footerNight
          }
        >
          <form onSubmit={handleSubmit(sendEmailHandler)}>
            <div className="row">
              <div className="col span-1-of-2 ">
                <div className={classes.inputsSection}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      className={inputClass}
                      placeholder="Your Name"
                      {...register("name", { required: "Name is Required" })}
                    />
                    {errors.name && (
                      <p className={classes.error}>{errors.name.message}</p>
                    )}
                    <br />
                    <input
                      type="email"
                      name="email"
                      className={inputClass}
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value:
                            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                          message: "Invalid Email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={classes.error}>{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col span-1-of-2 box">
                <div className={"row span-1-of-2 box " + classes.areaRow}>
                  <textarea
                    name="content"
                    className={classes.inputArea + " " + inputClass}
                    placeholder="Content"
                    maxLength="400"
                    {...register("content", {
                      required: "Content is Required",
                      minLength: {
                        value: 13,
                        message: "Short message!",
                      },
                    })}
                  />
                </div>
                <div className="row span-1-of-2 box">
                  {errors.content && (
                    <p className={classes.errorContent}>{errors.content.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className={classes.networkAndBtnSection}>
                <SocialNetwork list={list} footer={true} />
                <div className={classes.btnSpinner}>
                  {loading ? (
                    <Spinner2 />
                  ) : (
                    <button type="submit" className={btnCss}>
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
          <p
            className={
              theme === "light" ? classes.footerLight : classes.footerNight
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
