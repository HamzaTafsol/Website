
import React, { useState } from "react";
import { TusDatosStyle } from "./TusDatosModalStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { PlusCircle, Volamos } from "../Components/Svgs";

import {
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { typoMain } from "./TypographyMain";
import { AccountCircle, Label } from "@mui/icons-material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from "@mui/material/styles";
import Link from "next/link";
import InputFormReuseable from "./InputFormReuseable";
import PhoneInput from "react-phone-input-2";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));
const TusDatosModal = ({ open, handleClose }) => {
  const classes = TusDatosStyle();
  const typo = typoMain();
  const [phone, setPhone] =useState(null);

  const isMobile = useMediaQuery("@media (max-width:900px)");
  console.log(isMobile);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isMobile ? "40%" : "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: !isMobile ? 5 : 0,
    p: !isMobile ? 4 : 0,
    // overflowY: "scroll",
    // height: !isMobile ? "50%" : "100%",
  };

 

  return (
    <Modal className="custom_modal"
      open={open}
      BackdropProps={{ style: { backgroundColor: "#8ee30499" } }}
      onClose={handleClose}
      hideBackdrop={false}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
            Tus datos
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
              <Grid item sm={12} md={12} xs={12} style={{paddingTop:"0"}}>
                <Item>
                  <div className="login_form">
                    <FormControl>
                      <Item style={{paddingTop:"0"}}>
                        <p>Nombre</p>
                      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx"  variant="standard" placeholder="Introduce tu nombre" />
                      </Item>
                      
                     
                      <Item>
                        <p>E-mail</p>
                      <MailOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx"  variant="standard" placeholder="dogtorapp@aol.com" />
                      </Item>
                      <Item>
                        {" "}
                        <Button
                          className={`${typo.custom_btn}`}
                          variant="contained"
                        >
                          Guardar
                        </Button>
                      </Item>
                     
                    </FormControl>
                  </div>
                </Item>
              </Grid>
            </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default TusDatosModal;
