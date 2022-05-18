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
  h3: {
    fontSize: "30px",
    color: "#000225",
    "@media (max-width:768px)": {
      fontSize: "25px",
    },
    "@media (max-width:600px)": {
      fontSize: "20px",
    }
  },
  h4: {
    fontSize: "25px",
    color: "#000225",
    "@media (max-width:768px)": {
      fontSize: "20px",
    },
    "@media (max-width:600px)": {
      fontSize: "15px",
    }
  },
  p: {
    fontSize: "15px",
    color: "#000929",
    "@media (max-width:768px)": {
      fontSize: "15px",
    },
    "@media (max-width:600px)": {
      fontSize: "12px",
    },
  },
  smallP: {
    fontSize: "13px",
    color: "#000929",
    "@media (max-width:768px)": {
      fontSize: "13px",
    },
    "@media (max-width:600px)": {
      fontSize: "12px",
    },
  },
  container: {
    width: "1320px",
    margin: "auto",
  },
  sign_in_btn: {
    justifyContent: "space-between",
    background: "#000929 0% 0% no-repeat padding-box",
    boxShadow: "10px 10px 12px #00000029",
    borderRadius: "50px",
    padding: "15px 20px",
    marginTop: "30px",
    fontSize: "20px",
    "& svg":{
      fontSize: "35px !important",
    },
  },
  form_anchor_main:{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  form_inner_anchor: {
    "& span" : {
      color: "#000929",
    fontSize: "15px",
    fontFamily: '"axiforma-reg"'
    },
    "& a":{
      fontFamily: "'axiforma-bold'",
      color: "#000929",
      marginLeft: "5px"
    }
  },
  custom_btn: {
    backgroundColor: "#ABE236",
    boxShadow: "unset",
    color: "#000000",
    fontFamily: "'axiforma-reg'",
    padding: "15px 0",
    borderRadius: "50px",
    width: "315px",
    fontFamily: "'axiforma-bold'",
    "&:hover": {
      backgroundColor: "#ABE236",
    },
  },
  
  custom_input : {
    width: "100%" 
  },
 
});
