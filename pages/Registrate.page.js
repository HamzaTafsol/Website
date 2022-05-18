import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CommonContainer } from "../Components/CommonContainer";
import Header from "../Components/Header";
import { Button, TextField, Typography } from "@mui/material";
import { typoMain } from "../Components/TypographyMain";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IniciarStyles } from "./IniciarStyles";
import Link from "next/link";
import RegistrateInner from "../Components/RegistrateInner";
import { PlusCircle, Volamos } from "../Components/Svgs";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import InputFormReuseable from "../Components/InputFormReuseable";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RegistrateStyle } from "./RegistrateStyle";
import CloseIcon from "@mui/icons-material/Close";
import CondicionesModal from "../Components/CondicionesModal";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import PasswordLock from '@mui/icons-material/HttpsOutlined';
import { fontWeight } from "@mui/system";
import { convertLength } from "@mui/material/styles/cssUtils";


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

const Registrate = () => {
  const badge = "/images/badge.png";

  const [phone, setPhone] = useState(null);
  const cycle = "/images/bicycle.svg";
  const bag = "/images/bag.svg";
  const marketone = "/images/market2.svg";

  const conti = CommonContainer();
  const typo = typoMain();
  const IniciarMain = RegistrateStyle();
  const [showPassword, setShowPassword] = React.useState(false);

  const [active, setActive] = useState(1);

  const data1 = [
    {
      img: bag,
      text: "Cliente",
      text1: "Todo lo que necesitas en un mismo sitio.",
    },
    {
      img: cycle,
      text: "Repartidor",
      text1:
        " Gestiona tus opciones de pagos datos fiscales, historial de servicios y mucho más.",
    },
    {
      img: marketone,
      text: "Negocio",
      text1:
        "   Gestiona tus negocios, opciones de pago, servicios y mucho más.",
    },
  ];
  const [openModal, setOpenModal] = React.useState(false);
  const [couponField, setCouponField] = React.useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {active == 1 && <Header />}

      <Box
        className={`${conti.headerContainer} ${IniciarMain.IniciarStyling}`}
        sx={{ flexGrow: 1 }}
        style={{ marginTop: "120px" }}
      >
        {active == 1 && (
          <>
            <div style={{ position: "relative" }}>
              <Typography
                component={"h1"}
                className={[typo.h1, "text-center"]}
                align="center"
              >
                Registrate
              </Typography>
              <div className="close_icon">
                <Link href="/HomePage">
                  <CloseIcon />
                </Link>
              </div>
            </div>
          </>
        )}

        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {active == 1 &&
            data1.map((item, i) => {
              return (
                <RegistrateInner
                  index={i}
                  setActive={setActive}
                  item={item}
                  typo={typo}
                  key={i}
                />
              );
            })}
        </Grid>
        {active == 2 && (
          <>
            <Grid className="modal_two" item>
              <div style={{ textAlign: "center" }}>
                {Volamos}
                <div style={{ position: "relative" }}>
                  <Typography
                    component={"h2"}
                    className={[typo.h2, "text-center"]}
                    align="center"
                  >
                    Registrate para pedir
                  </Typography>
                  <div className="close_icon">
                    <Link href="/HomePage">
                      <CloseIcon />
                    </Link>
                  </div>
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
              <Grid item sm={6} md={4} xs={12}>
                <Item>
                  <div className="login_form">
                    <FormControl>
                      <Item>
                        <InputFormReuseable placeholder={"Nombre y apellido"} pic={<AccountCircle />} />
                      </Item>
                      <Item>
                        <div style={{ display: "flex" }}>
                          <Grid
                            style={{ marginRight: 20 }}
                            item
                            sm={3}
                            md={3}
                            xs={3}
                          >
                            <PhoneInput
                              className="language_selectB"
                              style={{ height: "100%" }}
                              country={"us"}
                              value={phone}
                            //   onChange={phone => setPhone({ phone })}
                            />
                          </Grid>

                          <Grid item sm={9} md={9} xs={9}>
                            <InputFormReuseable placeholder={"Telefono"} icon={false} />
                          </Grid>
                        </div>
                      </Item>
                      <Item>
                        <InputFormReuseable placeholder={"Correo electrónico"} pic={<EmailIcon />} />
                      </Item>
                      <Item>
                        <InputFormReuseable
                        setShowPassword={setShowPassword}
                        showPassword={showPassword}
                         type={showPassword ? "text" :"password"}
                        placeholder={"Contraseña"} pic={<PasswordLock />} endIcon={true} />
                      </Item>
                      {
                        couponField && (
<>
                      <Item className="Voucher_field">
                        <InputFormReuseable placeholder={"Voucher"} pic={<PasswordLock />} />
                        <button style={{ cursor: "pointer" }}>
                        Apply
                      </button>
                      </Item>
                      {/* <button>
                        SS
                      </button> */}
</>
                        )
                      }

                      {
                        !couponField && 
                        <Item onClick={() =>
                          setCouponField(true)
                          
                        }>
                        {PlusCircle}{" "}
                        <span style={{ color: "#ABE236", cursor: "pointer"}}>
                          Añadir un código referencial
                        </span>
                      </Item>
                      }
                      <Item>
                        {" "}
                        <Button
                          onClick={() => {
                            setOpenModal(true);
                          }}
                          className={`${typo.custom_btn}`}
                          variant="contained"
                        >
                          Registrarme
                        </Button>
                      </Item>
                      <Item>
                        <span style={{ color: "#BBBBBB" }}>¿Ya tienes cuenta? <a href="#" style={{ textDecoration: "underline", fontWeight: "700", color: "#000" }}>Haz click aqui</a></span>
                      </Item>
                    </FormControl>
                  </div>
                </Item>
              </Grid>
            </Grid>

            <Grid container>
              <Grid>
                <Item>
                  <span style={{ color: "#BBBBBB" }}>
                    Al hacer clic en “Regístrate”, aceptas las condiciones de uso
                    de Dogtor y reconoces haber leído nuestros T&C. Tambien
                    aceptas llamadas o mensajes SMS.
                  </span>
                </Item>
              </Grid>
            </Grid>
          </>
        )}
      </Box>

      {openModal && (
        <CondicionesModal open={openModal} handleClose={handleCloseModal} />
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

export default Registrate;
