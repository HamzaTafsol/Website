// Importamos los componentes
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Search from "../molecules/Search";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../../styles/Theme";

// Iconos
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";

// Definimos los links del menu
const headersData = [
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Empresa",
    href: "/empresa",
  },
  {
    label: "Seguridad",
    href: "/seguridad",
  },
  {
    label: "Ayuda",
    href: "/ayuda",
  },
];

// Creamos los estilos
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#abe236",
    justifyContent: "center",
    padding: "0",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    position: "relative",
  },
  menuButton: {
    fontWeight: 700,
    marginLeft: "10px",
    textTransform: "none",
    borderRadius: "3rem",
    padding: "0.7rem",
    color: "white",
  },
  menuButtonWhite: {
    fontWeight: 700,
    marginLeft: "10px",
    textTransform: "none",
    borderRadius: "3rem",
    padding: "0.7rem",
    color: "primary",
    "&:hover": {
      background: "#ffffff",
    },
  },
  toolbar: {
    padding: "1.5rem",
    display: "flex",
    justifyContent: "flex-start",
  },
  mobileToolbar: {
    width: "100vw",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
  menuItem: {
    color: "#2c2c2c",
    fontWeight: 700,
    fontSize: "0.9rem !important",
    marginLeft: "0px",
    textTransform: "none",
    borderRadius: "3rem",
    padding: "0.7rem",
  },
  logoContainer: {
    marginRight: "1rem",
  },
  buttonsContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
}));

// Definimos el header
const Header = () => {
  const {
    header,
    logoContainer,
    menuButton,
    menuButtonWhite,
    buttonsContainer,
    toolbar,
    mobileToolbar,
    drawerContainer,
    menuItem,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Image src="/logo.svg" width="250" height="70" />
        <Search />
        <div>{getMenuButtons()}</div>
        <div className={buttonsContainer}>
          <Button variant="contained" color="secondary" className={menuButton}>
            <PersonOutlineOutlinedIcon />
            Iniciar Sesion
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={menuButtonWhite}
          >
            <AppRegistrationOutlinedIcon />
            Registrarse
          </Button>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mobileToolbar}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
            <Button
              variant="contained"
              color="secondary"
              className={menuButton}
            >
              <PersonOutlineOutlinedIcon />
              Iniciar Sesion
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={menuButtonWhite}
            >
              <AppRegistrationOutlinedIcon />
              Registrarse
            </Button>
          </div>
        </Drawer>
        <div className={logoContainer}>
          <Image src="/logo.svg" width="100" height="50" />
        </div>
        <Search />
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link href={href} key={href}>
          <MenuItem className={menuItem}>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          href={href}
          key={href}
          {...{
            key: label,
            color: "inherit",
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <ThemeProvider theme={Theme}>
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    </ThemeProvider>
  );
};

export default Header;
