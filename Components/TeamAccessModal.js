import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ModalSkeleton from "./ModalSkeleton";
import {Paper} from "@mui/material";
import { Grid } from "@mui/material";
import { teamAccessModalStyle } from "./TeamAccessModalStyle";
import { IoClose } from "react-icons/io5";
import Box from "@mui/material/Box";
import { closeicon, Volamos } from "./Svgs";
// import MailIcon from "@mui/icons-material/Mail";
import EmailIcon from '@mui/icons-material/EmailOutlined';
// import LockIcon from "@mui/icons-material/Lock";
import PasswordLock from '@mui/icons-material/HttpsOutlined';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField,
    Typography,
  } from "@mui/material";
  import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// import DateCountdown from 'react-date-countdown-timer';

const TeamAccessModal = ({ open, setOpen, onUpdate, handleClose }) => {
const [email, setEmail] = useState("")
  const [values, setValues] = React.useState({
    password: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const classes = teamAccessModalStyle();
const emailicon = "/images/emailicom.svg"
const lockicon = "/images/lockicon.svg"
const eye = "/images/eye.svg"
const closeicon = "/images/closeicon.svg"
  
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));
  return (
    <ModalSkeleton open={open} setOpen={handleClose} className={classes.modal}>
      <section className={classes.section}>
     
              <Box>
          <Grid
            container
            spacing={2}
            
          >
            <Grid item xs={12} className="custom_header_modal">
            <div className="close_main"
      style={{
        display: "flex",
        justifyContent: "end"

      }}
      >
                <img src={closeicon}
                style={{cursor:"pointer"}}
                onClick={() => handleClose()}
                fontSize={20}
                className="close-icon" />
              </div>
                <Typography
                  component={"h2"}
                  className={["text-left"]}
                  align="center"
                >
                 Enter to dogtorapp.com
                </Typography>
                {/* <div className="close_icon">
                  <Link href="/">
                    <CloseIcon />
                  </Link>
                </div> */}
            </Grid>
            <Grid item xs={12} align="center">
                <div className="login_form">
                  <FormControl>
                      <TextField
                      style={{marginBottom:"20px"}}
                      value={email}
                      onChange={(event)=>setEmail(event.target.value)}
                        className="custom_input"
                        placeholder="Correo electrónico"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon style={{ color: "#CBCBCB" }} />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                      
                        className="custom_input"
                        placeholder="Contraseña"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PasswordLock style={{ color: "#CBCBCB" }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                             <IconButton style={{color:"#CBCBCB"}}
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                    <Link  href="/HomePage">
                    <a>
                      <Button
                        className="custom_input"
                        variant="contained"
                      >
                        Log in
                      </Button>
                      </a>
                      </Link>
                      <div className="form_anchor_main">
                        <span style={{ color: "#BBBBBB" }}>
                        Forgot password? <span className="click_here_link"> Click here</span>
                        </span>
                       
                      </div>

                    
                  </FormControl>
                </div>
            </Grid>
          </Grid>
        </Box>
      </section>
    </ModalSkeleton>
    
  );
};

export default TeamAccessModal;
