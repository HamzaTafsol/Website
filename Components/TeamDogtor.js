import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import DogtorCard from "./DogtorCard";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
import { teamDogtorStyles } from "./TeamDogtorStyles";
import Carousel from "react-elastic-carousel";

const WallClock = "/images/wall-clock-mockup.svg";
const DogtarWithMobile = "/images/dogter-with-mobile.svg";
const DeliveryBoy = "/images/delivery-boy.svg";

function TeamDogtor() {
  const Styles = teamDogtorStyles();
  const conti = CommonContainer();
  const typo = typoMain();
  const isMobile = useMediaQuery("@media (max-width:768px)");
  const isMobile480 = useMediaQuery("@media (max-width:480px)");

  const dogtorCards = [
    {
      image: DeliveryBoy,
      title: "Repartidores",
      tagline: "Solo las horas que quieras",
      description:
        "Se tu propio jefe, con horarios flexible e ingresos competitivos. Regístrate y colabora con Dogtor.",
      buttonText: "Empieza a repartir",
    },
    {
      image: DogtarWithMobile,
      title: "Negocios",
      tagline: "Conoce a tus nuevos clientes",
      description:
        "Impulsa tu negocio convirtiéndote en Partner Dogtor, aprovechando las herramientas, y tecnologías que lleva a todo una ciudad a tu negocio.",
      buttonText: "Regístra tu negocio",
    },
    {
      image: WallClock,
      title: "¡Unete al equipo!",
      tagline: "Retos para igualar tu talento",
      description:
        "¿Buscas un nuevo reto escalable? Si tienes ambición, propósitos, eres apasionado por lo que haces y te gusta trabajar en equipo, ¡queremos conocerte!",
      buttonText: "Unete al equipo",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 780, itemsToShow: 1, itemsToScroll: 1 },
  ];

  return (
    <section className={Styles?.section}>
      <Grid container className={conti.headerContainer}>
        <Grid item md={12}
          style={{textAlign: isMobile480 && "center",
          width: isMobile480 && "100%"
        }}
        
        >
          <h2 className={typo.h2}
          
          >Equipo Dogtor</h2>
        </Grid>
        {isMobile ? (
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[
              { md: 25, xs: 0 },
              { md: 25, xs: 0 },
            ]}
          >
            {dogtorCards.map((item, index) => {
              return (
                <Grid item key={item?.title} lg={4} md={4} sm={12} xs={12}>
                  <DogtorCard data={item} />
                </Grid>
              );
            })}
          </Carousel>
        ) : (
          <Grid
            container
            columnSpacing={{ lg: 10, md: 5 }}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {dogtorCards.map((item, index) => {
              return (
                <Grid item key={item?.title} lg={4} md={4} sm={12} xs={12}>
                  <DogtorCard data={item} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    </section>
  );
}

export default TeamDogtor;
