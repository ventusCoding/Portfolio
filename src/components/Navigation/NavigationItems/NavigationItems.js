import React, { useState } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  const [active, setActive] = useState('Home');

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="#home" active={active} setActive={setActive}>
        Home
      </NavigationItem>
      <NavigationItem link="#aboutMe" active={active} setActive={setActive}>
        About Me
      </NavigationItem>
      <NavigationItem link="#services" active={active} setActive={setActive}>
        Services
      </NavigationItem>
      <NavigationItem link="#technologies" active={active} setActive={setActive}>
        Technologies
      </NavigationItem>
      <NavigationItem link="#works" active={active} setActive={setActive}>
        Works
      </NavigationItem>
      <NavigationItem link="#contactMe" active={active} setActive={setActive}>
        Contact Me
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
