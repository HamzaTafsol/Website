import React from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Grid } from "@mui/material";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { GrFormLocation } from "react-icons/gr";
import { locationSelectionModalStyles } from "./LocationSelectionModalStyles";
import { typoMain } from "./TypographyMain";
import { CommonContainer } from "./CommonContainer";

const locIcon = "/images/loc-icon.png";
const closeIcon = "/images/close-icon.png";

function LocationSelectionModal({ open, setOpen }) {
  const typo = typoMain();
  const conti = CommonContainer();
  const classes = locationSelectionModalStyles();
  return (
    <ModalSkeleton
      open={open}
      setOpen={setOpen}
      className={classes.locationModal}
      noRadius
    >
      <section className={classes.section}>
        <Grid container className={conti.headerContainer}>
          <Grid item lg={12}>
            <img
              src={closeIcon}
              className="cancel-icon"
              onClick={() => setOpen(false)}
            />
            <div className="location-heading-and-input">
              <h1 className={typo.h1}>
                <img src={locIcon} className="location-icon" />
                <span>Selecciona un continente</span>
              </h1>
              <input placeholder="America, Europa, Asia…" />
            </div>
          </Grid>
        </Grid>
      </section>
    </ModalSkeleton>
  );
}

export default LocationSelectionModal;
