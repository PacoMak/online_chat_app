import "./i18n";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { MuiTheme, ScTheme } from "./themes";

function App() {
  return (
    <ThemeProvider theme={ScTheme}>
      <MuiThemeProvider theme={MuiTheme}>
        <RouterProvider router={router} />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
