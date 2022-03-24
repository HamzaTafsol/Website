import { NoEncryption } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const locationSelectionModalStyles = makeStyles({
  locationModal: {
    width: "100vw",
    height: "100vh",
  },
  "& .a-center": {
    display: "flex",
    alignItems: "center",
  },
  section: {
    "& h1": {
      // fontWeight: "normal",
      display: "flex",
      alignItems: "center",
      fontFamily: "axiforma-thin",
      lineHeight: "1",
      "@media (max-width:1024px)":{
        fontSize:"30px",
                },
      "@media (max-width:600px)":{
        fontSize:"21px",
                },
    },
    paddingTop: "4%",
    "& .cancel-icon": {
      fill: "#BBBBBB",
      width: "50.54px",
      height: "40.19px",
      "@media (max-width:1024px)":{
        width: "40.54px",
      height: "30.19px",
                },
      "@media (max-width:600px)":{
        width: "35.54px",
      height: "30.19px",
                },
    },
    "& .location-heading-and-input": {
      marginLeft: "3%",
      marginTop: "4%",
      "& input": {
        fontSize: "80px",
        fontWeight: "bold",
        marginTop: "4%",
        border: "none",
        borderBottom: "1px solid #000929",
        width: "100%",
        "@media (max-width:1024px)":{
fontSize:"40px",
        },
        "@media (max-width:600px)":{
fontSize:"25px",
        },
        "@media (max-width:600px)":{
fontSize:"25px",
        },
        "@media (max-width:375px)":{
fontSize:"20px",
        },
        "@media (max-width:320px)":{
fontSize:"16px",
        },


        "&::placeholder": {
          color: "#EFEFEF",
        },
        "&:focus": {
          // backgroundColor: "red",
          border: "0",
          outline: "none",
          borderBottom: "1px solid #000929",
        },
      },

      "& .location-icon": {
        width: "40px",
        height: "45px",
        marginRight: "15px",
        marginBottom: "5px",
        "@media (max-width:1024px)":{
          width: "35px",
          height: "40px",

                  },
        "@media (max-width:768px)":{
          width: "30px",
          height: "35px",

                  },
        "@media (max-width:600px)":{
          width: "25px",
          height: "30px",

                  },
        "@media (max-width:380px)":{
          width: "20px",
          height: "25px",

                  },
      },
    },
  },
});
