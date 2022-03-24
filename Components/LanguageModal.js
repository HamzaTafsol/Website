import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, useMediaQuery } from "@mui/material";
import allCountries from "../Components/AllLanguages";
import { LanguagesStyle } from "./LanguagesStyle";
import { makeStyles } from "@mui/styles";

const LanguageModal = ({ open, handleClose }) => {
  const classes = LanguagesStyle();
  const isMobile = useMediaQuery("@media (max-width:900px)");
  console.log(isMobile);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isMobile ? "60%" : "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: !isMobile ? 5 : 0,
    p: !isMobile ? 4 : 0,
    overflowY: "scroll",
    height: !isMobile ? "88%" : "100%",
  };
  const useStyles = makeStyles({
    Icon:{
      "& .icon_close":{
          position: "absolute",
  right: !isMobile ? "0" : "90%", 
  top:!isMobile ?"0": "30px",
  
      }
    },
    modal_Head:{
      position:"relative",
      textAlign:"center",
      

  },
  modal_HeadMob:{
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ABE236",
    borderBottomRightRadius: "80px"
  },
  });

  const customClasses = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}
      className={classes.ModalMain}
      >
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          <Grid
            item
            md={12}
            className={!isMobile ? customClasses.modal_Head : customClasses.modal_HeadMob }
            style={{
              width: "100%",
            }}
          >
            {!isMobile &&(
              <>
              
              
            
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Combia tu idioma
              </Typography>
            </div>
            </>
            )}
            <div className={customClasses.Icon}>
              <CloseIcon onClick={handleClose} className="icon_close" />
            </div>
          </Grid>
          </Grid>
          <Grid container spacing={3} style={{ justifyContent: "center",padding:"0px 10px" }}
          
          className="scroll_fix"
          >

          <Grid
              item
              md={12}
              style={{
                width: "100%",
                textAlign: "center"
              }}
              >
            {isMobile &&(

  <Typography id="modal-modal-title" variant="h6" component="h2">
                Combia tu idioma
              </Typography>
)}
          </Grid>

          {allCountries?.map((item) => {
            return (
              <>
                <Grid
                  item
                  md={3}
                  sm={4}
                  xs={4}
                  className={classes.languages_main}
                >
                  <img
                    src={item?.image}
                    alt=""
                    style={{ borderRadius: "50%" }}
                    width={"40px"}
                    height={"40px"}
                  />
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{
                      textAlign: "center"
                    }}
                  >
                    {item?.language}
                  </Typography>
                </Grid>
              </>
            );
          })}
          </Grid>

      </Box>
    </Modal>
  );
};

export default LanguageModal;
