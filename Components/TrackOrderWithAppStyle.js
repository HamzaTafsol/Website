import React from "react";
import { makeStyles } from "@mui/styles";
export const TrackOrderWithAppStyle = makeStyles({
  trackOrderSection: {
    width: "100%",
    // backgroundColor: "#abe236",
    position: "relative",
    zIndex: 1,
    "& .d-block": {
      display: "block",
    },
    "& .text_width": {
      "@media (max-width:480px)": {
        // width: "85%",
      },
    },
    "& .first-sec-heading": {
      lineHeight: "1",
      margin: "0px",

      "& span": {
        fontSize: "40px",
        lineHeight: "1",
        margin: "0px",
        color: "#ffffff",
        fontFamily: "axiforma-reg",
        "@media (max-width:786px)": {
          fontSize: "25px",
        },
      },
      "& .h2": {
        lineHeight: "1",
        margin: "0px",
        "& .app-dogtor": {
          fontFamily: "axiforma-bold",
          color: "black",
          width: "100%",
        },
        "& span": {
          lineHeight: "1",
          margin: "0px",
          fontFamily: "axiforma-reg",
        },
      },
    },

    "& .container": { paddingBottom: "3%" },
    "& .bg-img-top": {
      width: "100%",
      position: "absolute",
      top: "0%",
      zIndex: -1,
      "@media (min-width: 1050px) and (max-width: 1440px)": {
        top: "-2%",
      },
    },
    "& .bg-img-top img": { width: "100%" },
    "& .bg-img-bottom": {
      // position: "relative",
      width: "100%",
      bottom: "-0.1%",
      zIndex: -1,
    },
    "& .buttons-row": {
      width: "60%",
      margin: "auto",
      marginTop: "12%",
      "@media (max-width:768px)": {
        marginTop: "11%",

        justifyContent: "center",
      },
      "@media (max-width:700px) and (min-width:450px)": {
        marginTop: "9%",
      },
      "@media (max-width:500px) and (min-width:400px)": {
        marginTop: "6%",
      },
      "@media (max-width:400px) and (min-width:320px)": {
        marginTop: "3.5%",
      },
      "@media (min-width:768px) and (max-width:842px)": {
        marginTop: "11%",
      },
      "@media (min-width:1050px) and (max-width:1180px)": {
        marginTop: "11%",
      },
      "@media (min-width:1200px) and (max-width:1250px)": {
        marginTop: "11%",
      },
      "@media (min-width:1441px)": {
        marginTop: "14%",
      },
      "& .btn-icon": {
        width: "100%",
        height: "100%",
      },
    },
    "& .buttons-row .col-md-4": {
      display: "flex",
      justifyContent: "center",
    },
    "& .buttons-row button": {
      width: "153px",
      "@media (max-width:991px)": {
        width: "140px",
      },
      height: "42px",
      borderRadius: "21px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "axiforma-bold",
      "& .icon1": {
        width: "10.59px",
        height: "12.22px",
      },
      "& .icon2": {
        width: "11px",
        height: "12.13px",
      },
      "& .icon3": {
        width: "7.45px",
        height: "13.95px",
      },
    },
    "& .buttons-row button .track-order-btn-icon": {
      // marginBottom: "2px",
    },
    "& .buttons-row button span": {
      marginRight: "4px",
      fontSize: "15px",
      lineHeight: "1",
    },
    "& .buttons-row .mobile-app-btn": {
      backgroundColor: "#000929",
      color: "#abe236",
      cursor: "pointer",
    },
    "& .right-section": {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    "& .buttons-row .dashboard-btn": {
      backgroundColor: "#ffffff",
      cursor: "pointer",
    },
    "& .track-order-main-content-row .cus_width": {
      "@media(max-width:480px)": {
        width: "100%",
        maxWidth: "100%",
        flexBasis: "100%",
      },
    },
    "& .track-order-main-content-row .cus_width .left-section": {
      "@media(max-width:480px)": {
        alignItems: "center",
      },
    },
    "& .track-order-main-content-row .cus_width .left-section .tagline": {
      "@media(max-width:480px)": {
        width: "100%",
      },
    },
    "& .buttons-row .development-btn": {
      backgroundColor: "#ffffff",
      cursor: "pointer",
    },
    // "& .track-order-main-content-row": { marginTop: "5%" },
    "& .innerContainer": { backgroundColor: "#abe236", padding: "0 5%" },
    "& .track-order-main-content-row .left-section": {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    "& .track-order-main-content-row .left-section h3": {
      fontSize: "40px",
      textAlign: "right",
      lineHeight: "1",
    },
    "& .track-order-main-content-row .left-section h3 span": {
      color: "#ffffff",
    },
    "& .track-order-main-content-row .left-section p": {
      fontSize: "15px",
      textAlign: "right",
      marginTop: "6%",
      "@media (max-width:480px)": {
        fontSize: "12px",
      },
    },
    "& .tagline": {
      fontFamily: "axiforma-med",
      lineHeight: "1",
      margin: "0",
      marginBottom: "10px",
    },
    "& .track-order-main-content-row .left-section .platforms": {
      textAlign: "right",
      marginTop: "1%",
      
      "@media (max-width:900px)": {
        display: "flex",
        flexDirection: "column",
      },
    },
    "& .track-order-main-content-row .left-section .platforms span": {
      "@media (min-width:1195px) and (max-width:1400px) ": {
        marginRight: "0 !important",

      },
      "@media (max-width:900px)": {
        marginRight: "0 !important",
      },
    },
    "& .track-order-main-content-row  .left-section  .platforms  .track-order-app-platform":
      {
        width: "130.43px",
        height: "auto",
        padding: "0px",
        margin: "0px",
        marginLeft: "10px",
      },
    "& .top-circle-icon": {
      position: "absolute",
      width: "122px",
      top: "14%",
      transform: "translateY(-50%)",
      "@media (min-width:1920px)": {
        top: "14%",
      },
    },
    "& .bottom-circle-icon": {
      position: "absolute",
      width: "122px",
      height: "120px",
      transform: "translateY(-50%)",
      right: "0",
      top: "83%",

      "@media (min-width:1920px)": {
        top: "83%",
      },
    },
    "& .track-order-container": {
      width: "50%",
      margin: "auto",
      paddingTop: "10%",
    },
    "& .track-order-btn": {
      width: "153px",
      height: "42px",
      borderRadius: "21px",
    },
    "& .bg-main": { backgroundColor: "#000929" },
    "& .track-order-mobile-img": {
      width: "100%",
      height: "440px",
      marginBottom: "15%",
    },
    "& .track-order-app-platform": {
      width: "130.43px",
      height: "35.09px",
      lineHeight: "1",
    },
    "& .dashboard-data-row": { marginTop: "17%" },
    "& .dashboard-data-row p": {
      fontSize: "40px",
      textAlign: "center",
      color: "#ffffff",
      lineHeight: "1",
      "@media (max-width:480px)": {
        fontSize: "25px",
      },
    },
    "& .dashboard-data-row h3": {
      fontSize: "40px",
      textAlign: "center",
      lineHeight: "1",
      margin: "5px 0px",
      marginBottom: "9px",
      "@media (max-width:480px)": {
        fontSize: "25px",
      },
    },
    "& .dashboard-data-row .dashboard-img": {
      // height: "623.3px",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // marginBottom: "15%",
    },
    "& .development-data-row": {
      marginTop: "15%",
      height: "max-content",
    },
    "& .development-data-row p": {
      fontSize: "40px",
      textAlign: "center",
      color: "#ffffff",
      "@media (max-width:480px)": {
        fontSize: "25px",
      },
    },
    "& .development-data-row p h3": {
      fontSize: "40px",
      textAlign: "center",
      display: "inline",
      color: "black",
      "@media (max-width:480px)": {
        fontSize: "25px",
      },
    },
    "& .development-data-row .development-img": {
      height: "100%",
      width: "100%",
      // marginBottom: "15%",
    },
    "& .close-icon-box .close-icon": {
      color: "#ffffff",
      width: "40px",
      height: "40px",
    },

    "& .img-fluid": {
      width: "100%",
      height: "auto",
    },
    "& .btn": {
      border: "none",
      outline: "none",
      filter: "drop-shadow(10px 10px 12px rgba(0, 0, 0, 0.3))",
    },
    "& .a-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .dropdown_main .drown_down_inner ": {
      position: "relative",
    },
    "& .dropdown_main .drown_down_inner img ": {
      width: "15px",
      top: "12px",
      left: "27px",
      position: "absolute",
    },
    "& .dropdown_main .drown_down_inner button ": {
      fontSize: "12px",
      backgroundColor: "#000",
      color: "#ABE236",
      justifyContent: "end",
      margin: "0",
    },
    "& .a-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    // "& .top-circle-icon": {
    //   "@media (max-width:786px)": {

    //   display: "none",
    //   },
    // },
  },
});
