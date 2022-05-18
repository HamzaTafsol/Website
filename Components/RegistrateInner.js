import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CommonContainer } from "../Components/CommonContainer";
import Header from "../Components/Header";
import { Typography } from "@mui/material";
import { typoMain } from "../Components/TypographyMain";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RegistrateInner = ({ item, typo, setActive,index }) => {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",

    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid
      className={index != 1 &&"client"} style={{cursor: "pointer",}}
      onClick={() => setActive(2)} item sm={6} md={4} xs={12}>
        <Item>
          <div className="card_image">
            <img src={item.img} alt="" />
          </div>
          <div>
            <Typography
              component={"h2"}
              className={[typo.h2, "text-left"]}
              align="left"
            >
              {item?.text}
            </Typography>
          </div>
          <div className="bottom_line">
            <ArrowForwardIcon />
          </div>
          <div>
            <p>{item?.text1}</p>
          </div>
        </Item>
      </Grid>
    </>
  );
};

export default RegistrateInner;
