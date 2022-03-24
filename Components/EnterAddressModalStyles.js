import { makeStyles } from "@mui/styles";

export const enterAddressModalStyle = makeStyles({
  modal: {
    minWidth: "40%",
    minHeight: "max-content",
    "@media (min-width:1440px)": {
      minWidth: "35%",
      maxWidth: "35%",
    },
    "@media (min-width:1920px)": {
      minWidth: "30%",
      maxWidth: "30%",
    },
  },
  section: {
    padding: "5% 0px",
    "& .heading": {
      fontSize: "12px",
      color: "black",
      margin: "0",
      fontFamily: "axiforma-med",
    },
    "& .tagline": {
      fontSize: "20px",
      color: "black",
      fontWeight: "400",
      borderBottom: "1px solid #BBBBBB",
      paddingBottom: "3%",
      margin: "0",
      fontFamily: "axiforma-reg",
    },
    "& input": {
      marginTop: "5%",
      height: "49px",
      border: "1px solid #F1F1F1",
      backgroundColor: "transparent",
      borderRadius: "10px",
      width: "100%",
      paddingLeft: "30px",
      paddingRight: "10px",
      outline: "none",
      fontFamily: "axiforma-med",
      "& input::placeholder": {
        color: "#BBBBBB",
      },
    },
    "& button": {
      backgroundColor: "#ABE236",
      color: "#ffffff",
      borderRadius: "19px",
      marginTop: "5%",
      width: "100%",
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
