import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { dogtorstyles } from "./DogtorForBusinessStyles";
import { typoMain } from "./TypographyMain";

const SmallIconD4B = "/images/small-icon-d4b.svg";
const Dogtar4Business = "/images/dogtor-for-business.svg";
const LocationsCircle = "/images/locations-circle.svg";

function DogtorForBusiness() {
  const isMobile = useMediaQuery("@media (max-width:768px)");
  const isMobileImg = useMediaQuery("@media (max-width:899px)");
  const dogStyles = dogtorstyles();
  const typo = typoMain();
  return (
    <section className={dogStyles.dogtorForBusinessSection}>
      <Grid maxWidth="100%" container className="dogtor-for-business-box">
        <Grid
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#000929" }}
        >
          <div className="dogtar-for-business-left-box">
            {/* <Grid container> */}
            <h2 className={typo.h2}>
              Dogtor
              <span className="green">4</span>
              <span className="business">Business</span>
              {/* {!isMobile && (
                <img src={SmallIconD4B} className="d4b-small-icon" />
              )} */}
            </h2>
            <p
            
            >La mejor manera de organizar e impulsar tu negocio B2B.</p>
            <button className="start-now-btn font-15 mt-2 bold-b"
             style={{
               cursor:"pointer"
             }}
            >
              Empieza ahora
            </button>
            {/* </Grid> */}
          </div>
        </Grid>

        {!isMobile && (
          <Grid
            item
            lg={5}
            md={5}
            sm={6}
            xs={0}
            style={{ padding: "0px", lineHeight: "1" }}
          >
            <div
              className="dogtar-for-business-right-box"
              style={{
                padding: "0px",
                lineHeight: "1",
              }}
            >
              {!isMobileImg && (
              <img
                alt=""
                src={Dogtar4Business}
                className="dogtar-for-business-right-box-img"
                style={{ lineHeight: "1" }}
              />
              )}
            </div>
          </Grid>
        )}

        {/* ABSOLUTE img */}
        {!isMobileImg && (
          <img alt="" src={LocationsCircle} className="locations-circle-img" />
        )}
      </Grid>
    </section>
  );
}
export default DogtorForBusiness;
