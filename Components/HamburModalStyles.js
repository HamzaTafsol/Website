import React from "react";
import { makeStyles } from "@mui/styles";
export const HamburModalStyles = makeStyles({
  hamburMain: {
    "& .flex_text": {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    "& .ball_b": { position: "relative" },
    "& .ball_b:before": {
      content: '""',
      width: "8px",
      height: "8px",
      left: "-11px",
      position: "absolute",
      background: "#000",
      borderRadius: "50%",
      bottom: "5px",
    },
    "& .ball_b.ball_2b:before": {
      content: '""',
      width: "8px",
      height: "8px",
      left: "-11px",
      position: "absolute",
      background: "#ABE236",
      borderRadius: "50%",
      bottom: "5px",
    },
    "& .bg_round": {
      backgroundColor: "#F1F1F1",
      padding: "10px",
      borderRadius: "50%",
    },
    "& .text-betwen": {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
  },
});
