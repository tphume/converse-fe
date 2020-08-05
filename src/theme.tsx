import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#01509f`,
      dark: `#474B50`,
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
