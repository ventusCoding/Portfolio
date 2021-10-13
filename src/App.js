import "./App.css";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import ReactNotification from "react-notifications-component";

import React, { useState } from "react";

import { ThemeContext } from "./Helper/Context";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <Home />
        </StyledApp>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
