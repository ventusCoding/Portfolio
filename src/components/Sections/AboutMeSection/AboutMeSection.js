import Divider from '../../UI/Divider/Divider';
import React, { useEffect, useState } from 'react';
import classes from './AboutMeSection.module.css';
import '../grid.css';
import RoundedButton from '../../UI/RoundedButton/RoundedButton';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMeSection = ({ responseData,cv }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section id="aboutMe">
      <Divider title="About Me" />
      <div className="row">
        <div className="col span-1-of-2 box">
          <img
            data-aos="fade-right"
            src={responseData.imageUrl}
            alt="anwer"
            className={classes.anwer}
          />
        </div>
        <div className="col span-1-of-2 box">
          <div className={'row span-1-of-3 box ' + classes.whoAmISection}>
            <h1 data-aos="fade-up" className={classes.whoAmI}>
              Who AM I
            </h1>
          </div>

          <p data-aos="zoom-in" className={classes.description}>{responseData.description}</p>

          <div className="row span-1-of-3 box">
            <div className={classes.buttons}>
              <a data-aos="fade-up-right" href="#contactMe">
                <RoundedButton
                  text="Hire Me"
                  classLight="HireMeBtnLight"
                  classNight="HireMeBtnNight"
                />
              </a>
              <a href={cv} data-aos="fade-up-left">
                <RoundedButton
                  text="See My Resume"
                  classLight="SeeMyResumeBtnLight"
                  classNight="SeeMyResumeBtNLight"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
