import { makeStyles } from "@mui/styles";

export const headerStyles = makeStyles({
  appBar: {
    height: "120px",
    boxShadow: "10px 10px 12px #00000029",
    backgroundColor: "#ABE236",
    justifyContent: "center",
    "@media (max-width:480px)": {
      height: "80px",
    },
    "& .magnify-glass": {
      marginRight: "6px",
    },
    "& span,p, img": {
      lineHeight: "1",
    },
    "& .lang-icon": {
      width: "14.79px",
      height: "14.77px",
      margin: "0px",
      padding: "0",
      marginRight: "6px",
      lineHeight: "1",
    },
    "& .lang": {
      display: "flex",
      alignItems: "center",
      marginRight: "35px",
      lineHeight: "1",

      "& span": {
        lineHeight: "1",
        paddingTop: "2px",
      },
    },
    "& .user-icon": {
      width: "14.62px",
      height: "14.62px",
    },
    "& .navlinks": {
      display: "flex",
    },
    "& .logo": {
      flexGrow: "1",
      cursor: "pointer",
    },
    "& .navMain": {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ABE236",

      "& p": {
        marginBottom: "0px",
        lineHeight: "1",
        border: "1px solid red",
        textDecoration: "none",
        fontSize: "15px",
        color: "white",
        "@media (max-width:1440px)": {
          fontSize: "12px",
        },
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
          cursor: "pointer",
        },
      },
    },
    "& .NavP": {
      margin: "0 20px",
      color: "#ffffff",
      "@media (max-width:1440px)": {
        margin: "0 12px",
      },
    },

    "& .btn1": {
      backgroundColor: "#000225",
      border: "none",
      outline: "none",
      padding: "0px 15px",
      height: "34px",
      borderRadius: "30px",
      fontSize: "13px",
      color: "#ffffff",
      marginRight: "20px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      fontFamily: "axiforma-med",

      "@media (max-width:1440px)": {
        fontSize: "12px",
        marginRight: "10px",
        padding: "8px 10px",
      },

      "& span": {
        marginLeft: "5px",
        marginTop: "2px",
        lineHeight: "1",
        padding: "0px",
      },
    },
    "& .btn2": {
      backgroundColor: "#FFFFFF",
      border: "none",
      outline: "none",
      padding: "0px 15px",
      height: "34px",
      borderRadius: "30px",
      fontSize: "13px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      fontFamily: "axiforma-med",
      float: "right",
      "@media (max-width:1440px)": {
        fontSize: "12px",
        padding: "8px 10px",
      },
      "& span": {
        marginLeft: "5px",
        lineHeight: "1",
        paddingTop: "3px",
      },
    },
    "& .div": {
      display: "flex",
    },
    "& .ul": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      fontFamily: "axiforma-med",
      listStyle: "none",
      "& li": {
        marginRight: "15px",
        color: "black",
        width: "max-content",
        fontSize: "13px",
        "@media (min-width:1440px)": {
          marginRight: "25px",
          fontSize: "13px",
        },
        "@media (max-width:1024px)": {
          fontSize: "11px",
        },
      },
    },
    "& .ps1": {
      paddingLeft: "5px",
    },
    "& .language": {
      color: "#ffffff",
      width: "max-content",

      "& span": {
        marginTop: "2px",
        paddingLeft: "4px",
      },
    },
    "& .end": {
      margin: "0px auto",
      marginRight: "auto",
    },
    "& .a-center": {
      display: "flex",
      alignItems: "center",
    },
  },

  /*  LOOK FOR SECTION */
  lookForSection: {
    position: "fixed",
    top: "0%",
    left: "0%",
    right: "0%",
    backgroundColor: "#ffffff",
    height: "120px",
    zIndex: 11111,
    paddingTop: "10px",
    "& .input-box": {
      width: "100%",
      height: "100%",
      position: "relative",
      "& input": {
        padding: "0px 0px",
        width: "100%",
        fontSize: "60px",
        border: "none",
        borderBottom: "1px solid #abe236",
        paddingLeft: "6%",
        paddingRight: "4%",
        outline: "none",
        lineHeight: "1",
        fontFamily: "axiforma-bold",
        "&::placeholder": {
          color: "#F1F1F1",
        },
        "@media (max-width:992px)": {
          paddingLeft: "10%",
        },
      },
      "& .cancel-icon": {
        fontSize: "40px",
        position: "absolute",
        right: "2%",
        top: "19px",
        color: "#abe236",
        width: "48px",
        height: "47px",

        "@media (max-width:992px)": {
          width: "38px",
          height: "37px",
          top: "35px",
        },
      },
      "& .search-icon": {
        width: "51.06px",
        height: "51.06px",
        position: "absolute",
        left: "0%",
        top: "19px",
        color: "#abe236",

        "@media (max-width:992px)": {
          width: "41.06px",
          height: "41.06px",
          top: "33px",
        },
      },
    },
  },
});
