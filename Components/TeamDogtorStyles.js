import { makeStyles } from "@mui/styles";

export const teamDogtorStyles = makeStyles({
  section: {
    marginBottom: "5%",
    "& h2": {
      marginBottom: "4%",
      fontFamily: "axiforma-reg",
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
});
