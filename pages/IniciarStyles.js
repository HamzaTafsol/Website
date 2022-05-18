import React from "react";
import { makeStyles } from "@mui/styles";
export const IniciarStyles = makeStyles({
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
    },
    "& .client": {
      marginTop: "12px",
    },
    "& .modal_one h2": {
      // fontFamily: "'axiforma-bold'" 
      fontFamily: "'axiforma-heavy'",
    },
    "& .close_icon": {
      position: "absolute",
      top: "20%",
      right: "15%",
      cursor: "pointer"
    },
    "& .modal_one .close_icon": {
      top: "10%"
    },
    "& .modal_one": { marginTop: "60px" },
    //  "& .custom_header_modal": { 
    //    position: "relative"
    //    },
    "& .form_anchor_main": {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "center",
      "& p": {
        cursor: "pointer",
        fontFamily: "'axiforma-bold'",
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
    "& .bottom_line": {
      borderBottom: "2px solid",
      textAlign: "end",
      paddingBottom: "10px",
      marginTop: "-30px",
    },

    " & .login_form fieldset": {
      borderColor: "#CBCBCB", borderRadius: "10px"
    },
    " & .login_form svg": {
      color: "#CBCBCB"
    },

    " & .form_inner_anchor_two": {
      paddingTop: "50px",
      borderTop: "3px solid #C6C6C6",
      marginTop: "30px"
    },
    "& .form_inner_anchor_two a": { fontFamily: "'axiforma-bold'" },
    " & .form_anchor_main a": {
      color: "#292525",
      fontFamily: "'axiforma-bold'",
      textDecoration: "underline",
      marginLeft: "5px"
    },
    " & .Mui-focused fieldset": {
      borderColor: "#CBCBCB !important"
    },
    " & .login_form>.MuiFormControl-root": {
      width: "30%"
    },
    "& .modal_two h2": {
      marginTop: "20px",
      fontSize: "35px",
    },
    "& .modal_two p": {
      fontFamily: "'axiforma-reg'",
      marginTop: "10px",
      marginBottom: "25px",
      fontSize: "12px",
    },
    "#__next & .login_form_one>.MuiFormControl-root": { width: "41%" },
    "& .login_form_one>.MuiFormControl-root .MuiOutlinedInput-root": {
      marginBottom: "25px"
    },
    "& .login_form_one>.MuiFormControl-root .MuiOutlinedInput-root input": {
      textAlign: "center",
      fontSize: "12px",
      fontFamily: "'axiforma-reg'"
    },
    "& .login_form_two>.MuiFormControl-root .MuiOutlinedInput-root input": {
      fontSize: "12px",
      fontFamily: "'axiforma-reg'"
    },
    "#__next & .login_form_two>.MuiFormControl-root": { width: "41%" },
    "& .login_form_two button": { marginTop: "30px" },
    "& .card_image": { paddingBottom: "25px" },
    "& .login_form input::placeholder": { fontSize: "12px", fontFamily: "'axiforma-reg'" },
    "& .login_form .form_anchor_main": { fontSize: "12px" },
    "& .login_form button": { fontFamily: "'axiforma-semi-bold'" },
    "& .login_form .form_inner_anchor_two a": { textDecoration: "underline", paddingLeft: "5px" }
  },
  custom_footer_bottom: {
    "& .text_center_col": { display: "flex", alignItems: "end", justifyContent: "center" },
    "& .text_center_col p": { color: "black" },
    "& .text_right_col": { display: "flex", alignItems: "end", justifyContent: "end" },
    "& .text_right_col p": { color: "black" }
  }


});


