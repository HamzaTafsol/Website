import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CommonContainer } from "../../Components/CommonContainer";
import { LandingPageStyle } from "../../Components/LandingPageStyle";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import Header from "../../Components/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageModal from "../../Components/LanguageModal";
import SendNowModal from "../../Components/SendNowModal";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { bike, langiconnew, playicon, userIcon } from "../../Components/Svgs";
import LaunchCountModal from "../../Components/LaunchCountModal";
import TeamAccessModal from "../../Components/TeamAccessModal";
import { IoClose } from "react-icons/io5";

const LandingPage = () => {
  const [x, setX] = React.useState(0);
  React.useLayoutEffect(() => {
    setTimeout(() => {
      setX(1);
    }, 1000);
  }, []);

  const waitinglistbg = "/images/waitinglistbg.png";
  const closeiconwhite = "/images/closeiconwhite.svg";
  const conti = CommonContainer();
  const LandingPageMain = LandingPageStyle();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openModalShowNow, setOpenModalShowNow] = React.useState(false);
  const handleCloseModalShowNow = () => {
    setOpenModalShowNow(false);
  };
  const [openModalTeamAccess, setOpenModalTeamAccess] = React.useState(false);
  console.log(openModalTeamAccess);
  const handleCloseModalTeamAccess = () => {
    setOpenModalTeamAccess(false);
  };
  const [openModalLaunchCount, setOpenModalLaunchCount] = React.useState(false);
  const handleCloseLaunchCount = () => {
    setOpenModalLaunchCount(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#262626",
    textAlign: "center",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    // backgroundColor: "rgba(0, 0, 0, 0.5)"
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Logo = "/images/Logo.svg";
  const UserIcon = "/images/user-icon.png";
  return (
    <div
      className="waiting_list"
      style={{
        opacity: x,
      }}
    >
      {/* <Header/> */}
      <Grid
        className={`${conti.landingContainer}  ${LandingPageMain.WaitingList} `}
        container
        spacing={2}
        style={{
          backgroundImage: `url(${waitinglistbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid item xs={12}>
          <Item className="custom_header" style={{ backgroundColor: "unset" }}>
            <div className="header_logo">
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
            </div>
            <div className="language_main">
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
                {langiconnew}
                <span>US-EN</span>
              </span>

              <button
                className={"btn1 a-center"}
                onClick={(e) => {
                  // event priority handler
                  if (!e) {
                    e = window.event;
                  }
                  e.stopPropagation();
                  setOpenModalTeamAccess(true);
                }}
              >
                {userIcon}
                <span className="login_btn">Team Access</span>
              </button>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ backgroundColor: "unset" }}>
            <div className="landing_page_heading">
              <h1>Don’t try to fly, we do it for you</h1>
              <p>¿Want free credits? Join up now</p>
            </div>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ paddingLeft: "0", backgroundColor: "#0000004a" }}
        >
          <Item style={{ backgroundColor: "unset" }}>
            <div className="wait_list_form">
              <p>
                Earn $50,00 in-app orders consummation when you join at waitlist
              </p>
              <FormControl>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-normal"
                  placeholder="Name, Last Name"
                  variant="filled"
                />
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-normal"
                  placeholder="Email Address"
                  variant="filled"
                />
                <Button
                  variant="contained"
                  onClick={(e) => {
                    // event priority handler
                    if (!e) {
                      e = window.event;
                    }
                    e.stopPropagation();
                    setOpenModalShowNow(true);
                  }}
                >
                  Send now
                </Button>
              </FormControl>
              <p>Dogtor is a delivery app into the metaverse</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ backgroundColor: "unset" }}>
            <div className="launch_count">
              <a
                href="#!"
                onClick={(e) => {
                  // event priority handler
                  if (!e) {
                    e = window.event;
                  }
                  e.stopPropagation();
                  setOpenModalLaunchCount(true);
                }}
              >
                Launch Count
              </a>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item
            style={{ backgroundColor: "unset" }}
            className="custom_modal_main"
          >
            <div className="bike_img">{bike}</div>
            <div className="tour_modal">
              <p>Learn more about Dogtor</p>
              <h1>Take the tour</h1>

              <Button onClick={handleOpen}> {playicon}</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                className="modal_video_custom"
              >
                <Box sx={{ ...style, width: 900, height: 600}}>
                  <div
                    className="close_main"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      position:"relative"
                    }}
                  >
                    <img src={closeiconwhite} 
                      style={{ cursor: "pointer",  position: "absolute", top: "20px" }}
                      onClick={() => {
                        handleClose();
                      }}
                      fontSize={20}
                      className="close-icon img-fluid"
                    />
                  </div>
                  <Grid md={12} style={{    height: "100%",display: "flex",justifyContent: "center",alignItems: "center"}} >
                    <Button onClick={handleOpen}> {playicon}</Button>
                  </Grid>
                </Box>
              </Modal>
            </div>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item style={{ backgroundColor: "unset" }}>
            <div className="social_icon">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
              </ul>
            </div>
          </Item>
        </Grid>
      </Grid>
      {openModalShowNow && (
        <SendNowModal
          open={openModalShowNow}
          handleClose={handleCloseModalShowNow}
        />
      )}
      {openModalTeamAccess && (
        <TeamAccessModal
          open={openModalTeamAccess}
          handleClose={handleCloseModalTeamAccess}
        />
      )}
      {openModalLaunchCount && (
        <LaunchCountModal
          open={openModalLaunchCount}
          handleClose={handleCloseLaunchCount}
        />
      )}
      {openModal && (
        <LanguageModal open={openModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default LandingPage;
