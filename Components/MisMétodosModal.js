
import React, { useState } from "react";
import { MisMétodosModalStyle } from "./MisMétodosModalStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { cardone, lock, Volamos } from "../Components/Svgs";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { typoMain } from "./TypographyMain";
import { styled } from "@mui/material/styles";
import Link from "next/link";


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));
const MisMétodosModal = ({ open, handleClose }) => {

  const master = "/images/master_card.png"
  const wallet = "/images/wallet.png"
  const paypal = "/images/paypal.png"
  const plusicon = "/images/plusicon.png"
  const classes = MisMétodosModalStyle();
  const typo = typoMain();
  const [phone, setPhone] =useState(null);

  const isMobile = useMediaQuery("@media (max-width:900px)");
  console.log(isMobile);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    width: !isMobile ? "55%" : "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: !isMobile ? 5 : 0,
    p: !isMobile ? 4 : 0,
    // overflowY: "scroll",
    // height: !isMobile ? "70%" : "100%",
  };
 

  

  return (
    <Modal className="custom_modal"
      open={open}
      onClose={handleClose}
      hideBackdrop={false}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{ style: { backgroundColor: "#8ee30499" } }}
    >
      <Box sx={style} className={classes.ModalMain}>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
         

          <Grid item md={12}>
              <div style={{ textAlign: "center" }}>
               
                <div style={{ position: "relative" }}>
                 
                  <div className="close_icon" style={{textAlign:"right"}}>
                    <CloseIcon  onClick={() =>  handleClose()}/>
                  </div>
                  <Typography
            component={"h3"}
            className={[typo.h3, "text-center"]}
            align="center"
          >
            Mis métodos de pago
          </Typography>
                </div>
              </div>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
                  <Grid  item sm={12} md={12} xs={12} style={{paddingTop:"0"}}>
                  
                  <Box component="div" className="login_form">
                  <Grid container className="card_border" spacing={1} >
                  <Grid item md={1}>
                    <Item>
                    {cardone}
                    </Item>
                  
                  </Grid>
                     
                  <Grid item md={9}>
                    <Item  style={{backgroundColor:"transparent"}}>
                    <Box component="div" className="card_detail">
                      <Typography paragraph >Metodo de pago <br/> Tarjeta terminada en 0000 <img src={master} alt="card" /> </Typography>
                    </Box>
                    </Item>
                   
                  </Grid>
                     
                  <Grid item md={2}>
                    <Item>
                    <Box component="span" className="delete_icon">
                      <DeleteIcon />
                    </Box>
                    </Item>
                
                  </Grid>
                  </Grid>
                  <Grid container className="card_border" spacing={1} >
                  <Grid item md={1}>
                    <Item>
                   <img src={wallet} alt="wallet" />
                    </Item>
                  
                  </Grid>
                     
                  <Grid item md={11}>
                    <Item  style={{backgroundColor:"transparent"}}>
                    <Box component="div" className="card_detail">
                      <Typography paragraph >Digital wallet <br/> Paypal account - dogtor@dogtorapp.com <img src={paypal} alt="paypal" /></Typography>
                    </Box>
                    </Item>
                   
                  </Grid>
                     
                
                  </Grid>
                  <Grid container spacing={2}>
                      <Grid item md={12}>
                        <Box component="div" className="add_payment">
                          <Typography paragraph> <img src={plusicon} alt="Add Icon"/> Añadir otro metodo de pago </Typography>
                        </Box>
                      </Grid>
                      <Grid item md={12}>
                      <Item style={{backgroundColor:"transparent", textAlign:"center"}}>
                        {" "}
                        <Button
                          className={`${typo.custom_btn}`}
                          variant="contained"
                        >
                          Guardar
                        </Button>
                      </Item>
                      </Grid>
                  </Grid>
                  </Box>
               
                      
                     
                  
                
              </Grid>
             
            </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default MisMétodosModal;
