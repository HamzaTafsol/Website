// Importamos los colores y el createTheme
import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const Theme = createTheme({
  palette: {
    primary: {
      main: "#abe236",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default Theme;