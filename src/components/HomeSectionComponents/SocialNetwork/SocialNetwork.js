import React, { useContext } from "react";

import classes from "./SocialNetwork.module.css";

import facebookIcon from "../../../assets/fb_icon.svg";
import instagramIcon from "../../../assets/instagram_icon.svg";
import githubIcon from "../../../assets/git_icon.svg";
import linkedInIcon from "../../../assets/linkedIn_icon.svg";
import youtubeIcon from "../../../assets/youtube_icon.svg";

import { ThemeContext } from "../../../Helper/Context";
import { Link } from "react-router-dom";

const SocialNetwork = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={classes.icon}>
      <a target="_blank" rel="noreferrer" href='http://facebook.com/'><img src={facebookIcon} alt="facebook" /></a>
      <a target="_blank" rel="noreferrer" href='http://facebook.com/'><img src={instagramIcon} alt="instagram" /></a>
      <a target="_blank" rel="noreferrer" href='http://facebook.com/'><img src={linkedInIcon} alt="linkedIn" /></a>
      <a target="_blank" rel="noreferrer" href='http://facebook.com/'><img src={youtubeIcon} alt="youtube" /></a>
      <a target="_blank" rel="noreferrer" href='http://facebook.com/'><img src={githubIcon} alt="github" className={theme === "light" ? classes.lightMode : classes.nightMode}/></a>
    </div>
  );
};

export default SocialNetwork;
