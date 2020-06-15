import React from "react";
import { Provider } from "mobx-react";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./theme";
import Routes from "./routes";
import store from "./entities/setUpStore";

function WrapThemeProvider(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{props.children}</CssBaseline>
    </ThemeProvider>
  );
}

function AppWrapper() {
  return (
    <Provider {...store}>
      <Router>
        <WrapThemeProvider>
          <Routes />
        </WrapThemeProvider>
      </Router>
    </Provider>
  );
}

export default AppWrapper;
