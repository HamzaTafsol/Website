import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { useWindowSize } from "./useWindowSize";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { MostPopularInYourCityStyle } from "./MostPopularInYourCityStyle";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
const PopularIn1 = "/images/popular-in-1.svg";
const PopularIn2 = "/images/popular-in-2.svg";
const PopularIn3 = "/images/popular-in-3.svg";
const PopularIn4 = "/images/popular-in-4.svg";
const PopularIn5 = "/images/popular-in-5.svg";
const PopularIn6 = "/images/popular-in-6.svg";
const PopularIn7 = "/images/popular-in-7.svg";
const PopularIn8 = "/images/popular-in-8.svg";
const PopularIn9 = "/images/popular-in-9.svg";
const Mercadona = "/images/mercadona.svg";
const MissSushi = "/images/miss-sushi.svg";
const BurgerKing = "/images/burger-king.svg";
const Bershka = "/images/bershka.svg";
const Game = "/images/game.png";
// const Game = "/images/game.png";
const PapaJohns = "/images/papajones.svg";
const Goiko = "/images/goiko.png";
const Estanco = "/images/estanco.svg";
const Carrefour = "/images/carrefour.svg";
const clockIcon = "/images/clock-icon.png";
const likeIcon = "/images/like-icon.png";
const likeIconBlack = "/images/like-icon-black.svg";
const clockIconBlack = "/images/clock-icon-black.svg";

function MostPopularItemCard({ image, buttonText, title, icon }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="most-popular-card"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`most-popular-card-img-box ${
          isHover && "most-popular-card-hover"
        }`}
      >
        <img alt="" src={image} className="card-img" />
       
        <p className={`most-popular-hover-title ${!isHover && "d-none"}`}>
          {buttonText}
        </p>
      </div>
      {isHover ? (
        <Box
          component={"div"}
          alignItems="center"
          className={`${isHover ? "most-popular-card-text-hover" : "d-none"}`}
        >
          <Box alignItems="center" display="flex" component="div">
            <img src={likeIcon} className="icon-white" />
            <Typography component="span" className="percentage">
              95%
            </Typography>
            <Typography component="span" className="views">
              (500+)
            </Typography>
          </Box>
          <Box alignItems="center" display="flex" component="div">
            <Typography component="span" className="time-duration">
              20-30 Min
            </Typography>
            <Typography component="span">
              <img src={clockIcon} className="icon-white" />
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography component="p" className="most-popular-card-title bold-b">
          {title}
        </Typography>
      )}
    </div>
  );
}

function MostPopularItemCardOnMobile({ image, buttonText, title, icon }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div
        className="most-popular-card-on-mobile"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`most-popular-card-img-box most-popular-card-hover
            }`}
        >
          <img alt="" src={image} className="card-img" />
          <div className={`most-popular-center-text`}>
          <div className={`most-popular-hover-icon ${!isHover && "d-none"}`}>
          <img alt="" src={icon} className="" style={{width:"62px",height:"80px",border: "3px solid #abe236", borderRadius: "50px"}}/>
        </div>
            <Typography component="span"
            style={{whiteSpace:"pre"}}
            >{title}</Typography>
          </div>
        </div>
      </div>

      {/* CARD TEXT */}
      <Box
        component={"div"}
        alignItems="center"
        className={`${"most-popular-card-text-on-mobile"}`}
      >
        <Box alignItems="center" display="flex" component="div">
          <img
            src={likeIconBlack}
            className="icon-white"
            style={{ width: "19px", height: "21px" }}
          />
          <Typography component="span" className="percentage">
            95%
          </Typography>
          <Typography component="span" className="views">
            (500+)
          </Typography>
        </Box>
        <Typography
          component="span"
          className="time-duration"
          style={{ marginLeft: "-40px" }}
        >
          20-30 Min
        </Typography>
        <Box alignItems="center" display="flex" component="div">
          <Typography component="span">
            <img src={clockIconBlack} className="icon-white" />
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

function MostPopularInYourCity() {
  const conti = CommonContainer();
  const typo = typoMain();
  const isMobile = useMediaQuery("@media (max-width:768px)");

  const size = useWindowSize();
  const [width, setWidth] = useState(size?.width ? size?.width : 1024);
  const totalData = [
    { image: PopularIn1, title: "GOIKO GRILL", icon: Goiko },
    { image: PopularIn2, title: "MERCADONA", icon: Mercadona },
    { image: PopularIn3, title: "BERSHKA", icon: Bershka },
    { image: PopularIn4, title: "GAME", icon: Game },
    { image: PopularIn5, title: "ESTANCO", icon: Estanco },
    { image: PopularIn6, title: "PAPA JOHN’S", icon: PapaJohns },
    { image: PopularIn7, title: "CARREFOUR", icon: Carrefour },
    { image: PopularIn8, title: "BURGUER KING", icon: BurgerKing },
    { image: PopularIn9, title: "MiSS SUSHI", icon: MissSushi },
  ];
  const [data, setData] = useState(
    width > 480 ? totalData : totalData.slice(0, 3)
  );

  const addData = [
    { image: PopularIn1, title: "GOIKO GRILL", icon: Goiko },
    { image: PopularIn2, title: "MERCADONA", icon: Mercadona },
    { image: PopularIn3, title: "BERSHKA", icon: Bershka },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const classes = MostPopularInYourCityStyle();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.mostPopularSection}>
      <Grid container spacing={2} className={conti.headerContainer}>
        <Grid item lg={12} md={12} sm={12}>
          <Typography className={typo.h1} component="h1">
            Lo más demandado de tu ciudad
          </Typography>
          <Typography component="p" className="most-popular-section-tagline">
            Todas las tiendas en demanda, entregado en menos de 30 minutos.
          </Typography>
        </Grid>

        {data?.map((item, i) => {
          return (
            <Grid key={i} lg={4} md={6} sm={6} xs={12}>
              <Item>
                {isMobile ? (
                  <MostPopularItemCardOnMobile
                    image={item?.image}
                    buttonText={item?.title}
                    title={item?.title}
                    icon={item?.icon}
                  />
                ) : (
                  <MostPopularItemCard
                    image={item?.image}
                    buttonText={item?.title}
                    title={item?.title}
                    icon={item?.icon}
                  />
                )}
              </Item>
            </Grid>
          );
        })}
        <Box display="flex" justifyContent="center" minWidth={"100%"}>
          <div
            onClick={() => {
              let newData = [...data];
              setData([...newData, ...addData]);
            }}
            className="add-more-btn-box"
          >
            <Typography component="span" className="add-icon">
              <MdAdd size={20} className="text-white" />
            </Typography>
          </div>
        </Box>
      </Grid>
    </Box>
  );
}

export default MostPopularInYourCity;
