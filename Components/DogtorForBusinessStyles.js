import { makeStyles } from "@mui/styles";

export const dogtorstyles = makeStyles({
  dogtorForBusinessSection: {
    marginTop: "5%",
    marginBottom: "3%",
    height: "300px",
    "@media (min-width:1440px)": {
      height: "300px",
    },
    "@media (max-width:480px)": {
      height: "145px",
    },
    "& .dogtor-for-business-box": {
      position: "relative",
      "& .dogtar-for-business-left-box": {
        backgroundColor: "#000929",
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0% 15%",

        "& p": {
          fontFamily: "axiforma-reg",
        },
        "& h2": {
          fontWeight: "700",
          color: "#ffffff",
          position: "relative",
          marginBottom: "2%",
          fontFamily: "axiforma-light",
          lineHeight: "1",
          "& .green": {
            color: "#abe236",
            fontFamily: "axiforma-thin",
          },
          "& .business": {
            fontFamily: 'axiforma-light',
            position:"relative",
            fontWeight:"100",
          },
          "& span.business:before ": {
            content: '""',
            position: "absolute",
            right: "-56px",
            width: "24px",
            top: "-21px",
            height: "36px",
            backgroundImage: "url(/images/small-icon-d4b.svg)",
            "@media (max-width:768px)":{
              backgroundImage: "none"

            },
          },
          "& span": {
            color: " #ffffff",
          },
          "& .d4b-small-icon": {
            position: "absolute",
            top: "10%",
            right: "10%",
            left: "79%",
            width: "22px",
            height: "auto",
            transform: "translate(-50%, -50%)",
            "@media (min-width:1440px)": {
              top: "10%",
              left: "64%",
            },
            "@media (min-width:1920px)": {
              left: "49%",
            },
            "@media (min-width:2560px)": {
              left: "35%",
            },
          },
        },
        "& p": {
          fontSize: "15px",
          color: "#ffffff",
          marginTop: "0%",
          marginBottom: "4%",
        },
        "@media (max-width:800px)": {
          padding: "4% 0px",
          alignItems: "center",
          "& p": {
            fontSize: "11px",
          },
        },
      },
      "& .dogtar-for-business-right-box ": {
        width: "100%",
        "& .dogtar-for-business-right-box-img": {
          width: "100%",
          height: "300px",
          objectFit: "cover",
          objectPosition: "0",
          verticalAlign: "middle",
          "@media (min-width:1440px)": {},
        },
      },
      "& .start-now-btn": {
        backgroundColor: "#abe236",
        width: "214.43px",
        height: "42.09px",
        borderRadius: "24.39px",
        color: "#000929",
        border: "none",
        fontFamily: "axiforma-bold",
      },
      "& .locations-circle-img": {
        position: "absolute",
        width: "97px",
        height: "97px",
        top: "50%",
        left: "59%",
        transform: "translate(-50%, -50%)",
      },
    },
  },
});
