import { makeStyles } from "@mui/styles";

export const teamAccessModalStyle = makeStyles({
  modal: {
    minWidth: "40%",
    minHeight: "max-content",
    backgroundColor: "#fff", 
    border: "0",
    "@media (min-width:1440px)": {
      minWidth: "40%",
      maxWidth: "40%",
    },
    "@media (min-width:1920px)": {
      minWidth: "40%",
      maxWidth: "40%",
    },
   
  },
  section: {
    
    "& .close_main svg": { color: "#262626" },
    "& img":{
      textAlign:"center",
    },
    "& .custom_input": { 
        width: "100%",
     },
     "& .custom_input input::placeholder": {
      fontSize: "13px",
      fontFamily: "'axiforma-reg'",
    },
    "& .click_here_link": {
      color: "#292525",
      fontFamily: "'axiforma-bold'",
      fontSize: "13px"
    },
     "& h2": { 
         fontFamily: '"axiforma-bold" !important', 
         fontSize: "25px" ,
         color : "#000"
        },
    
 
 
    "& button.custom_input": {
      backgroundColor: "#ABE236",
      color: "#000000",
      borderRadius: "30px",
      marginTop: "5%",
      width: "100%",
      height: "38px",
      border: "none",
      fontFamily:'axiforma-semi-bold',
      textTransform: "unset",
      "@media (min-width:1440px)": {
        height: "43px",
      },
    },
    "& button.custom_input:hover": {
        backgroundColor: "#ABE236",
      color: "#000000",
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
