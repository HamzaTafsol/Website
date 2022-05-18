import React from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Grid } from "@mui/material";
import { sendNowModalStyle } from "./SendNowModalStyle";
import { IoClose } from "react-icons/io5";

const SendNowModal = ({ open, setOpen, onUpdate, handleClose }) => {
  const classes = sendNowModalStyle();
  const victory = "/images/victory.png";
  const closeiconwhite = "/images/closeiconwhite.svg";
  return (
    <ModalSkeleton open={open} setOpen={handleClose} className={classes.modal}>
      <section className={classes.section}>
      <div className="close_main"
      style={{
        display: "flex",
        justifyContent: "end"

      }}
      >
                <img src={closeiconwhite}
                style={{cursor:"pointer"}}
                onClick={() => {handleClose()}}
                fontSize={20}
                className="close-icon" />
              </div>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}> 
            <h1 className="heading">You’ve register correctly to our whitelist</h1>
            
          </Grid>
          <Grid item lg={12} md={12} sm={12}  style={{textAlign:"center"}} className="victory_content" >
          <img src={victory}/>
          <h3>Soon you’ll get good news from our side Att. Dogtor</h3>

          <button>¡Thanks!</button>
          </Grid>
         
        </Grid>
      </section>
    </ModalSkeleton>
  );
};

export default SendNowModal;
