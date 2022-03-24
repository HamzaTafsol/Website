import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
import { riderSafetyStyles } from "./RiderSafetyStyles";

const Falso = "/images/falso.svg";

function RiderSafety() {
  const conti = CommonContainer();
  const typo = typoMain();
  const Styles = riderSafetyStyles();
  const isMobile = useMediaQuery("@media (max-width:768px)");

  return (
    <section className={Styles.section}>
      <Grid container className={conti.headerContainer}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="rider-safety-left">
            <h2 className={typo.h2}
            
            style={{textAlign: isMobile && "center",}}
            >Nuestro pacto con tu seguridad</h2>
            {!isMobile && (
              <>
                <p>
                  Concada función de seguridad que añadimos y cada estándar de
                  las directrices de la comunidad que mantenemos, nos
                  comprometemos a crear un entorno seguro para nuestros
                  usuarios. Consulta más información sobre las directrices de la
                  comunidad
                </p>
                <a>Ver todas las funciones de seguridad</a>
              </>
            )}
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="rider-safety-right">
            <img alt="" src={Falso} className="rider-safety-img" />
            <a className="link">Ver todas las funciones de seguridad</a>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

export default RiderSafety;
