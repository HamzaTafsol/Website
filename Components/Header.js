import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
// import { InboxIcon, MailIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Image } from "next/image";
import { HiSearch } from "react-icons/hi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { CommonContainer } from "./CommonContainer";
import NavDrawer from "./Drawer";
import { headerStyles } from "./HeaderStyles";
import { VscThreeBars } from "react-icons/vsc";
import LanguageModal from "./LanguageModal";

const Logo = "/images/Logo.svg";
const LangIcon = "/images/language-icon.svg";
const UserIcon = "/images/user-icon.png";
const SearchIcon = "/images/search-icon.svg";
const SearchGreen = "/images/search-green.png";
const CrossCirlce = "/images/cross-circle.png";

function LookFor({ setOpen }) {
  const conti = CommonContainer();
  const classes = headerStyles();

  return (
    <section className={classes.lookForSection}>
      <Grid container className={conti.headerContainer}>
        <Grid item lg={12}>
          <div className="input-box">
            <img src={SearchGreen} className="search-icon" />
            <input placeholder="Buscar" />
            <img
              src={CrossCirlce}
              className="cancel-icon"
              onClick={() => setOpen(false)}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

const drawerWidth = 200;

const Item = styled(Paper)(({ theme }) => ({
  backgroundGridor: "transparent",
  boxShadow: "none",
}));
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openLookFor, setOpenLookFor] = useState(false);
  const conti = CommonContainer();
  const classes = headerStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const toggleDrawer = (val) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(val);
  };

  useEffect(() => {
    console.log(openModal, "openModal");

 
  }, [openModal]);

  return (
    <Box sx={{ flexGrid: 1 }}>
      <Container maxWidth="xl">
        <AppBar position="fixed" className={classes.appBar} disableGutters>
          <Toolbar>
            <Grid container spacing={0} className={conti.headerContainer1}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
                className={conti.headerContainer}
              >
                <Grid item md={12}>
                  <Item className={"navMain"}>
                    <div>
                      <img
                        src={Logo}
                        style={{
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                    {/* <Logo /> */}
                    <ul className={"ul"}>
                      <li className="a-center">
                        <img src={SearchIcon} className="magnify-glass" />
                        <span onClick={() => setOpenLookFor(true)}>
                          ¿Qué necesitas?
                        </span>
                      </li>
                      <li>Productos</li>
                      <li>Empresa</li>
                      <li>Seguridad</li>
                      <li>Ayuda</li>
                      <li className="end a-center">
                        <span
                          className="lang"
                          onClick={(e) => {
                            // event priority handler
                            if (!e) {
                              e = window.event;
                            }
                            e.stopPropagation();
                            setOpenModal(true);
                          }}
                        >
                          <img src={LangIcon} className="lang-icon" />
                          <span>ES-ES</span>
                        </span>
                        <button className={"btn1 a-center"}>
                          <img src={UserIcon} className="user-icon" />
                          <span className={classes.ps1}>Iniciar Sesión</span>
                        </button>
                        <button className={"btn2 a-center"}>
                          <AiOutlinePoweroff size={15} />
                          <span className={"ps1"}>Registrate</span>
                        </button>
                      </li>
                    </ul>
                  </Item>
                </Grid>
              </Box>
              {/* Responsive Header */}

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", sm: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={() => setOpenDrawer(true)}
                >
                  <VscThreeBars color="black" />
                </IconButton>
                <NavDrawer
                  openDrawer={openDrawer}
                  setOpenDrawer={setOpenDrawer}
                  toggleDrawer={toggleDrawer}
                />
              </Box>
              {/* Responsive Header */}
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
      {openLookFor && <LookFor setOpen={setOpenLookFor} />}

      {openModal && (
        <LanguageModal open={openModal} handleClose={handleCloseModal} />
      )}
    </Box>
  );
};

export default Header;
