import { ThemeOptions, createTheme } from "@mui/material";
const theme: ThemeOptions = {
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
};

export const MuiTheme = createTheme(theme);
