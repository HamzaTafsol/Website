
import React, { useState } from "react";
import { CellPhoneNumberModalStyle } from "./CellPhoneNumberModalStyle";
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
import allCountries from "./AllLanguages";
import { LanguagesStyle } from "./LanguagesStyle";
import { makeStyles } from "@mui/styles";
import { typoMain } from "./TypographyMain";
import { AccountCircle, Label } from "@mui/icons-material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from "@mui/material/styles";
import Link from "next/link";
import InputFormReuseable from "./InputFormReuseable";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));
const CellPhoneNumberModal = ({ open, handleClose }) => {
  const classes = CellPhoneNumberModalStyle();
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
      onClose={handleClose  }
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
            Verifica tu numero de telefono
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
                    
                      <Item>
                        <div style={{ display: "flex" }}>
                          <Grid
                            style={{ marginRight: 20 }}
                            item
                            sm={3}
                            md={3}
                            xs={3}
                          >
                              <label>Teléfono</label>
                            <PhoneInput
                              className="language_selectB"
                           
                              country={"us"}
                              value={phone}
                              //   onChange={phone => setPhone({ phone })}
                            />
                          </Grid>
                        </div>
                      </Item>
                      <Item>
                        {" "}
                        <Button
                          className={`${typo.custom_btn}`}
                          variant="contained"
                        >
                          VERIFICAR por SMS
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

export default CellPhoneNumberModal;
