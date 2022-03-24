import React, { useState, Component } from "react";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BsQuestionCircleFill, BsYoutube } from "react-icons/bs";

import { MdOutlineLanguage } from "react-icons/md";
import { AiFillQuestionCircle, AiFillLinkedin } from "react-icons/ai";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
import { footerStyles } from "./FooterStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GooglePlay = "/images/google-play.svg";
const AppStore = "/images/app-store.svg";
const logo = "/images/Logo.svg";

function DesktopFooter() {
  const conti = CommonContainer();
  const typo = typoMain();
  const footerStyle = footerStyles();

  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: "#000225", paddingTop: "3%" }}
      component={"div"}
      className={footerStyle.footerSection}
      alignItems="center"
    >
      <Grid container spacing={2} className={conti.headerContainer}>
        {/* Col 1 */}
        <Grid item lg={3} md={3}>
          <div className="footer-logo">
            <img src={logo} />
          </div>
          <ul className="footer-links">
            <li className="a-center">
              <BsQuestionCircleFill
                size={20.13}
                className="icon-white-and-bold"
              />
              <span className="icon-text">Ubicación</span>
            </li>
            <li className="a-center">
              <MdOutlineLanguage className="icon-white-and-bold" size={20.13} />
              <span className="icon-text">Español (España)</span>
            </li>
            <li className="a-center">
              <AiFillQuestionCircle
                className="icon-white-and-bold"
                size={20.13}
              />
              <span className="icon-text">Centro de ayuda</span>
            </li>
            <li className="footer-btns-box">
              <button className="footer-btn">Hazte Dogter</button>
            </li>
            <li className="footer-btns-box">
              <button className="footer-btn">Hazte Socio</button>
            </li>
          </ul>
        </Grid>
        {/* Col 2 */}
        <Grid item lg={3} md={3} className="flex-end">
          <div>
            <h6>Conócenos</h6>
            <ul className="footer-links mar_b">
              <li>Empresa</li>
              <li>Únete al equipo</li>
              <li>Privacidad</li>
              <li>Legal</li>
              <li>Seguridad</li>
              <li>Accesibilidad</li>
              <li>Datos Personales</li>
              <li>Establecimientos</li>
            </ul>
          </div>
        </Grid>
        {/* Col 3 */}
        <Grid item lg={3} md={3} className="flex-end">
          <div>
            <h6>Productos</h6>
            <ul className="footer-links mar_b">
              {/* <li>Empresa</li> */}
              <li>Restaurantes</li>
              <li>Tiendas</li>
              <li>Market</li>
              <li>Mascotas</li>
              <li>Farmacia</li>
              <li>Lo que sea</li>
              <li>Dogtor Pay</li>
            </ul>
          </div>
        </Grid>
        {/* Col 4 */}
        <Grid item lg={3} md={3} className="flex-end">
          <div>
            <h6>Dogtor</h6>
            <ul className="footer-links mar_b">
              <li>Cittify</li>
              <li>Dogtor Smile</li>
              <li>Dogtor Care</li>
              <li>Life at Dogtor</li>
              <li>Concepts</li>
              <li>Dogtor Design</li>
              <li>Ambassadors</li>
              <li>Level 3</li>
            </ul>
          </div>
        </Grid>
        {/* Col 5 */}
        <Grid item lg={12} sm={12}>
          <Box
            className="footer-border cus_color0"
            alignItems={"center"}
            display="flex"
            justifyContent={"space-between"}
          >
            <p>Modo</p>
            <p>Descarga nuestra app</p>
            <p>Siguenos</p>
          </Box>
        </Grid>
        {/* Col 8 */}
        <Grid item lg={3} sm={12}>
          <Box
            alignItems={"center"}
            display="flex"
            justifyContent={"space-between"}
            className="cus_color cus_width_footer"
          >
            <p>Repartidores</p>
            <p>Negocios</p>
            <p>4Business</p>
          </Box>
        </Grid>
        {/* Col 9 */}
        <Grid item lg={6} sm={12}>
          <Box display={"flex"} justifyContent="center" alignItems="center">
            <Box display={"flex"} justifyContent="center">
              <img alt="" src={GooglePlay} className="platform-icon" />
              <img alt="" src={AppStore} className="platform-icon" />
            </Box>
          </Box>
        </Grid>
        {/* Col 10 */}
        <Grid item lg={3} sm={12}>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com/dogtorapp" target="_blank">
                <FaFacebookF size={20} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dogtor_es" target="_blank">
                <GrTwitter size={19} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/dogtorapp" target="_blank">
                <BsYoutube size={22} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/dogtor" target="_blank">
                <AiFillLinkedin size={22} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/dogtorapp" target="_blank">
                <FaInstagramSquare size={22} className="text-white" />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={12} md={12}>
          <Typography component={"p"} align="center" className="copy-rights">
            &copy;2022 Dogtor Technology INC
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function MobileFooter() {
  const conti = CommonContainer();
  const typo = typoMain();
  const footerStyle = footerStyles();

  return (
    <div
      style={{
        backgroundColor: "#000225",
        padding: "0px",
        paddingTop: "3%",
        margin: "0px",
      }}
      // component={"div"}
      className={footerStyle.mobileFooter}
      // alignItems="center"
    >
      <Grid container spacing={2} className={conti.headerContainer}>
        {/* Col 1 */}
        <Grid item lg={3} xs={12}>
          <div className="footer-logo">
            <img src={logo} />
          </div>
        </Grid>
        <Grid item lg={3} xs={12}>
          <ul className="footer-links">
            <li>
              <BsQuestionCircleFill
                size={20.13}
                className="icon-white-and-bold"
              />
              <span className="icon-text">Ubicación</span>
            </li>
            <li>
              <MdOutlineLanguage className="icon-white-and-bold" size={20.13} />
              <span className="icon-text">Español (España)</span>
            </li>
            <li>
              <AiFillQuestionCircle
                className="icon-white-and-bold"
                size={20.13}
              />
              <span className="icon-text">Centro de ayuda</span>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <div className="footer-btns-box ">
            <button className="footer-btn">Hazte Dogter</button>
            <button className="footer-btn">Hazte Socio</button>
          </div>
        </Grid>
        {/* Col 2 */}
        <Grid item lg={3} xs={12} className="border-top">
          <Accordion className="border-bottom ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Conócenos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="p">Empresa</Typography>
              <Typography component="p">Únete al equipo</Typography>
              <Typography component="p">Privacidad</Typography>
              <Typography component="p">Legal</Typography>
              <Typography component="p">Seguridad</Typography>
              <Typography component="p">Accesibilidad</Typography>
              <Typography component="p">Datos Personales</Typography>
              <Typography component="p">Establecimientos</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* Col 3 */}
        <Grid item lg={3} xs={12}>
          <Accordion className="border-bottom">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Productos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="p">Empresa</Typography>
              <Typography component="p">Restaurantes</Typography>
              <Typography component="p">Tiendas</Typography>
              <Typography component="p">Market</Typography>
              <Typography component="p">Mascotas</Typography>
              <Typography component="p">Farmacia</Typography>
              <Typography component="p">Lo que sea</Typography>
              <Typography component="p">Dogtor Pay</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* Col 4 */}
        <Grid item lg={3} xs={12}>
          <Accordion className="border-bottom">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Dogtor</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography component="p">Descarga nuestra app</Typography>
              <Typography component="p">Siguenos</Typography>
              <Typography component="p">Cittify</Typography>
              <Typography component="p">Dogtor Smile</Typography>
              <Typography component="p">Dogtor Care</Typography>
              <Typography component="p">Life at Dogtor</Typography>
              <Typography component="p">Concepts</Typography>
              <Typography component="p">Dogtor Design</Typography>
              <Typography component="p">Ambassadors</Typography>
              <Typography component="p">Level 3</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* Col 5 */}
        <Grid item lg={12} xs={12}>
          <Accordion className="border-bottom">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Modo</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Typography component="p">Repartidores</Typography>
              <Typography component="p">Negocios</Typography>
              <Typography component="p">4Business</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item lg={4} xs={12}>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com/dogtorapp" target="_blank">
                <FaFacebookF size={20} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dogtor_es" target="_blank">
                <GrTwitter size={19} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/dogtorapp" target="_blank">
                <BsYoutube size={22} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/dogtor" target="_blank">
                <AiFillLinkedin size={22} className="text-white" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/dogtorapp" target="_blank">
                <FaInstagramSquare size={22} className="text-white" />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box display={"flex"} justifyContent="center" alignItems="center">
            <img alt="" src={GooglePlay} className="platform-icon" />
            <img alt="" src={AppStore} className="platform-icon" />
          </Box>
        </Grid>

        <Grid item lg={12}>
          <p className="copy-rights">&copy;2022 Dogtor Technology INC</p>
        </Grid>
      </Grid>
    </div>
  );
}

function DecideFooter() {
  const isMobile = useMediaQuery("@media (max-width:768px)");
  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
}

export default DecideFooter;
