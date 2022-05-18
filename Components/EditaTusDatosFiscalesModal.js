import React, { useState } from "react";
import { EditaTusDatosFiscalesModalStyles } from "../Components/EditaTusDatosFiscalesModalStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { floor, globe, hash, numbericon, pin, PlusCircle, postal, streeticon, Volamos } from "../Components/Svgs";

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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
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
const EditaTusDatosFiscalesModal = ({ open, handleClose }) => {
  const classes = EditaTusDatosFiscalesModalStyles();
  const typo = typoMain();
  

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
    height: !isMobile ? "100%" : "100%",
  };

  return (
    <Modal
      className="custom_modal"
      open={open}
      onClose={handleClose}
      hideBackdrop={false}
      aria-labelledby="modal-modal-title"
      BackdropProps={{ style: { backgroundColor: "#8ee30499" } }}
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className={classes.ModalMain}>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          <Grid item md={12}>
            <div style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <div className="close_icon" style={{ textAlign: "right" }}>
                  <CloseIcon  onClick={() =>  handleClose()}/>
                </div>
                <Typography
                  component={"h3"}
                  className={[typo.h3, "text-center"]}
                  align="center"
                >
                  Edita tus datos fiscales 
                </Typography>
                <Typography paragraph className="sub_paragraph">
                  Remember that Dogtor doesn’t remit invoices of products. If
                  you need any invoice, you will need to contact with the
                  partner establishment. To receive invoice for Dogtor service,
                  fill this data.
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
            <Grid item sm={12} md={12} xs={12} style={{ paddingTop: "0" }}>
              <Item>
                <Box component="div" className="login_form">
                  <FormControl>
                    <Item style={{ paddingTop: "0" }}>
                      {numbericon}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Nombre legal"
                      />
                    </Item>

                    <Item>
                      {hash}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="CIF"
                      />
                    </Item>
                    <Item>
                      {streeticon}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Calle, numero…."
                      />
                    </Item>
                    <Item>
                      {floor}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Piso, puerta…"
                      />
                    </Item>
                    <Item>
                      {pin}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Provincia"
                      />
                    </Item>
                    <Item>
                      {postal}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Codigo postal"
                      />
                    </Item>
                    <Item>
                      {pin}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Ciudad"
                      />
                    </Item>
                    <Item>
                      {globe}
                      <TextField
                        id=""
                        variant="standard"
                        placeholder="Pais"
                      />
                    </Item>

                    <Item style={{textAlign:"center"}}>
                      {" "}
                      <Button
                        className={`${typo.custom_btn}`}
                        variant="contained"
                      >
                        Guardar
                      </Button>
                    </Item>
                    <Item>
                        <Box component="span">
                            Delete Data
                        </Box>
                    </Item>
                  </FormControl>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default EditaTusDatosFiscalesModal;
