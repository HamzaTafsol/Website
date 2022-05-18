import React from "react";
import ModalSkeleton from "./ModalSkeleton";
import Paper from "@mui/material/Paper";
import { Avatar, Divider, FormControlLabel, Grid, MenuItem } from "@mui/material";
import { userInfoStyle } from "./UserInfoStyle";
import { IoClose } from "react-icons/io5";
import Box from "@mui/material/Box";
import { Volamos } from "./Svgs";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
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
import { Label, Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Menu } from "@mui/material";
import { useRouter } from 'next/router'

import TusDatosModal from "./TusDatosModal";
import CellPhoneNumberModal from "./CellPhoneNumberModal";
import PasswordModal from "./PasswordModal";
import MisMétodosModal from "./MisMétodosModal";
import EditaTusDatosFiscalesModal from "./EditaTusDatosFiscalesModal";
// import DateCountdown from 'react-date-countdown-timer';
const mastercards = "/images/master_card.png";
const UserInfo = ({ anchorEl, opentoggle, handleClose }) => {
  const classes = userInfoStyle();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseOne = () => setOpen(false);

  const [openNumber, setOpenNumber] = React.useState(false);
  const handleOpenNumber = () => setOpenNumber(true);
  const handleCloseNumber = () => setOpenNumber(false);

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleOpenPassword = () => setOpenPassword(true);
  const handleClosePassword = () => setOpenPassword(false);
 
  const [openPayment, setOpenPayment] = React.useState(false);
  const handleOpenPayment = () => setOpenPayment(true);
  const handleClosePayment = () => setOpenPayment(false);

  const [openEditTax, setOpenEditTax] = React.useState(false);
  const handleOpenEditTax = () => setOpenEditTax(true);
  const handleCloseEditTax = () => setOpenEditTax(false);


  // const GreenSwitch = styled(Switch)(({ theme }) => ({
  //   "& .MuiSwitch-switchBase.Mui-checked": {
  //     color: green[600],
  //     "&:hover": {
  //       backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
  //     },
  //   },
  //   "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
  //     backgroundColor: green[600],
  //   },
  // }));
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 54,
    height: 27,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(27px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#ABE236',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={opentoggle}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          style: {
            width: 402,
            overflowY: "scroll",
          },
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <section className={classes.section}>
          <Grid container>
            <Grid item xs={12}>
              <h1 className="heading_main" style={{ textAlign: "left" }}>¡Hola, Ricardo!</h1>
            </Grid>
            <div className="custom_user_form">
              <Grid item xs={8}>
                <Item>
                  <FormControl>
                    <TextField
                      label="Nombre"
                      value="Ricardo Mandini"
                      variant="standard"
                      color="warning"
                      disabled
                    />
                    <TextField
                      label="E-mail"
                      value="mandini@gmail.com"
                      variant="standard"
                      color="warning"
                      disabled
                    />
                  </FormControl>
                </Item>
              </Grid>

              <Grid item xs={4}>
                <Item>
                  <Button onClick={handleOpen} className="edit_btn">Editar</Button>
                </Item>
              </Grid>
            </div>
          </Grid>
          <Grid container>
            <div className="custom_user_form">
              <Grid item xs={8}>
                <Item>
                  <FormControl>
                    <TextField
                      label="Numero movil"
                      value="+34622000000"
                      variant="standard"
                      color="warning"
                      disabled
                    />
                  </FormControl>
                </Item>
              </Grid>

              <Grid item xs={4}>
                <Item>
                  <Button onClick={handleOpenNumber} className="edit_btn">Editar</Button>
                </Item>
              </Grid>
            </div>
          </Grid>
          <Grid container>
            <div className="custom_user_form">
              <Grid item xs={8}>
                <Item>
                  <FormControl>
                    <TextField
                      label="Contraseña"
                      value="**********"
                      variant="standard"
                      color="warning"
                      disabled
                    />
                  </FormControl>
                </Item>
              </Grid>

              <Grid item xs={4}>
                <Item>
                  <Button onClick={handleOpenPassword} className="edit_btn">Editar</Button>
                </Item>
              </Grid>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <Item>
                <p className="card_title">Metodo de pago</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Button onClick={handleOpenPayment} className="edit_btn">Cambiar</Button>
              </Item>
            </Grid>
            <div className="custom_user_form">
              <Grid item xs={12}>
                <Item>
                  <div className="payment_method">
                    {/* <span>{mastercards}</span> */}
                    <span className="card_number">
                      Tarjeta terminada en <p>0000</p>{" "}
                    </span>
                    <span className="delete_icon">
                      <DeleteIcon />
                    </span>
                  </div>
                </Item>
              </Grid>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <Item>
                <p className="card_title">Información fiscal</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Button onClick={handleOpenEditTax} className="edit_btn">Editar</Button>
              </Item>
            </Grid>
            <div className="custom_user_form">
              <Grid item xs={12}>
                <Item>
                  <p className="location">
                    Dogtor Technology INC Calle de Eduardo Chillida, 219, 2A
                  </p>
                </Item>
              </Grid>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <Item>
                <p className="card_title">Administrar preferencias</p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{/* <Button className="edit_btn">Editar</Button> */}</Item>
            </Grid>
            <div className="custom_user_form">
              <Grid item xs={12}>
                <Item>
                  <div className="div_between">
                    <p>Recibir ofertas, marketing y promociones.</p>
                    {/* <GreenSwitch className="switcher_green" {...label} defaultChecked /> */}
                    <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                  </div>
                </Item>
              </Grid>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Item>
                <p className="card_title">Códigos promocionales</p>
              </Item>
            </Grid>
            <div className="custom_user_form">
            <Grid item xs={12}>
              <Item>
                <p className="card_title_one">DOGTOR1234</p>
                <FormControl className="custom_user_form_two" >
                    <TextField
                      label=""
                      value=""
                      variant="standard"
                      
                      disabled
                    />
                     <Button className="edit_btn_one">Editar</Button>
                   
                  </FormControl>

              </Item>
              <Item>
              <FormControl className="custom_user_form_three">
                    <TextField
                      label="Envio GRATIS"
                      value="1"
                      variant="standard"
                      color="warning"
                      disabled
                    />
                  </FormControl>
              </Item>
            </Grid>
         
            </div>
            <Grid item xs={12}>
              <Item style={{textAlign:"right",paddingTop:"0"}}>
                <Button className="edit_btn">Cerrar sesion</Button>
              </Item>
            </Grid>
          </Grid>
        </section>
      </Menu>
      <TusDatosModal open={open} handleClose={handleCloseOne} />
      <CellPhoneNumberModal open={openNumber} handleClose={handleCloseNumber} />
      <PasswordModal open={openPassword} handleClose={handleClosePassword} />
      <MisMétodosModal open={openPayment} handleClose={handleClosePayment} />
      <EditaTusDatosFiscalesModal open={openEditTax} handleClose={handleCloseEditTax} />
    </>
  );
};

export default UserInfo;
