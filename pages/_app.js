// Reseteamos los estilos
import "../styles/reset.css";

// Importmanos los hooks
import { useEffect } from "react";

// Importamos el template base de la landing page
import Landing from "../components/templates/Landing";

// Importamos los componentes
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "../styles/Theme";

const DogtorApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Landing>
      <ThemeProvider theme={Theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Landing>
  );
};

export default DogtorApp;
