import React from "react";
import { makeStyles } from "@mui/styles";
export const ValamosStyles = makeStyles({
  ValamosMain: {
    // display:"none",
    // "& h1": {
    //   fontFamily: "axiforma-bold",
    //   marginBottom: "50px",
    //   "@media (max-width:768px)": {
    //     fontSize: "22px",
    //     minWidth: "86vw",
    //     fontFamily: "axiforma-bold",
    //   },
    // },
    "& .react-tel-input .form-control": {
      borderRadius: "26px",
      padding: "25px 40px",
    },
    "& .react-tel-input .flag-dropdown": {
      backgroundColor: "unset",
      border: "unset",
    },
    "& .center_main": {
      textAlign: "center",
    },
    "& .form-control": {
      width: "100%",
    },
  },
});
