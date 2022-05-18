
import React, { useState } from "react";
import { PasswordModalStyle } from "./PasswordModalStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { lock, Volamos } from "../Components/Svgs";

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
import allCountries from "./AllLanguages";
import { LanguagesStyle } from "./LanguagesStyle";
import { makeStyles } from "@mui/styles";
import { typoMain } from "./TypographyMain";
import { AccountCircle, Label, Visibility, VisibilityOff } from "@mui/icons-material";
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
const PasswordModal = ({ open, handleClose }) => {
  const classes = PasswordModalStyle();
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
  const [values, setValues] = React.useState({
    password: '',
  });
  const [valuesTwo, setValuesTwo] = React.useState({
    passwordtwo: '',
  });
  const [valuesThree, setValuesThree] = React.useState({
    passwordthree: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChangeTwo = (prop) => (event) => {
    setValuesTwo({ ...valuesTwo, [prop]: event.target.value });
  };
  const handleChangeThree = (prop) => (event) => {
    setValuesThree({ ...valuesThree, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPasswordTwo = () => {
    setValues({
      ...values,
      showPasswordTwo: !values.showPasswordTwo,
    });
  };
  const handleClickShowPasswordThree = () => {
    setValues({
      ...values,
      showPasswordThree: !values.showPasswordThree,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordTwo = (event) => {
    event.preventDefault();
  };
 
  const handleMouseDownPasswordThree = (event) => {
    event.preventDefault();
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
            Contraseña
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
                      {lock}   
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            placeholder="Contraseña anterior"
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                      </Item>
                      <Item style={{paddingTop:"0"}}>
                       
                      {lock}   
                        <Input
                            id="standard-adornment-password-two"
                            type={values.showPasswordTwo ? 'text' : 'password'}
                            value={values.passwordTwo}
                            placeholder="Contraseña nueva"
                            onChange={handleChangeTwo('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility two"
                                onClick={handleClickShowPasswordTwo}
                                onMouseDown={handleMouseDownPasswordTwo}
                                >
                                {values.showPasswordTwo ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                      </Item>
                      
                     
                      <Item>
                       
                      {lock}   
                        <Input
                            id="standard-adornment-password-three"
                            type={values.showPasswordThree ? 'text' : 'password'}
                            value={values.passwordThree}
                            placeholder="Vuelva a escribir la contraseña"
                            onChange={handleChangeThree('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility three"
                                onClick={handleClickShowPasswordThree}
                                onMouseDown={handleMouseDownPasswordThree}
                                >
                                {values.showPasswordThree ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
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

export default PasswordModal;
