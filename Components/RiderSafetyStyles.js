import { makeStyles } from "@mui/styles";

export const riderSafetyStyles = makeStyles({
  section: {
    marginBottom: "5%",
  //   "& .rider-safety-right:after" :{
  //     backgroundColor: "#00000057",
  //     content: '""',
  //     position: "absolute",
  //     width: "100%",
  //     height: "100%",
  //     left: "0",
  //     top: "0",
  //     borderRadius: "10px"
  // },
    "& .rider-safety-left": {
      "& p": {
        fontSize: "15px",
        marginTop: "3%",
        fontFamily: "axiforma-reg",
        width: "90%",
      },
      "& a": {
        fontSize: "15px",
        marginTop: "5%",
        paddingBottom: "2%",
        borderBottom: "2px solid #ABE236",
        maxWidth: "max-content",
        cursor: "pointer",
        fontFamily: "axiforma-bold",
      },
      "& h2": {
        fontFamily: 'axiforma-reg',
        fontWeight:"unset",
      },
    },
    "& .rider-safety-right": {
      width: "100%",
      height: "300px",
      borderRadius: "10px",
      "@media (max-width:480px)": {
        height: "190px",
      },
      "@media (min-width:768px) and (max-width:899px) ": {
        marginTop:"25px",
      },
      "& .link": {
        display: "none",
      },
      "@media (max-width:768px)": {
        position: "relative",
        "& .link": {
          left: "23%",
          color: "#ffffff",
          right: "5%",
          width: "max-content",
          bottom: "43%",
          display: "flex",
          position: "absolute",
          fontSize: "20px",
          textAlign: "center",
          zIndex:"9",
          borderBottom: "2px solid #ABE236",
      fontFamily: "axiforma-bold",

          "@media (max-width:480px)": {
            left: "17%",
            right: "15%",
            bottom: "40%",
            width: "max-content",
            textAlign: "center",
            fontSize: "15px",
          },
          "@media (max-width:375px)": {
            top: "44%",
            bottom: "44%",
            left: "15%",
            right: "15%",
            fontSize: "13px",
          },
        },
      },
      "@media (max-width:325px)": {
        "& .link": {
          top: "43%",
          left: "10%",
          right: "10%",
          fontSize: "13px",
        },
      },

      "& .rider-safety-img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px",
        "@media (max-width:480px)": {
          height: "190px",
        },
      },
    },
  },
});

// @media screen and (max-width:426px) {
//     .rider-safety-right {
//         width: 100%;
//         height: 200px;
//     }

//     .rider-safety-section {
//         margin-bottom: 5%;
//     }

//     .rider-safety-section .rider-safety-right {
//         height: 180px;
//     }

//     .rider-safety-section .rider-safety-img {
//         height: 100%;
//     }

// }
