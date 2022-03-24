import { makeStyles } from "@mui/styles";

export const DrawerStyles = makeStyles({
  Logos:{


    height:"auto !important",width:"50% !important",
    "@media(max-width:900px)":{
      width:"20% !important"
    },
    "@media(max-width:768px)":{
      width:"30% !important"
    },
    "@media(max-width:500px)":{
      width:"40% !important"
    },
    "@media(max-width:320px)":{
      width:"60% !important"
    },
  },
  section: {
    backgroundColor: "#ffffff",
    width: "100vw",
    "& .header": {
      backgroundColor: "#ABE236",
      height: "100px",
      width: "100%",
      borderBottomRightRadius: "80px",
      display: "flex",
      alignItems: "center",
    },
    "& .close_main": {
      paddingLeft: "3px",
      alignItems: "center",
      display: "flex",
      marginLeft:"20px",
      position: "absolute",
    left: "0",
    top: "6%",
  
    },
    "& .a-center-sp": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
    "& .a-center-sp select": {
      padding: "20px",
    },
    "& .close-icon": {
      color: "black",
      width: "26.73px",
      height: "26.73px",
      // marginLeft: "4%",
    },
    "& .a-center": {
      display: "flex",
      justifyContent: "center",
      width: "86%",
    },
    "& .select": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      justifySelf: "end",
      textAlign: "center",
    },
    "& .links": {
      marginLeft: "25px",
      "& ul": {
        listStyle: "none",
        paddingLeft: "0px",
        "& li": {
          display: "flex",
          alignItems: "center",
          paddingLeft: "0px",
          marginBottom: "45px",
          color: "#636060",
          fontFamily: "axiforma-reg",
          "& img": {
            width: "18px",
            height: "18px",
            marginRight: "20px",
          },
          "& .gap": {
            width: "18px",
            height: "18px",
            marginRight: "20px",
          },
          "& .more-of": {
            color: "black",
            fontFamily: "axiforma-bold",
            marginRight: "4px",
          },
          "& .dogtor": {
            color: "black",
            fontFamily: "axiforma-reg",
          },
          "& span": {
            fontSize: "18px",
          },
        },
      },
    },
    "& .btns-box": {
      marginTop: "20%",
      display: "flex",
      justifyContent: "center",
      "& .drawer-btn1": {
        backgroundColor: "#000225",
        border: "none",
        outline: "none",
        maxWidth: "max-content",
        padding: "0px 15px",
        height: "34px",
        borderRadius: "25px",
        fontSize: "13px",
        color: "#ffffff",
        marginRight: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontFamily: "axiforma-med",
        "& span": {
          marginLeft: "5px",
          marginTop: "2px",
          lineHeight: "1",
          padding: "0px",
        },
      },
      "& .drawer-btn2": {
        backgroundColor: "#FFFFFF",
        border: "none",
        outline: "none",
        maxWidth: "max-content",
        padding: "0px 15px",
        height: "34px",
        borderRadius: "25px",
        fontSize: "13px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontFamily: "axiforma-med",
        float: "right",
        boxShadow: "0px 3px 6px rgba(0,0,0,16%)",
        "& span": {
          marginLeft: "5px",
          lineHeight: "1",
          paddingTop: "3px",
        },
      },
    },
    "& .lang": {
      marginLeft: "25px",
      marginTop: "15%",
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      "& span": {
        marginLeft: "6px",
        color: "#ABE236",
        fontFamily: "axiforma-bold",
        lineHeight: 1,
        marginTop: "3px",
      },
    },
  },
});
