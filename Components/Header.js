import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
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
  Avatar,
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
import UserInfo from "./UserInfo";
import Link from "next/link";
import TusDatosModal from "./TusDatosModal";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import { Logout, PersonAdd } from "@mui/icons-material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Case } from "./Svgs";
import HamburModal from "./HamburModal";
import CaseModal from "./CaseModal";
const Logo = "/images/Logo.svg";
const LangIcon = "/images/language-icon.svg";
const UserIcon = "/images/user-icon.png";
const SearchIcon = "/images/search-icon.svg";
const SearchGreen = "/images/search-green.png";
const CrossCirlce = "/images/cross-circle.png";

function LookFor({ setOpen }) {
  const conti = CommonContainer();
  const classes = headerStyles();
  const islogin = false;

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
// 
const drawerWidth = 200;

const Item = styled(Paper)(({ theme }) => ({
  backgroundGridor: "transparent",
  boxShadow: "none",
}));
const Header = () => {
  const [openLookFor, setOpenLookFor] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
  const [caseOpen, setCaseOpen] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  console.log(login);
  const conti = CommonContainer();
  const classes = headerStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    setLogin(localStorage.getItem("login"));
  }, []);
  const [openModalSignin, setOpenModalSignin] = React.useState(false);
  const handleCloseModalSignin = () => {
    setOpenModalSignin(false);
  };
  const handleHamburgerClick = () => {
    setHamburgerOpen((prev) => !prev);
  };
  const handleCaseClick = () => {
    setCaseOpen((prev) => !prev);
  };
  const handleOpenModal = () => setOpenModal(true);
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opentoggle = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ flexGrid: 1 }}
      style={{
        backgroundColor: "#abe236",
        boxShadow: "10px 10px 12px #00000029",
      }}
    >
      <Container style={{ padding: 0 }} maxWidth="xl">
        <AppBar position="relative" className={classes.appBar} disableGutters>
          <Toolbar>
            <Grid
              container
              spacing={0}
              style={{ width:login ? "88%": "77%" }}
              className={conti.headerContainer1}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
                className={conti.headerContainer}
              >
                <Grid item md={12}>
                  <Item className={"navMain"}>
                    <Link href="/">
                      <div>
                        <img
                          src={Logo}
                          style={{
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    </Link>

                    {/* <Logo /> */}
                    <ul className={"ul"}>
                      <li className="a-center">
                        <img src={SearchIcon} className="magnify-glass" />
                        <span onClick={() => setOpenLookFor(true)}>
                          ¿Qué necesitas?
                        </span>
                      </li>
                      <li onClick={() => setOpenModalSignin(true)}>
                        Productos
                      </li>
                      <li>Empresa</li>
                      <li>Seguridad</li>
                      <li>Ayuda</li>
                      <li className="end a-center"
                      style={{ marginRight: login && "32px"}}
                      >
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
                        {!login && (
                          <>
                            <Link href="/Iniciar">
                              <button className={"btn1 a-center"}>
                                <img src={UserIcon} className="user-icon" />
                                <span className={classes.ps1}>
                                  Iniciar Sesión
                                </span>
                              </button>
                            </Link>
                            <Link href="/Registrate">
                              <button className={"btn2 a-center"}>
                                <AiOutlinePoweroff size={15} />
                                <span className={"ps1"}>Registrate</span>
                              </button>
                            </Link>
                          </>
                        )}
                      </li>
                      {/* <div> */}
                      {login && (
                        <>
                          <li>
                            <div className="Location">
                              <FmdGoodIcon />
                              <p>
                                Calle Eduardo Chillida
                                <span>219 B 2 A</span>
                              </p>
                            </div>
                          </li>

                          <li style={{ display: "block" }}>
                            <Tooltip >
                              <AccountCircleIcon
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                  opentoggle ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={opentoggle ? "true" : undefined}
                              >
                                <Avatar sx={{ width: 32, height: 32 }}>
                                  M
                                </Avatar>
                              </AccountCircleIcon>
                            </Tooltip>

                            <UserInfo
                              opentoggle={opentoggle}
                              anchorEl={anchorEl}
                              handleClose={handleClose}
                            />
                          </li>
                          <li>
                            <DensityMediumIcon onClick={handleHamburgerClick} />
                            {hamburgerOpen && (
                              <HamburModal
                                open={hamburgerOpen}
                                setOpen={setHamburgerOpen}
                              />
                            )}
                          </li>
                          <li>
                            <div className="addtocart">
                              <div onClick={handleCaseClick}>
                                {Case}
                                <span className="notification_num">2</span>
                              </div>
                              {caseOpen && (
                                <CaseModal
                                  open={caseOpen}
                                  setOpen={setCaseOpen}
                                />
                              )}
                            </div>
                          </li>
                        </>
                      )}

                      {/* </div> */}
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

      {openModalSignin && (
        <TusDatosModal
          open={openModalSignin}
          handleClose={handleCloseModalSignin}
        />
      )}
      {openModal && (
        <LanguageModal open={openModal} handleClose={handleCloseModal} />
      )}
    </Box>
  );
};

export default Header;
