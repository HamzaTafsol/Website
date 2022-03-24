import { useMediaQuery } from "@mui/material";
import React from "react";
import { dogtarCardStyles } from "./DogtorCardStyles";

function DogtorCard({ image, title, tagline, description, buttonText, data }) {
  const Styles = dogtarCardStyles();
  const isMobile = useMediaQuery("@media (max-width:900px)");

  return (
    <div className={Styles.dogtorCard}>
      <div className="dogtor-card-img-box">
        <img className="card-img" src={data.image} />
      </div>

      <div className="dogtor-card-data">
        <h6 className="dogtor-card-title">{data.title}</h6>
        <p className="dogtor-card-tagline">{data.tagline}</p>
        <p className="dogtor-card-description"
        // style={{
        //   minHeight: isMobile && "0px",
        // }}
        
        >{data.description}</p>
        <div className="dogtor-card-btn-box">
          <button
          style={{
            cursor:"pointer"
          }}
          >{data.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default DogtorCard;
