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
  midContainer: {
    width: "80%",
    margin: "auto",
  },
});
