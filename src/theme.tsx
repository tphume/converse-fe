import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#0544F2`,
    },
    secondary: {
      main: `#B4BFCF`,
      dark: `#606368`,
      light: `#F0F4F8`,
    },
    background: {
      default: `#FFFFFF`,
    },
  },
});

export default theme;
