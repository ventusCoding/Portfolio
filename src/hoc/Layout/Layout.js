import React, { useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout = ({ children, responseData }) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <>
      <Toolbar
        responseData={responseData}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer isShown={sideDrawerIsVisible} closed={sideDrawerHandler} />
      <main className={classes.Content}>{children}</main>
    </>
  );
};

export default Layout;
