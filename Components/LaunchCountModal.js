import React from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Button, Grid, Typography } from "@mui/material";
import { launchCountModalStyle } from "./LaunchCountModalStyle";
import { IoClose } from "react-icons/io5";
import CloseIcon from "@mui/icons-material/Close";
import Countdown from "react-countdown";
import moment from "moment";
import  typoMain  from "../Components/TypographyMain";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

  // import DateCountdown from 'react-date-countdown-timer';
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="counter_main">
        <div className="days">
          <div className="count">
            {days}
          </div>
          <div className="text">   
            <h4 style={{color:"#000"}}>Days</h4>
          </div>
        </div>
        <div className="hours">
          <div className="count">
            {hours}
          </div>
          <div className="text">            
            <h4 style={{color:"#000"}}>Hours</h4>
          </div>
        </div>
        <div className="minutes">
          <div className="count">
            {minutes}
          </div>
          <div className="text">            
            <h4 style={{color:"#000"}}>Minutes</h4>
          </div>
        </div>
        <div className="seconds">
          <div className="count">
            {seconds}
          </div>
          <div className="text">            
            <h4 style={{color:"#000"}}>Seconds</h4>
          </div>
        </div>        
      </div>
    );
  }
};
const LaunchCountModal = ({ open, setOpen, onUpdate, handleClose }) => {
  const classes = launchCountModalStyle();
  const victory = "/images/victory.png";
  return (
    <ModalSkeleton open={open} setOpen={handleClose} className={`${classes.modal} ${classes.countDown_modal}`}>
      <Item style={{ textAlign: "right",backgroundColor:"unset"}}>
                    <CloseIcon style={{color:"#fff "}} onClick={() => handleClose()} />
                  </Item>

      <h2 style={{color: "#000929", fontSize: "30px" ,fontFamily:"axiforma-bold", maxWidth: "100%", margin: "0 auto", textAlign: "center"}}>The 1st delivery web app 3.0 is launching in</h2>
      <Countdown
        date={moment().add(18, "days").format("")}
        renderer={renderer}
      /> 
      <div style={{textAlign:"center"}}>

      <Button
                      className={`${classes.custom_btn}`}
                      onClick={() =>  handleClose()}
                      variant="contained"
                      >
                      Aceptar y continuar
                    </Button>     
                      </div>
    </ModalSkeleton>
  );
};

export default LaunchCountModal;
