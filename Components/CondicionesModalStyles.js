import React from "react";

import { makeStyles } from "@mui/styles";
export const CondicionesModalStyles = makeStyles({
    section: {
        backgroundColor:"#8ee304b0",
        " & .makeStyles-ModalMain-22": { 
            
        },
        " & .modal_head h2": { 
            fontFamily: "'axiforma-bold'",
        },
        " & .modal_body": { 
            marginTop: "10px" 
        },
        " & .modal_body p": {
            fontFamily: '"axiforma-reg"',
            color: "#000929",
            fontSize: "16px"
        },
        " & .modal_head svg": {
             marginTop: "20px" 
         },
        " & .modal_body p:last-child": { 
            maxWidth: "50%", 
            margin: "50px auto"
         },
         " & .modal_body p:nth-last-child(2)": { 
            maxWidth: "63%", 
            margin: "0 auto 50px auto"
         },
         " & .modal_body .MuiFormControl-root": { 
            width: "83%" 
        },
        " & .modal_body label": {
             fontSize: "18px", color: "#BBBBBB" 
        },
        " & .modal_body .MuiInput-root:before": { 
            borderColor: "#BBBBBB"
        },
        " & .Mui-focused:after" : {
            borderColor: "#CBCBCB !important"
        },

        " & .label_one": {
             marginTop: "-30px", marginLeft: "50px" 
        },
        " & .label_two": { 
            marginTop: "50px", 
            marginLeft: "50px"
        },
        " & .CondicionesModal_main": { 
            height: "fit-content"
        },
        "& .CondicionesModal_main button": {
            fontFamily: "'axiforma-semi-bold'",
            textTransform: "inherit"
        },
        "& .AnadeModal_main button": {
            fontFamily: "'axiforma-semi-bold'",
            textTransform: "inherit"
        },
        "& .AnadeModal_main": {
            height: "unset",
        },
        "& .TusDatosModal_main input::placeholder": {
            color: "#b3b3b3"
        },
        "& .TusDatosModal_main button": {
            fontFamily: "'axiforma-semi-bold'",
            textTransform: "inherit"
        },
        "& .TusDatosModal_main": {
            height: "unset"
        },
        "& .AnadeModal_main .map_col": {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "10px",
            marginTop: "0",
            padding: "0"
        },
        "& .AnadeModal_main .map_col img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
        },
        "& .TusDatosModal_main .textField_two": { marginTop: "20px" },
        "& .TusDatosModal_main .textField_two label": {
            marginLeft: "41px",
            marginTop: "55px",
            color: "#BBBBBB",
            fontFamily: '"axiforma-reg"',
            fontSize: "15px"
        },
        "& .TusDatosModal_main .textField_one label": {
            marginLeft: "41px",
            color: "#BBBBBB",
            fontFamily: '"axiforma-reg"',
            fontSize: "15px"
        },
        "& .modalMain_heading": {
            fontSize: "40px",
        }
    },
  });
  