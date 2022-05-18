import React from "react";
import { makeStyles } from "@mui/styles";
export const IniciarSessionStyle = makeStyles({
  IniciarSessionStyle: {
    // display:"none",
    "& h1": {
      fontFamily: "axiforma-bold",
      marginBottom: "50px",
      "@media (max-width:768px)": {
        fontSize: "22px",
        minWidth: "86vw",
        fontFamily: "axiforma-bold",
      },
    },
    "& .madrid": {
      color: "#ABE236",
      fontFamily: "axiforma-bold",
      paddingBottom: "0px",
      lineHeigh: "1",
      textDecoration: "underline",
      marginRight: "14px",
    },
    "& .iniciar_heading": {
      color: "#000929",
      fontFamily: "axiforma-bold",
    },
    "& .iniciar_para p": {
      color: "#000929",
      fontFamily: "axiforma-reg",
      fontSize: "20px",
      margin: "0",
    },
    "& .iniciar_form ": {
      width: "81%",
    },
    "& .iniciar_form input::placeholder ": {
      color: "#BBBBBB",
      fontSize: "18px",
    },
    "& .iniciar_form .MuiOutlinedInput-root ": {
      borderRadius: "30px",
      background: "#F2F2F2 0% 0% no-repeat padding-box",
      padding: "0px 20px",
    },
    "& .iniciar_form fieldset": {
      border: "0",
    },
    "& .sign_in span svg": {
      fontSize: "35px !important",
    },
  },
});

