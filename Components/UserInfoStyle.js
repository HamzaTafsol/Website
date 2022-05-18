import { makeStyles } from "@mui/styles";

export const userInfoStyle = makeStyles({
  section: {
    "& .heading_main": {
      fontFamily: "'axiforma-bold'",
      marginLeft: "28px",
      paddingBottom: "30px",
      position: "relative"
    },
    "& .heading_main:after": {
      content: "''",
      width: "100%",
      backgroundColor: "#f2f2f2",
      height: "2px",
      position: "absolute",
      bottom: "0",
      left: "-10px"
    },
    "& .div_between": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "& .custom_user_form label": {
      fontSize: "20px",
      color: "#BBBBBB !important",
      fontFamily: "'axiforma-reg'",
    },
    "& .custom_user_form input": {
      marginTop: "15px",
      marginBottom: "10px",
    },
    "& .custom_user_form .Mui-disabled:before": {
      borderBottom: "0",
    },
    "& .custom_user_form input": {
      WebkitTextFillColor: "#636060 !important",
      fontSize: "17px",
    },
    "& button": {
      color: "#abe236 !important",
      fontFamily: "'axiforma-bold'",
    },
    "& .custom_user_form": {
      display: "flex",
      position: "relative",
      width: "100%",
      marginBottom: "15px",
      paddingBottom:"15px",
    },
    "& .custom_user_form:after": {
      content: "''",
      backgroundColor: "#F2F2F2",
      width: "87%",
      height: "2px",
      position: "absolute",
      bottom: "0",
      margin: "0 30px",
    },
    "& .payment_method": {
      display: "flex",
      border: "2px solid #abe236",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "10px",
      padding: "0 10px",
      margin: "0 20px 10px",
    },
    "& .delete_icon": { display: "flex" },
    "& .card_number": { display: "flex", alignItems: "center" },
    "& .card_number p": {
      color: "#636060",
      fontFamily: "'axiforma-bold'",
      marginLeft: "10px",
    },
    "& .card_title": {
      textAlign: "left",
      marginTop: "6px",
      marginLeft: "20px",
      color: "#BBBBBB !important",
      fontSize: "15px",
      fontFamily: "'axiforma-reg'",
      marginBottom: "0",
    },
    "& .location": {
      color: "#636060",
      fontSize: "15px",
      maxWidth: "55%",
      marginLeft: "17px",
      marginTop: "-15px",
      lineHeight: "1.9",
    },
    "& .div_between p": {
       marginLeft: "18px",
       fontFamily: "'axiforma-reg'",
       fontSize: "13px",
     },
     ".div_between label": {
        marginLeft: "0",
         marginRight: "0",
     },
     "& .custom_user_form_two input": {
      borderBottom: "2px solid #636060",
      width: "70%",
      marginLeft: "22px"
    },
    "& .custom_user_form_two": { width: "100%" },
    "& .custom_user_form_two .edit_btn_one": {
      position: "absolute",
      right: "0",
      color: "#fff !important",
      backgroundColor: "#abe236 !important",
      width: "30%"
    },
    "& .custom_user_form_two .MuiInput-root": { 
      display: "block" 
    },
    "& .card_title_one": {
      fontFamily: "'axiforma-bold'",
      textAlign: "left",
      marginLeft: "18px"
    },
    "& .custom_user_form_three": {
      Float: "left",
      marginLeft: "18px",
      marginBottom: "20px",
      width:"96%"
    }
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
