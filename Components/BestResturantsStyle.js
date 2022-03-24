import React from "react";
import { makeStyles } from "@mui/styles";
export const bestresturantsStyle = makeStyles({
  bestResturantsSection: {
    marginTop: "5%",
    "& h1": {
      marginBottom: "1%",
      marginTop: "4%",
      fontFamily: "axiforma-bold",
      lineHeight: "1",
    },

    "& .best-resturant-card-1 .best-resturant-card-1-hover-text-box": {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      bottom: "1%",
      left: "0%",
      right: "0%",
      width: "100%",
      height: "51px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
    },

    "& .best-resturant-card-2": {
      position: "relative",
      width: "100%",
      height: "276px",
      borderRadius: "15px",
    },
    "& .best-resturant-card-2  .best-resturant-card-2-hover-text-box": {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      bottom: "0%",
      left: "0%",
      right: "0%",
      width: "100%",
      height: "51px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
    },

    "& .best-resturant-card-2 .best-resturant-card-2-text": {
      position: "absolute",
      width: "max-content",
      padding: "8px 60px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "51px",
      borderRadius: "35px",
      border: "3px solid #abe236",
      fontSize: "20px",
      color: "#ffffff",
      backgroundColor: "rgba(0, 9, 41, 0.8)",
      fontFamily: "axiforma-med",
      "@media (max-width:768px)":{
        fontSize: "15px",

      },
    },
    "& .best-resturant-card-1 .best-resturant-card-1-text": {
      position: "absolute",
      width: "max-content",
      padding: "8px 60px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "51px",
      borderRadius: "35px",
      border: "3px solid #abe236",
      fontSize: "20px",
      color: "#ffffff",
      backgroundColor: "rgba(0, 9, 41, 0.8)",
      fontFamily: "axiforma-med",
      "@media (max-width:768px)":{
        fontSize: "15px",

      },
    },
    "& .best-resturant-card-1 .hover-color-1 ,.best-resturant-card-2 .hover-color-1":
      {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    "& .d-none": {
      display: "none !important",
    },
    // Card 1
    "& .best-resturant-card-1": {
      height: "569px",
    },
    "& .best-resturant-card-1::before": {
      position: "absolute !important",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 99,
      backgroundSize: "cover",
      content: '""',
      display: "block",
      width: "100%",
      height: "567px",
      borderRadius: "15px",
      opacity: 0,
    },
    "& .best-resturant-card-1:hover::before": {
      opacity: 1,
      zIndex: 0,
    },
    "& .best-resturant-card-2:hover::before": {
      opacity: 1,
      zIndex: 0,
    },
    "& .best-resturant-card-2::before": {
      position: "absolute !important",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 99,
      backgroundSize: "cover",
      content: '""',
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "15px",
      opacity: 0,
    },
    "& .best-resturant-card-2 .card-img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "15px",
    },
    "&  .best-resturant-card-1 .card-img": {
      height: "568px",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "15px",
    },

    "& .best-resturant-card-2-hover-text-box .time-duration,.best-resturant-card-1-hover-text-box .time-duration":
      {
        fontSize: "14px",
        color: "#ffffff",
        marginRight: "10px",
        fontFamily: "axiforma-bold",
      },
    "& .best-resturant-card-2-hover-text-box .like,.best-resturant-card-1-hover-text-box .like":
      {
        fontWeight: "bold !important",
        color: "#ffffff",
      },
    "& .best-resturant-card-2-hover-text-box .percentage,.best-resturant-card-1-hover-text-box .percentage":
      {
        fontSize: "14px",
        color: "#ffffff",
        paddingLeft: "8px",
        fontFamily: "axiforma-bold",
      },
    "& .best-resturant-card-2-hover-text-box .views, .best-resturant-card-1-hover-text-box .views":
      {
        fontSize: "14px",
        paddingLeft: "15px",
        color: "#ffffff",
      },
    "& .best-resturant-card-1": {
      position: "relative",
    },
    "& .best-resturant-card-2 .clock": {
      color: "#ffffff",
      // fontWeight: "bolder",
    },
    "& .best-resturant-card-1 .clock": {
      color: "#ffffff",
      // fontWeight: "bolder",
    },
    "& .rec .rec-arrow-right": {
      display: "none",
    },
    "& .rec .rec-arrow-left": {
      display: "none",
    },
    "& .rec-pagination .rec-dot": {
      backgroundColor: "black",
      width: "10px",
      height: "10px",
      boxShadow: "none",
    },
    "& .rec-pagination .rec-dot_active": {
      width: "10px",
      height: "10px",
      backgroundColor: "#abe236",
      boxShadow: "none",
    },
  },
  wrapper_b: {
    display: "flex",
    flexWrap: "wrap",
  },
});
