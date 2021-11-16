import React from "react";
import {
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
  createTheme,
} from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import TvRouter from "./TvRouter";
import ErrorBoundary from "./components/utility/ErrorBoundary";
import theme from "./themes/theme";
import { RecoilRoot } from "recoil";
import { Toast } from "./components/Toast";

const generateClassName = createGenerateClassName({
  productionPrefix: "tv",
});

const customTheme = createTheme(theme);

function App() {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <Toast />
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={customTheme}>
            <Router>
              <TvRouter />
            </Router>
          </ThemeProvider>
        </StylesProvider>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
