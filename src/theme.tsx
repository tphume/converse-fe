import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-lato";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#01509f`,
    },
    secondary: {
      main: `#ebf1f6`,
      dark: `#606368`,
      light: `#F0F4F8`,
    },
    background: {
      default: `#FFFFFF`,
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root, main, section": {
          height: "100%",
        },
      },
    },
  },
});

export default theme;
