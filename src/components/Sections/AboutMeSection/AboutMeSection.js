import Divider from '../../UI/Divider/Divider';
import React, { useEffect, useState } from 'react';
import classes from './AboutMeSection.module.css';
import '../grid.css';
import RoundedButton from '../../UI/RoundedButton/RoundedButton';

const AboutMeSection = () => {

  const [description,setDescription] = useState();
  const [imageUrl,setImageUrl] = useState();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/aboutSection.json`,
    )
      .then((response) => response.json())
      .then((responseData) => {
        setDescription(responseData.description);
        setImageUrl(responseData.imageUrl)
      });
  }, []);

  return (
    <section id='aboutMe'>
      <Divider title="About Me" />
      <div className="row">
        <div className="col span-1-of-2 box">
          <img src={imageUrl} alt="anwer" className={classes.anwer} />
        </div>
        <div className="col span-1-of-2 box">
          <div className={'row span-1-of-3 box ' + classes.whoAmISection}>
            <h1 className={classes.whoAmI}>Who AM I</h1>
          </div>

          <p className={classes.description}>
            {description}
          </p>

          <div className="row span-1-of-3 box">
            <div className={classes.buttons}>
              <a href='#contactMe'>
              <RoundedButton
                text="Hire Me"
                classLight="HireMeBtnLight"
                classNight="HireMeBtnNight"
              />
              </a>
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
