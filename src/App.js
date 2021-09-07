import "./App.css";

import Router from "./router/Router";

import { Provider } from "react-redux";
import store from "./store";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#80e27e",
      main: "#4caf50",
      dark: "#087f23",
      contrastText: "#fff",
    },
    secondary: {
      light: "#39796b",
      main: "#004d40",
      dark: "#00251a",
      contrastText: "#000",
    },
  },
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
