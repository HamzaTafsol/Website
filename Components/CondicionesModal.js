import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, useMediaQuery } from "@mui/material";
import allCountries from "../Components/AllLanguages";
import { LanguagesStyle } from "./LanguagesStyle";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import FormControl from "@mui/material/FormControl";
import { typoMain } from "../Components/TypographyMain";
import { ShieldLogo, ShieldLogoWithDogtor } from "./Svgs";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import { CondicionesModalStyles } from "./CondicionesModalStyles";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MailIcon from '@mui/icons-material/EmailOutlined';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",

  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));
const CondicionesModal = ({ open, handleClose }) => {
  const styles = CondicionesModalStyles();
  const classes = LanguagesStyle();
  const typo = typoMain();

  const [active, setActive] = React.useState(1);

  const isMobile = useMediaQuery("@media (max-width:900px)");
  console.log(isMobile);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isMobile && active == 3 ? "35%" : !isMobile ? "60%" : "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: !isMobile ? 5 : 0,
    p: !isMobile ? 4 : 0,
    // overflowY: "scroll",
    height: !isMobile && active == 3 ? "50%" : !isMobile ? "70%" : "100%",
  };

  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
        (pt.x - mp.x)(pt?.x - mp.x) + (pt.y - mp.y)(pt.y - mp.y)
      );
    }
  };

  const map = "/images/map.png";

  const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
  ];

  return (
    <section>
      <Modal
        className={styles.section}
        open={open}
        hideBackdrop={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {active == 1 && (
            <Box sx={style} className={[classes.ModalMain, "CondicionesModal_main"]}>
              <Grid container spacing={2} style={{ justifyContent: "center" }}>
                <Grid item xs={12}>
                  <Item style={{ textAlign: "right" }}>
                    <CloseIcon onClick={() => handleClose()} />
                  </Item>

                  <Item className="modal_head" style={{ textAlign: "center" }}>
                    <Typography
                      component={"h2"}
                      className={[typo.h2, "text-center", "modalMain_heading"]}
                      align="center"
                    >
                      Condiciones de uso y privacidad
                    </Typography>

                    {ShieldLogoWithDogtor}
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item className="modal_body" style={{ textAlign: "center" }}>
                    <p>
                      Usamos los datos de clientes para mejorar la experiencia del usuario y mostrar promociones relevantes.
                    </p>

                    <p>
                      Para continuar, acepta las condiciones de uso, la política de protección de datos y la política de cookies.
                    </p>
                  </Item>
                  <Item style={{ textAlign: "center" }}>
                    <Button
                      className={`${typo.custom_btn}`}
                      onClick={() => setActive(2)}
                      variant="contained"
                    >
                      Aceptar y continuar
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          )}
          {active == 2 && (
            <Box sx={style} className={[classes.ModalMain, "AnadeModal_main"]}>
              <Grid container spacing={2} style={{ justifyContent: "center" }}>
                <Grid item xs={12}>
                  <Item style={{ textAlign: "right" }}>
                    <CloseIcon onClick={() => handleClose()} />
                  </Item>

                  <Item className="modal_head" style={{ textAlign: "center" }}>
                    <Typography
                      component={"h2"}
                      className={[typo.h2, "text-center", "modalMain_heading"]}
                      align="center"
                    >
                      Añade tu dirección de entrega
                    </Typography>
                  </Item>
                </Grid>
                <Grid item md={6}>
                  <Item className="modal_body" style={{ textAlign: "center" }}>
                    <FormControl>
                      <Item>
                        <EmojiFlagsIcon
                          sx={{ color: "#BBBBBB", mr: 2, my: 2 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Dirección de entrega"
                          variant="standard"
                        />
                      </Item>

                      <Item>
                        <HomeOutlinedIcon sx={{ color: "#BBBBBB", mr: 2, my: 2 }} />
                        <TextField
                          id="input-with-sx"
                          label="Otros datos"
                          variant="standard"
                        />
                      </Item>
                      <Item>
                        <HomeIcon sx={{ color: "#BBBBBB", mr: 2, my: 2 }} />
                        <TextField
                          id="input-with-sx"
                          label="2-3 primer piso, 3* casa a la izquierda"
                          variant="standard"
                        />
                      </Item>
                    </FormControl>
                  </Item>
                  <Item style={{ textAlign: "center" }}></Item>
                </Grid>
                <Grid item md={6}>
                  <Item className="modal_body map_col" style={{ textAlign: "center" }}>
                    {/* <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
                      }}
                      defaultCenter={""}
                      defaultZoom={12}
                    ></GoogleMapReact> */}

                    <img className="map_image" src={map}/>

                  </Item>
                </Grid>
                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Button
                    className={`${typo.custom_btn}`}
                    onClick={() => setActive(3)}
                    variant="contained"
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          {active == 3 && (
            <Box sx={style} className={[classes.ModalMain, "TusDatosModal_main"]}>
              <Grid container spacing={2} style={{ justifyContent: "center" }}>
                <Grid item xs={12}>
                  <Item style={{ textAlign: "right" }}>
                    <CloseIcon onClick={() => handleClose()} />
                  </Item>

                  <Item className="modal_head" style={{ textAlign: "center" }}>
                    <Typography
                      component={"h2"}
                      className={[typo.h2, "text-center", "modalMain_heading"]}
                      align="center"
                    >
                      Tus datos
                    </Typography>
                  </Item>
                </Grid>
                <Grid item md={12}>
                  <Item
                    className="modal_body modal_three"
                    style={{ textAlign: "center", marginTop: "0" }}
                  >
                    <FormControl>
                      <Item className="textField_one">
                        <AccountCircle
                          sx={{ color: "#8EE304", mr: 2, my: 1 }}
                        />
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          className="label_one"
                        >
                          Nombre
                        </InputLabel>
                        <TextField
                          id="input-with-sx"
                          variant="standard"
                          placeholder="Introduce tu nombre"
                        />
                      </Item>

                      <Item className="textField_two">
                        <MailIcon sx={{ color: "#8EE304", mr: 2, my: 1 }} />
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          className="label_two"
                        >
                          E-mail
                        </InputLabel>
                        <TextField
                          id="input-with-sx"
                          placeholder="dogtorapp@aol.com"
                          variant="standard"
                        />
                      </Item>
                    </FormControl>
                  </Item>
                  <Item style={{ textAlign: "center" }}></Item>
                </Grid>

                <Grid item md={12} style={{ textAlign: "center" }}>
                  <Button
                    className={`${typo.custom_btn} ${styles.enviar_btn}`}
                    variant="contained"
                  >
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </>
      </Modal>
    </section>
  );
};

export default CondicionesModal;
