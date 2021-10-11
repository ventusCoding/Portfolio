import React, { useContext,useEffect } from 'react';

import classes from './SocialNetwork.module.css';

import facebookIcon from '../../../assets/fb_icon.svg';
import instagramIcon from '../../../assets/instagram_icon.svg';
import githubIcon from '../../../assets/git_icon.svg';
import linkedInIcon from '../../../assets/linkedIn_icon.svg';
import youtubeIcon from '../../../assets/youtube_icon.svg';

import { ThemeContext } from '../../../Helper/Context';

const SocialNetwork = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  let themeMode = theme === 'light' ? classes.lightMode : classes.nightMode;

  if (props.footer) {
    themeMode = theme === 'light' ? classes.nightMode : classes.lightMode;
  }

  const rendredComponent = props.list !== undefined ? 
  props.list.map((item, index) => {
    return (
      <a target="_blank" rel="noreferrer" href={item.link} key={item.name}>
        <img
          src={item.icon}
          alt={item.name}
          className={item.night ? themeMode : null}
        />
      </a>
    );
  }):null;

  return (
    <div className={classes.icon}>
        {rendredComponent}
    </div>
  );
};

export default SocialNetwork;
