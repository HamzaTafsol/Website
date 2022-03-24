import React from "react";
import { makeStyles } from "@mui/styles";
export const typoMain = makeStyles({
  h1: {
    fontSize: "50px",
    color: "#000225",
    "@media (max-width:768px)": {
      fontSize: "35px",
    },
    "@media (max-width:600px)": {
      fontSize: "23px",
    },
  },
  h2: {
    fontSize: "40px",
    color: "#000225",
    "@media (max-width:768px)": {
      fontSize: "30px",
    },
    "@media (max-width:600px)": {
      fontSize: "20px",
    },
  },
  container: {
    width: "1320px",
    margin: "auto",
  },
});
