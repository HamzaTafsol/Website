import { ClassSharp } from "@mui/icons-material";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineLike, AiOutlineClockCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { ImClock } from "react-icons/im";
import { bestresturantsStyle } from "./BestResturantsStyle";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
import Carousel from "react-elastic-carousel";
const clockIcon = "/images/clock-icon.png";
const likeIcon = "/images/like-icon.png";

function BestResturantCard({ image, buttonText }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`best-resturant-card-2 ${isHover && "hover-color-2"}`}
      onMouseOver={() => {
        setIsHover(true);
        return;
      }}
      onMouseLeave={() => {
        setIsHover(false);
        return;
      }}
    >
      <img alt="" src={image} className="card-img" />
      <button className="best-resturant-card-2-text">{buttonText}</button>

      <Box
        className={`${
          isHover ? "hover-color-1" : "d-none"
        } best-resturant-card-2-hover-text-box`}
      >
        <Box display={"flex"} alignItems="center">
          <img src={likeIcon} className="like" />
          <span className="percentage">95%</span>
          <span className="views">(500+)</span>
        </Box>
        <Box display={"flex"} alignItems="center">
          <span className="time-duration">20-30 Min</span>
          <img src={clockIcon} className="clock" />
        </Box>
      </Box>
    </div>
  );
}

function BestResturants({ data }) {
  const conti = CommonContainer();
  const typo = typoMain();

  const [isHover, setIsHover] = useState(false);
  const items = data.items.slice(1);
  const classes = bestresturantsStyle();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  }));
  const Item1 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    boxShadow: "none",
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  }));
  console.log(typo);

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.bestResturantsSection}>
      <Grid container spacing={2} className={conti.headerContainer}>
        <Grid lg={12} md={12} sm={12}>
          <Typography component={"h1"} className={typo?.h1}>
            {data?.title}
          </Typography>
        </Grid>
        <Grid md={4} lg={4} sm={12} xs={12}>
          <Item1>
            <div
              className={` best-resturant-card-1 ${isHover && "hover-color-2"}`}
              onMouseOver={() => {
                setIsHover(true);
                return;
              }}
              onMouseLeave={() => {
                setIsHover(false);
                return;
              }}
            >
              <img alt="" src={data?.items[0].image} className="card-img" />
              <button className="best-resturant-card-1-text">
                {data?.items[0].title}
              </button>
              <Box
                className={`${
                  isHover ? "hover-color-1" : "d-none"
                } best-resturant-card-1-hover-text-box`}
              >
                <Box display={"flex"} alignItems="center">
                  <img src={likeIcon} className="like" />
                  <span className="percentage">95%</span>
                  <span className="views">(500+)</span>
                </Box>
                <Box display={"flex"} alignItems="center">
                  <span className="time-duration">20-30 Min</span>
                  <img src={clockIcon} className="clock" />
                </Box>
              </Box>
            </div>
          </Item1>
        </Grid>

        <Grid md={8} lg={8} sm={12} xs={12} className={"innerText"}>
          <Item className={classes.wrapper_b}>
            {items?.map((item, i) => {
              return (
                <Grid key={i} md={6} lg={6} sm={12} xs={12}>
                  <Item>
                    <BestResturantCard
                      image={item?.image}
                      buttonText={item?.title}
                    />
                  </Item>
                </Grid>
              );
            })}
          </Item>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
}

function BestResturantsOnMobile({ data }) {
  const items = data.items;
  console.log("items", items);
  const classes = bestresturantsStyle();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  ];

  return (
    <Carousel
      className={classes.bestResturantsSection}
      breakPoints={breakPoints}
      itemPadding={[0, 10]}
    >
      {items?.map((item) => {
        return (
          <BestResturantCard image={item?.image} buttonText={item?.title} />
        );
      })}
    </Carousel>
  );
}

function DecideSection({ data }) {
  const isMobile = useMediaQuery("@media (max-width:768px)");

  return (
    <>
      {isMobile ? (
        <BestResturantsOnMobile data={data} />
      ) : (
        <BestResturants data={data} />
      )}
    </>
  );
}

export default DecideSection;
