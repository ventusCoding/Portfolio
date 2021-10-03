import React, { useContext } from "react";

import classes from "./SocialNetwork.module.css";

import facebookIcon from "../../../assets/fb_icon.svg";
import instagramIcon from "../../../assets/instagram_icon.svg";
import githubIcon from "../../../assets/git_icon.svg";
import linkedInIcon from "../../../assets/linkedIn_icon.svg";
import youtubeIcon from "../../../assets/youtube_icon.svg";

import { ThemeContext } from "../../../Helper/Context";

const SocialNetwork = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={classes.icon}>
      <img src={facebookIcon} alt="facebook" />
      <img src={githubIcon} alt="github" className={theme === "light" ? classes.lightMode : classes.nightMode}/>
      <img src={instagramIcon} alt="instagram" />
      <img src={linkedInIcon} alt="linkedIn" />
      <img src={youtubeIcon} alt="youtube" />
    </div>
  );
};

export default SocialNetwork;
