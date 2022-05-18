import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CommonContainer } from "../Components/CommonContainer";
import Header from "../Components/Header";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { typoMain } from "../Components/TypographyMain";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IniciarStyles } from "./IniciarStyles";
import Link from "next/link";
// import MailIcon from "@mui/icons-material/Mail";
import MailIcon from '@mui/icons-material/EmailOutlined';
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "@mui/material/Input";
import { Volamos, CpuCharge, shoppingbag, bicycle, market, dogtorLogo } from "../Components/Svgs";
// import LockIcon from "@mui/icons-material/Lock";
import LockIcon from '@mui/icons-material/HttpsOutlined';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

const Iniciar = () => {
  const router = useRouter();
  const badge = "/images/badge.png";
  const cycle = "/images/cycle.png";
  const marketone = "/images/marketone.png";
  const Logo = "/images/Logo.svg";
  const [active, setActive] = React.useState(1);
  const conti = CommonContainer();
  const typo = typoMain();
  const IniciarMain = IniciarStyles();
  const footer = IniciarStyles();

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
  return (
    <>
    {active == 1 && <Header/>}
      
      {active == 1 && (
        <Box
          className={`${conti.headerContainer} ${IniciarMain.IniciarStyling}`}
          sx={{ flexGrow: 1 }}
          style={{ marginTop: "90px", positon:"relative" }}
        >
          <Grid item xs={12} className="custom_header_modal">
            <Typography
              component={"h1"}
              className={[typo.h1, "text-center"]}
              align="center"
            >
              Inicio de sesión
            </Typography>
            <div className="close_icon">
              <Link href="/HomePage" onClick={() => {
                          router.push("/HomePage");
                          localStorage.setItem("login", true);
                        }} >
                <CloseIcon />
              </Link>
            </div>
          </Grid>

          <Grid container spacing={2}>
            <Grid
              className="client"
              style={{ cursor: "pointer" }}
              item
              sm={6}
              md={4}
              xs={12}
            >
              <Item onClick={() => setActive(2)}>
                <div className="card_image">
                  {/* <img src={badge} alt="" /> */}
                  {shoppingbag}
                </div>
                <div>
                  <Typography
                    component={"h2"}
                    className={[typo.h2, "text-left"]}
                    align="left"
                  >
                    Cliente
                  </Typography>
                </div>
                <div className="bottom_line">
                  <ArrowForwardIcon />
                </div>
                <div>
                  <p>Todo lo que necesitas en un mismo sitio.</p>
                </div>
              </Item>
            </Grid>
            <Grid style={{ cursor: "pointer" }} item sm={6} md={4} xs={12}>
              <Item onClick={() => setActive(2)}>
                <div className="card_image">
                  {/* <img src={cycle} alt="" /> */}
                {bicycle}
                </div>
                <div>
                  <Typography
                    component={"h2"}
                    className={[typo.h2, "text-left"]}
                    align="left"
                  >
                    Repartidor
                  </Typography>
                </div>
                <div className="bottom_line">
                  <ArrowForwardIcon />
                </div>
                <div>
                  <p>
                    Gestiona tus opciones de pagos datos fiscales, historial de
                    servicios y mucho más.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid
              className="client"
              style={{ cursor: "pointer" }}
              item
              sm={6}
              md={4}
              xs={12}
            >
              <Item onClick={() => setActive(2)}>
                <div className="card_image">
                  {/* <img src={marketone} alt="" /> */}
                  {market}
                </div>
                <div>
                  <Typography
                    component={"h2"}
                    className={[typo.h2, "text-left"]}
                    align="left"
                  >
                    Negocio
                  </Typography>
                </div>
                <div className="bottom_line">
                  <ArrowForwardIcon />
                </div>
                <div>
                  <p>
                    Gestiona tus negocios, opciones de pago, servicios y mucho
                    más.
                  </p>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
      {active == 2 && (
        <Box>
          <Grid
            container
            spacing={2}
            className={`${conti.headerContainer} ${IniciarMain.IniciarStyling}`}
          >
            <Grid item xs={12} className="custom_header_modal modal_one">
              <Item align="center">
                {Volamos}

                <Typography
                  component={"h2"}
                  className={[typo.h2, "text-left"]}
                  align="center"
                >
                  Volamos por ti
                </Typography>
                <div className="close_icon">
                  <Link href="/HomePage" onClick={() => {
                          router.push("/HomePage");
                          localStorage.setItem("login", true);
                        }}>
                    <CloseIcon />
                  </Link>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} align="center">
              <Item>
                <div className="login_form">
                  <FormControl>
                    <Item>
                      <TextField
                        className={`${typo.custom_input}`}
                        placeholder="Correo electrónico"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Item>

                    <Item>
                      <TextField
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        className={`${typo.custom_input}`}
                        onChange={handleChange('password')}
                        placeholder="Contraseña"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton 
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
                    </Item>

                    <Item>
                      <Button
                        onClick={() => {
                          router.push("/HomePage");
                          localStorage.setItem("login", true);
                        }}
                        className={`${typo.custom_btn}`}
                        variant="contained"
                      >
                        Iniciar sesión
                      </Button>
                    </Item>
                    <Item>
                      <div className="form_anchor_main">
                        <span style={{ color: "#BBBBBB" }}>
                          ¿Olvidaste la contraseña?{" "}
                        </span>
                        <p
                          style={{ textDecoration: "underline" }}
                          onClick={() => setActive(3)}
                        >
                          {"Haz click aqui"}
                        </p>
                      </div>
                    </Item>

                    <Item>
                      <div className="form_inner_anchor_two">
                        <span style={{ color: "#BBBBBB" }}>
                          Sin cuenta aun?
                        </span>
                        <Link href="/Registrate">{"Registrate para pedir"}</Link>
                      </div>
                    </Item>
                  </FormControl>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
      {active == 3 && (
        <Box>
          <Grid
            container
            spacing={2}
            className={`${conti.headerContainer} ${IniciarMain.IniciarStyling}`}
          >
            <Grid item xs={12} className="custom_header_modal modal_one modal_two">
              <Item align="center">
                {Volamos}
                <Typography
                  component={"h2"}
                  className={[typo.h2, "text-left"]}
                  align="center"
                >
                  Verificación en 2 pasos: SMS
                </Typography>
                <Typography
                  component={"p"}
                  className={[typo.smallP, "text-center"]}
                >
                  Introduce el código de 4 dígitos que te hemos enviamos
                </Typography>
                <div className="close_icon">
                  <Link href="/HomePage" onClick={() => {
                          router.push("/HomePage");
                          localStorage.setItem("login", true);
                        }}>
                    <CloseIcon />
                  </Link>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} align="center">
              <Item>
                <div className="login_form login_form_one">
                  <FormControl>
                    <Item>
                      <TextField
                        className={`${typo.custom_input}`}
                        placeholder="Introduce tu código de verificación"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {CpuCharge}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Item>

                    <Item>
                      <Button
                        className={`${typo.custom_btn}`}
                        onClick={() => setActive(4)}
                        variant="contained"
                      >
                        VERIFICAR
                      </Button>
                    </Item>
                    <Item>
                      <div className="form_anchor_main">
                        <span style={{ color: "#BBBBBB" }}>
                          Reenviar código por{" "}
                        </span>
                        <Link href="#" underline="always">
                          {"SMS"}
                        </Link>
                      </div>
                    </Item>
                  </FormControl>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
      {active == 4 && (
        <Box>
          <Grid
            container
            spacing={2}
            className={`${conti.headerContainer} ${IniciarMain.IniciarStyling}`}
          >
            <Grid item xs={12} className="custom_header_modal modal_one modal_two">
              <Item align="center">
                {Volamos}
                <Typography
                  component={"h2"}
                  className={[typo.h2, "text-left"]}
                  align="center"
                >
                  Introduce tu nueva contraseña
                </Typography>
                <div className="close_icon">
                  <Link href="/HomePage" onClick={() => {
                          router.push("/HomePage");
                          localStorage.setItem("login", true);
                        }}>
                    <CloseIcon />
                  </Link>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} align="center">
              <Item>
                <div className="login_form login_form_two">
                  <FormControl>
                    <Item>
                      <TextField
                        className={`${typo.custom_input}`}
                        placeholder="Introduce tu nueva contraseña"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <RemoveRedEyeIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Item>

                    <Item>
                      <TextField
                        className={`${typo.custom_input}`}
                        placeholder="Repite tu nueva contraseña"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <RemoveRedEyeIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Item>

                    <Item>
                      <Button
                        className={`${typo.custom_btn}`}
                        variant="contained"
                      >
                        Guardar NUEVA contraseña
                      </Button>
                    </Item>
                    <Item>
                      <div
                        className="form_inner_anchor_two"
                        style={{ border: "0" }}
                      >
                        <Typography
                          component={"p"}
                          className={[typo.smallP, "text-center"]}
                        >
                          Al guardar, aceptas nuestras políticas, términos y
                          condiciones.
                        </Typography>
                      </div>
                    </Item>
                  </FormControl>
                </div>
              </Item>
            </Grid>          

          </Grid>

          <Grid container
            spacing={2}
            className={`${footer.custom_footer_bottom} ${conti.footerContainer} ${IniciarMain.IniciarStyling}`}>
            <Grid item xs={4}>
                <Item>
                  <div className="footer_left_image">
                    {dogtorLogo}
                  </div>
                </Item>
              </Grid>
            <Grid className="text_center_col" item xs={4}>
                <Item>
                  <Typography paragraph
                    className={[typo.smallP, "footer_center_text"]}>
                    © 2022 Dogtor Technologies, Inc.
                  </Typography>
                </Item>
              </Grid>
            <Grid className="text_right_col" item xs={4}>
                <Item>
                  <Typography paragraph
                    className={[typo.smallP, "footer_right_text"]}>
                    Política de privacidad | Términos de Uso
                  </Typography>
                </Item>
              </Grid>

            </Grid>

        </Box>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      test: true,
    }, // will be passed to the page component as props
  };
}
export default Iniciar;