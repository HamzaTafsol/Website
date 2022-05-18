import React from "react";
import { makeStyles } from "@mui/styles";
export const CommonContainer = makeStyles({
  headerContainer: {
    width: "1141px",
    margin: "auto",
    "@media (max-width:1025px)": {
      width: "90%",
    },
    
  },
  headerContainer1: {
    width: "1141px",
    margin: "auto",
    "@media (max-width:1025px)": {
      width: "100%",
    },
  },
  footerContainer: {
    width:"93%",
    margin: "auto"

  },
  landingContainer:{
    width:"100%",
    margin: "auto",
    
    "@media (max-width:1920px)": {
      height:"100vh"
  },
    "@media (max-width:1600px)": {
      height:"unset"
  },
},
  midContainer: {
    width: "80%",
    margin: "auto",
  },
  smallContainer: {
    width: "40%",
    margin: "100px auto",
  },
  verySmallContainer: {
    width: "23%",
    margin: "100px auto",
  },
});
