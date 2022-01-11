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
    height: "100px",
    justifyContent: "center",
    padding: "4rem",
    paddingRight: "150px",
    paddingLeft: "150px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontWeight: 700,
    fontSize: "0.9rem !important",
    marginLeft: "10px",
    textTransform: "none",
    borderRadius: "3rem",
    padding: "0.7rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
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
}));

// Definimos el header
const Header = () => {
  const { header, menuButton, toolbar, drawerContainer, menuItem } = useStyles();

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
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
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
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>
          <Image src="/logo.svg" width="70" height="25" />
        </div>
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
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
