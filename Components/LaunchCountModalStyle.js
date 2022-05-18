import { makeStyles } from "@mui/styles";

export const launchCountModalStyle = makeStyles({

  custom_btn: {
    backgroundColor: "#fff",
    boxShadow: "unset",
    color: "#000000",
    fontFamily: "'axiforma-reg'",
    padding: "15px 0",
    borderRadius: "50px",
    width: "315px",
    fontFamily: "'axiforma-bold'",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  countDown_modal:{
    backgroundColor: "#ABE236 !important"
  },
  modal: {
    minWidth: "40%",
    minHeight: "max-content",
    backgroundColor: "#262626", 
    border: "0",
    "@media (min-width:1440px)": {
      minWidth: "60%",
      maxWidth: "60%",
    },
    "@media (min-width:1920px)": {
      minWidth: "60%",
      maxWidth: "60%",
    },
    "& .counter_main": {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      color: "white",
      padding: "15px 30px 45px 30px",
      backgroundColor: "#ABE236"
    },
    "& .counter_main .count": { fontSize: "60px", fontWeight: 700 },
    "& .counter_main .text h4": { marginTop: "0" }
   
  },
  section: {
    padding: "5% 0px",
    "& .heading": {
      fontSize: "42px",
      textAlign: "center",
      color: "black",
      margin: "0",
      fontFamily: "axiforma-bold",
      color: "#fff",
      maxWidth: "80%", 
      margin: "0 auto",
    },
    "& .close_main svg": { color: "#fff" },
    "& img":{
      textAlign:"center",
    },
    "& .victory_content h3": {
      fontFamily: "'axiforma-bold'",
      fontSize: "28px",
      maxWidth: "73%",
      margin: "0 auto",
      color: "#fff"
    }, 
 
    "& button": {
      backgroundColor: "#ABE236",
      color: "#000000",
      borderRadius: "30px",
      marginTop: "5%",
      width: "20%",
      height: "38px",
      border: "none",
      fontFamily: "axiforma-med",
      "@media (min-width:1440px)": {
        height: "43px",
      },
    },

  },
});

// .enter-address-modal .enter-address-modal-section button {
//     background-color: #ABE236,
//     color: #ffffff,
//     border-radius: 19px,
//     margin-top: 5%,
//     width: 100%,
//     height: 38px,
// }

// @media screen and (max-width:769px) {
//     .enter-address-modal {
//         min-width: 90% !important,
//         max-height: max-content !important,
//     }
// }
