import React, { useContext } from 'react';

import classes from './NavigationItem.module.css';
import { ThemeContext } from '../../../../Helper/Context';

import { Link } from 'react-scroll';

const NavigationItem = ({ children, link, active, setActive }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeClasses = theme === 'light' ? classes.light : classes.night;
  const activeClass = active === children ? classes.active : null;
  const cssClasses = themeClasses + ' ' + activeClass;

  return (
    <li className={classes.NavigationItem}>
      <a
        href={link}
        className={cssClasses}
        onClick={() => setActive(children)}
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;

// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';

// import classes from './NavigationItem.module.css';
// import { ThemeContext } from '../../../../Helper/Context';

// const NavigationItem = ({ children, link, active, setActive }) => {
//   const { theme, setTheme } = useContext(ThemeContext);
//   const themeClasses = theme === 'light' ? classes.light : classes.night;
//   const activeClass = active === children ? classes.active : null;
//   const cssClasses = themeClasses + ' ' + activeClass;

//    console.log(active)

//   return (
//     <li className={classes.NavigationItem}>
//       <a href={link} className={cssClasses} onClick={() => setActive(children)}>
//         {children}
//       </a>
//     </li>
//   );
// };

// export default NavigationItem;
