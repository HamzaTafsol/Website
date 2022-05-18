import { makeStyles } from "@mui/styles";

export const sendNowModalStyle = makeStyles({
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
   
  },
  section: {
   
    "& .heading": {
      fontSize: "41px",
      textAlign: "center",
      color: "black",
      margin: "0",
      fontFamily: "axiforma-heavy",
      color: "#fff",
      maxWidth: "80%", 
      margin: "30px auto 0",
    },
    "& .close_main svg": { color: "#fff" },
    "& img":{
      textAlign:"center",
    },
    "& .victory_content h3": {
      fontFamily: "'axiforma-heavy'",
      fontSize: "28px",
      maxWidth: "73%",
      margin: "0 auto",
      color: "#fff",
      lineHeight: "1.9",
    },
    "& .victory_content img": { 
      margin: "30px 0" 
    },
 
 
    "& button": {
      backgroundColor: "#ABE236",
      color: "#000000",
      borderRadius: "30px",
      marginTop: "2%",
      width: "20%",
      height: "38px",
      border: "none",
      fontSize:"17px",
      fontFamily: "'axiforma-semi-bold'",
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
