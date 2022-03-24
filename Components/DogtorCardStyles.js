import { makeStyles } from "@mui/styles";

export const dogtarCardStyles = makeStyles({
  dogtorCard: {
    width: "100%",
    height: "500px",
    backgroundColor: "#F9F9F9",
    borderRadius: "15px",
    filter: "drop-shadow(10px 10px 12px rgba(0, 0, 0, 0.161))",
    "@media (max-width:900px)":{
marginBottom:"60px",
    },

    "& .dogtor-card-img-box": {
      width: "100%",
      height: "202px",
      "& .card-img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      },
    },
    "& .dogtor-card-data": {
      padding: "3% 5%",
      "& .dogtor-card-title": {
        width: "100%",
        textAlign: "left",
        fontSize: "18px",
        color: "rgba(0, 9, 41, 1)",
        margin: "0px",
        marginBottom: "3%",
        fontFamily: "axiforma-thin",
      },
      "& .dogtor-card-tagline": {
        margin: "0px",
        fontSize: "13px",
        color: "#ABABAB",
        fontFamily: "axiforma-reg",
      },
      "& .dogtor-card-description": {
        margin: "0px",
        width: "100%",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical",
        maxHeight: "max-content",
        fontSize: "15px",
        color: "#000929",
        display: "-webkit-box",
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical",
        marginTop: "3%",
        fontFamily: "axiforma-reg",
        minHeight: "90px !important",

        "@media (max-width:1024px)":{
        minHeight: "0px !important",

        },
       
      },
      "& .dogtor-card-btn-box": {
        margin: "0px",
        marginBottom: "5%",
        marginTop: "20%",
       "@media (max-width:800px)":{
        marginTop: "10%",

       },
       "@media (max-width:480px)":{
        marginTop: "20%",

       },
        "& button": {
          width: "100%",
          height: "52px",
          backgroundColor: "rgba(0, 9, 41, 1)",
          fontSize: "13px",
          color: "rgba(171, 226, 54, 1)",
          borderRadius: "24px",
          outline: "none",
          border: "none",
          fontFamily: 'axiforma-extra-bold',
        
        },
       
      },
    },
  },
});
