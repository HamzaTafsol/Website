import React from "react";
import { makeStyles } from "@mui/styles";
export const SpanishFlipStyle = makeStyles({
  cusCont:{
    "@media (max-width:480px)": {
     
    width: "100%",
    margin: "auto",

    },
  },
  banner_section: {
    "& h1": {
      fontFamily: "axiforma-bold",
      "@media (max-width:768px)": {
        fontSize: "22px",
        minWidth: "86vw",
      fontFamily: "axiforma-bold",

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
    "& .header-heading": {
      paddingTop: "5%",
    },
    "& .home_first": {
      // width: "80%",
    },
    "& .text-center": {
      textAlign: "center",
      width: "100%",
    },

    "& h2": {
      fontFamily: "axiforma-book",
      "@media (max-width:768px)": {
        minWidth: "86vw",
        fontFamily: 'axiforma-extra-bold',
        fontSize: "16px",
      },
    },
    "& .heading-gap": {
      // marginLeft: "30px",
      "@media (max-width:768px)": {
        // marginLeft: "20px",
      },
    },
    "& .address-box": {
      display: "flex",
      width: "709px",
      height: "44px",
      backgroundColor: "#fcfcfc",
      filter: "drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.1))",
      borderBottomLeftRadius: "7px",
      borderTopLeftRadius: "7px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "5%",
      "@media (max-width:800px)":{
        width: "100%",

      },
    },

    "& .address-box .address-flag-icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "52px",
      backgroundColor: "#abe236",
      height: "44px",
      borderBottomLeftRadius: "7px",
      borderTopLeftRadius: "7px",
    },
    "& .address-box .address-flag-icon svg": { color: "#ffffff" },
    "& .address-box .row .col-lg-7 input": {
      paddingLeft: "10px",
      width: "420px",
      fontSize: "14px",
      backgroundColor: "transparent",
      height: "100%",
      fontFamily: "axiforma-reg",
    },
    "& .address-box .row .col-lg-1": {
      display: "flex",
      alignItems: "center",
    },
    "& .address-box .row .col-lg-1 svg": { color: "#abe236" },

    "& .address-box .address-flag-icon": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "52px",
      backgroundColor: "#abe236",
      height: "44px",
      borderBottomLeftRadius: "7px",
      borderTopLeftRadius: "7px",
    },
    "& .address-box .address-flag-icon svg": { color: "#ffffff" },
    "& .address-box .row .col-lg-7 input": {
      paddingLeft: "10px",
      width: "420px",
      fontSize: "14px",
      backgroundColor: "transparent",
      height: "100%",
    },
    "& .address-box .row .col-lg-1": {
      display: "flex",
      alignItems: "center",
    },
    "& .address-box .row .col-lg-1 svg": { color: "#abe236" },
    "& .address-box .row .col-lg-4": {
      display: "flex",
      alignItems: "center",
    },
    "& .banner-cards": {
      marginTop: "7%",
      paddingLeft: "10%",
      paddingRight: "10%",
      position: "relative",
      "@media (max-width:768px)": {
          padding: "0%",
      marginTop: "7%",

          width:"100%"
      },
    },
    "& .banner-cards .inner_div": {
      // margin: "auto",
      // width: "100%",
      paddingLeft: "5%",
      paddingRight: "5%",
      justifyContent: "space-between",
      "@media (max-width:900px)":{
        justifyContent: "flex-start",

      },


    },
    "& .title-on-mobile" : {
      textAlign: "center",
    },
    "& .banner-cards .close-icon": {
      position: "absolute",
      left: "5%",
      top: "50%",
      bottom: "50%",
      width: "37.03px",
      height: "37.03px",
      color: "#abe236",
      transform: "translate(-50%, -50%)",
      "@media (max-width:320px)":{
        left: "8%",
        top: "46%",

      },
    },
    "& .banner-cards .banner-circle-card-col": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "5%",
      "& .title-on-mobile": {
        marginTop: "3%",
        display: "none",
        "@media (max-width:768px)": {
          display: "flex",
        },
        "@media (max-width:480px)": {
          fontSize:"14px"
        },
      },
      "& .title": {
        fontSize: "15px",
        lineHeight: "1",
        display: "flex",
        "@media (max-width:768px)": {
          display: "none",
        },
        "@media (max-width:1025px)": {
          fontSize: "10px",
        },
      },
    },
    "& .banner-cards .banner-circle-card": {
      width: "123px",
      height: "124px",
      backgroundColor: "#f1f1f1",
      boxShadow: "10px 10px 12px #00000029",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      "@media (max-width:1024px)": {
        width: "108px",
        height: "109px",
      },
      "@media (max-width:768px)": {
        width: "90px",
        height: "90px",
      },
      "@media (max-width:480px)": {
        boxShadow: "4px 4px 12px #00000029",
        width: "73px",
        height: "73px",
        backgroundColor:"#fff"
      },
    },
    "& .banner-cards .banner-circle-card:hover": {
      cursor: "pointer",
    },
    "& .banner-cards .banner-circle-card-col .banner-circle-card p": {
      textAlign: "center",
      marginTop: 0,
      fontSize: "15px",
      fontFamily: "axiforma-reg",
      "@media (max-width:992px)":{
        fontSize: "14px",

      },
    },
    "& .banner-cards .banner-circle-card img": {
      width: "43px",
      height: "36px",
      marginBottom: "5px",
    },
    "& .address-box .use-current-location": {
      display: "flex",
      alignItems: "center",
      "& span": {
        color: "#abe236",
        margin: "0",
        fontSize: "13px",
        lineHeight: "1",
        fontFamily: "axiforma-reg",
        borderBottom: "1px solid ",
      },
    },
    "& .banner-circle-card-col": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .address-box .row .col-lg-7 input": {
      backgroundColor: "transparent",
      fontSize: "14px",
      height: "100%",
      paddingLeft: "10px",
      width: "420px",
    },
    "& .arrow-down": {
      lineHeight: "40px",
    },
    // "@media (max-width:480px)": {
    //   "& .makeStyles-banner_section-8 .banner-cards, .css-mhc70k-MuiGrid-root>.MuiGrid-item, .css-1fes90t-MuiPaper-root":
    //     { padding: "0" },
    // },

    // Carousel
    "& .slider-section .rec-carousel-wrapper .rec-pagination":{
      // marginTop: "-15px"
    },
    "& .slider-section": {
      marginTop: "5%",
      position: "relative",
      padding: "4% 0px",
      backgroundColor: "#E2F5B9",
      borderRadius: "15px",
     
      "& h5": {
        textAlign: "right",
        fontSize: "25px",
        lineHeight: "1",
        margin: "0px",
        fontWeight: "bolder",
      fontFamily: "axiforma-bold",

        paddingRight: "3%",
        "@media (max-width:480px)":{
          fontSize: "20px",

        },
      },
      "& h6": {
        fontSize: "13px",
        lineHeight: "1",
        margin: "0px",
        marginTop: "4%",
        fontWeight: "bold",
        paddingLeft: "3%",
      fontFamily: "axiforma-bold",
      "@media (max-width:480px)":{
        fontSize: "12px",

      }

      },
      "& .rec .rec-pagination .rec-dot": {
        backgroundColor: "black",
        width: "10px",
        height: "10px",
        boxShadow: "none",
      },
      "& .rec .rec-pagination .rec-dot_active": {
        width: "10px",
        height: "10px",
        backgroundColor: "#abe236",
        boxShadow: "none",
      },
      "& .rec-arrow.rec-arrow-right": {
        backgroundColor: "black",
        color: "#ffffff",
        boxShadow: "none",
        width: "20px",
        height: "20px",
        minWidth:"20px",
        lineHeight: "21px",
        fontSize: "10px",
        position: "absolute",
        bottom: "5%",
        right: "4%",
      },
      "& .rec-arrow.rec-arrow-left": {
        backgroundColor: "black",
        color: "#ffffff",
        minWidth: "30px",
        height: "30px",
        lineHeight: "30px",
        fontSize: "15px",

        display: "none",
      },
      "& .avatar": {
        width: "80px",
        height: "80px",
        "@media (max-width:320px)": {
          width: "100%",
          height: "100%",
        },
      },
    },
    "& .a-center": {
      display: "flex",
      alignItems: "center",
    },
  },
  // end of carousel

  banner_section_input: {
    backgroundColor: "transparent",
    fontSize: "14px",
    height: "100%",
    paddingLeft: "10px",
    width: "420px",
    border: "0 !important",
    outline: "none",

  },
});
