import React from "react";
import { makeStyles } from "@mui/styles";
export const RegistrateStyle = makeStyles({
  IniciarStyling: {
    // display:"none",
    "& h1": {
      fontFamily: "axiforma-bold",
      marginBottom: "50px",
      fontSize: "44px",
      "@media (max-width:768px)": {
        fontSize: "22px",
        minWidth: "86vw",
        fontFamily: "axiforma-bold",
      },
    },
    "& h2": {
      fontFamily: "'axiforma-reg'",
      fontSize: "35px"
    },
    "& .modal_two h2": {
      // fontFamily: "'axiforma-bold'" 
      fontFamily: "'axiforma-heavy'",
    },
    "& .close_icon": { 
      position: "absolute", 
      top: "20%", 
      right: "15%",
      cursor: "pointer"
     },
    "& .client" : {
      marginTop: "12px",
  },
    "& .madrid": {
      color: "#ABE236",
      fontFamily: "axiforma-bold",
      paddingBottom: "0px",
      lineHeigh: "1",
      textDecoration: "underline",
      marginRight: "14px",
    },
    "& .bottom_line": {
      borderBottom: "2px solid",
      textAlign: "end",
      paddingBottom: "10px",
      marginTop: "-30px",
    },
    "& .react-tel-input.language_selectB input.form-control": {
        width: "100%",
        height: "100%"
      },
      "& .login_form" :{
textAlign:"center"
      },
      "& .card_image": { paddingBottom: "25px" },
      "& .login_form button": { fontFamily: "'axiforma-semi-bold'" },
      "& .login_form .Voucher_field": { display: "flex" },
      "& .login_form .Voucher_field button": {
        width: "30%",
        borderRadius: "none",
        backgroundColor: "#abe236",
        color: "black",
        fontFamily: '"axiforma-semi-bold"',
        border: "0"
      },
      "& .login_form .Voucher_field .MuiOutlinedInput-root": { borderRadius: "0" }
  },

});