// Importamos los colores y el createTheme
import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const Theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#2c2c2c",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#2c2c2c",
      secondary: "#2c2c2c",
    }
  },
  // font color
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
});

export default Theme;
