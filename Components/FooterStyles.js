import { makeStyles } from "@mui/styles";

export const footerStyles = makeStyles({
  footerSection: {
"& .cus_width_footer":{
  "@media (max-width:1200px)":{

    width:"300px"
  },
},
"& .footer-logo img":{
  maxWidth: "150px"
},
"& .cus_color0":{
  fontSize: "15px"
},

"& ul.footer-links.mar_b li":{
  marginBottom: "0px",
  marginTop:"18px",
},
"& ul.footer-links li.a-center":{
  marginBottom: "35px",
  marginTop:"30px",
},

    "& .cus_color p":{
color:"#BBBBBB",
marginRight:"25px",
    },
    "& .a-center": {
      display: "flex",
      alignItems: "center",
    },
    "& .footer-logo": {
      width: "200px",
      height: "auto",
      marginBottom: "4%",
      cursor: "pointer",
      "& .footer-logo .img": {
        width: "200px",
        height: "150px",
      },
    },

    "& .flex-end": {
      display: "flex",
      justifyContent: "end",
    },

    "& .icon-white-and-bold": {
      color: "#ffffff",
      fontWeight: "bold",
      marginTop: "-1px",
    },
    "& .icon-text": {
      color: "#ffffff",
      marginLeft: "3%",
      fontSize: "15px",
      fontFamily: "axiforma-reg",
    },
    "& .footer-btns-box": {
      marginTop: "5%",
      "& .footer-btn": {
        color: "#ffffff",
        fontSize: "13px",
        width: "153px",
        height: "41.17px",
        border: "2px solid #abe236",
        borderRadius: "30px",
        backgroundColor: "transparent",
        fontWeight: "600",
        marginBottom: "3%",
        fontFamily: "axiforma-med",

        "&:hover": {
          color: "#000225",
          backgroundColor: "#abe236",
        },
      },
    },
    "& .copy-rights": {
      textAlign: "center",
      color: "#ffffff",
      fontSize: "15px",
      marginTop: "5%",
      cursor: "default",
      width: "100%",
      fontFamily: "axiforma-reg",
      paddingBottom: "25px",
    },
    "& .footer-links": {
      listStyle: "none",
      color: "white",
      paddingLeft: "0px",
      height: "100%",
      "& li": {
        marginBottom: "5%",
        fontFamily: "axiforma-reg",
        cursor: "pointer",
      },
    },
    "& h6": {
      color: "#ffffff",
      marginBottom: "4%",
      fontSize: "18px",
      fontFamily: "axiforma-bold",
    },
    "& p": {
      color: "#ffffff",
      cursor: "pointer",
      fontFamily: "axiforma-reg",
    },
    "& .footer-border": {
      borderTop: "1px solid #FFFFFF",
    },
    "& .social-icons": {
      display: "flex",
      listStyle: "none",
      paddingLeft: "0px",
      justifyContent: "end",
      "& li": {
        cursor: "pointer",
        marginLeft: "5%",
        color: "#ffffff",
        fontFamily: "axiforma-reg",
        "& .text-white": {
          color: "#ffffff",
        },
      },
    },
    "& .platform-icon": {
      width: "150.43px",
      height: "100%",
      cursor: "pointer",
      marginRight: "3%",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  },
  mobileFooter: {
    "& .MuiGrid-root": {
      width: "100%",
    },
    "& .MuiAccordionDetails-root p": {
      marginBottom: "2%",
      fontWeight: "normal",
    },
    "& .MuiAccordion-root": {},
    "& .border-bottom": {
      borderBottom: "2px solid #19213D",
    },
    "& .border-top": {
      borderTop: "2px solid #19213D",
    },
    "& .MuiGrid-item": {
      paddingLeft: "0px",
    },
    "& .MuiAccordion-rounded": {
      backgroundColor: "transparent",
      borderRadius: "0px",
      "& .MuiAccordionSummary-expandIconWrapper": {
        color: "#ffffff",
      },
    },
    "& .footer-logo": {
      width: "200px",
      height: "auto",
      margin: "auto",
      marginBottom: "4%",
      cursor: "pointer",
      "& .footer-logo .img": {
        width: "150px",
        height: "150px",
      },
    },

    "& .icon-white-and-bold": {
      color: "#ffffff",
      fontWeight: "bold",
    },
    "& .icon-text": {
      color: "#ffffff",
      marginLeft: "3%",
      fontSize: "8px",
    },
    "& .footer-btns-box": {
      display: "flex",
      justifyContent: "center",
      "& .footer-btn": {
        color: "#ffffff",
        fontSize: "10px",
        padding: "8px 25px",
        border: "2px solid #abe236",
        borderRadius: "30px",
        backgroundColor: "transparent",
        fontWeight: "600",
        marginBottom: "8%",
        "&:first-child": {
          marginRight: "3%",
        },
        "&:hover": {
          color: "#000225",
          backgroundColor: "#abe236",
        },
      },
    },
    "& .copy-rights": {
      textAlign: "center",
      width: "100vw",
      color: "#ffffff",
      fontSize: "13px",
      marginTop: "2%",
      cursor: "default",
    },
    "& .footer-links": {
      display: "flex",
      listStyle: "none",
      color: "white",
      paddingLeft: "0px",
      margin: "0px 5%",
      marginBottom: "5%",
      "& li": {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: "100%",
      },
    },
    "& h6": {
      color: "#ffffff",
      marginBottom: "4%",
      fontSize: "18px",
    },
    "& p": {
      color: "#ffffff",
      cursor: "pointer",
    },
    "& .footer-border": {
      borderTop: "1px solid #FFFFFF",
    },
    "& .social-icons": {
      display: "flex",
      listStyle: "none",
      paddingLeft: "0px",
      justifyContent: "center",
      "& li": {
        cursor: "pointer",
        marginRight: "5%",
        color: "#ffffff",
        "& .text-white": {
          color: "#ffffff",
        },
      },
    },
    "& .platform-icon": {
      margin: "0px",
      padding: "0px",
      width: "130px",
      height: "auto",
      cursor: "pointer",
      marginRight: "0px",
      marginLeft: "0px",
      lineHeight: "1",
    },

    // Mobile footer
  },
});
