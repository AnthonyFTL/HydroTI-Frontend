import "./App.css";

import Router from "./router/Router";

import { Provider } from "react-redux";
import store from "./store";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: `Josefin Sans, sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
);

export default App;
