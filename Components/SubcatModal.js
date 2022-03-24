import {
  Box,
  Grid,
  InputLabel,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "67%",
  border: 0,
  overflowY: "scroll",
  maxHeight: "100%",
  //   height: "60%",
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  p: 4,

  "@media(max-width:600px)": {
    width: "100%",
  },
};

const SubcatModal = ({ open, handleClose, setOpenModal, name }) => {
  const [modalClose, setModalClose] = useState(true);
  const [active, setActive] = useState(0);
  const [activeBottom, setActiveBottom] = useState(0);
  const isMobile = useMediaQuery("@media (min-width:769px)");
  const isMobileLarge = useMediaQuery("@media (min-width:900px)");
  const Resturant = "/images/resturant.svg";
  useEffect(() => {
    return () => {
      setModalClose(true);
    };
  }, []);
  // const Item1 = styled(Paper)(({ theme }) => ({
  //     ...theme.typography.body2,
  //     padding: theme.spacing(2),
  //     paddingLeft: theme.spacing(0),
  //     paddingRight: theme.spacing(0),
  //     boxShadow: "none",
  //     // textAlign: "center",
  //     // color: theme.palette.text.secondary,
  //   }));
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    boxShadow: "none",
    backgroundColor: "unset",

    // color: theme.palette.text.secondary,
  }));
  const internal = makeStyles({
    Icon: {
      "& .icon_close": {
        position: "absolute",
        right: !isMobile ? "0" : "5%",
        top: !isMobile ? "0" : "55px",
      },
    },
    category_modal: {
      "& div": {
        overflow: isMobileLarge ? "hidden" : "scroll",
      },
      "& .display_icon": {
        display: "none",
      },
      "& .MuiBackdrop-root": {
        backgroundColor: "rgb(255 254 254 / 73%)",
      },
    },
    display_icons: {
      "& svg": {
        margin: "6px 5px 0",
      },
    },
    box: {
      backgroundColor: "#000",
      border: "4px solid #ABE236",
      color: "#ABE236",
      minHeight: "90px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 3,
    },
    deactiveBox: {
      //   backgroundColor: "#000",
      border: "1px solid #BBBBBB",
      color: "#000225",
      minHeight: "90px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 3,
    },
    placeholder: {
      width: "100%",
      height: "45px",
      border: "2px solid #BBBBBB",
      textAlign: "left",
      borderRadius: "3px",
      color: "#000225",
      padding: "5px 15px",
    },
    mainModal: {
      "& .second_input": {
        display: "flex",
        flexDirection: "column",
      },
      "& .third_input": {
        alignItems: "end",
        display: "flex",
        flexDirection: "column",
      },
      "& .second_input input": {
        width: isMobileLarge ? "95%" : "100%",
      },
      "& .third_input input": {
        width: isMobileLarge ? "95%" : "100%",
      },
      "& .third_label": {
        textAlign: "left",
        width: isMobileLarge ? "95%" : "100%",
      },
      "& .box": {
        width: isMobileLarge ? "15%" : "100%",
        display: "inline-block",
        minHeight: "90px",
        borderRadius: 3,
        marginBottom: !isMobileLarge && "20px",
        border: "1px solid #BBBBBB  ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
      "& .activeBot": {
        backgroundColor: "#000",
        border: "4px solid #ABE236",
        color: "#ABE236",
        minHeight: "90px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 3,
      },
      "& .btn1": {
        width: isMobileLarge ? "30%" : "100%",
        display: "inline-block",
        minHeight: "90px",
        borderRadius: 3,

        border: "1px solid #ABE236  ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
      "& .btn1 button": {
        backgroundColor: "#ABE236",
        width: "98%",
        borderRadius: "33px",
        height: isMobileLarge ? "60%" : "60px",
        border: "0",
      },
      "& .first_parent": {
        backgroundColor: "white",
        marginBottom: "40px",
        padding: "50px 30px 10px 20px",
        boxShadow: "10px 10px 12px #00000029",
        zIndex: 99,
      },
      "& .second_parent": {
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "10px 10px 12px #00000029",
      },
      "& .top_main_p": { display: isMobileLarge ? "flex" : "block" },
      "& .top_main_p p": {
        marginBottom: "0",
        marginRight: isMobileLarge && "30px",
        // alignItems: "end",
        display: "flex",
        alignItems: "center",

        justifyContent: !isMobileLarge && "left",
        width: !isMobileLarge && "100px",
        margin: !isMobileLarge && "20px auto",
      },
      "& .left_text ": { fontFamily: "axiforma-med", textAlign: "left" },
      "& input[type=radio]:before": {
        content: "'✓'",
        width: "100%",
        height: "100%",
        background: "#abe236",
        display: "flex",
        position: "absolute",
        borderRadius: "50%",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
      },
      "& input[type=radio]": {
        position: "relative",
        transform: "scale(1.3)",
        marginRight: "20px",
      },
      "& input[type=radio]:after": {
        content: "''",
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
        position: "absolute",
        borderRadius: "50%",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
      },
      "& input[type=radio]:checked::after": {
        display: "none",
      },
    },
  });
  const classes = internal();

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose(name);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.category_modal}
      >
        <Box sx={style} className={classes.mainModal} id="bdr_0">
          <div className="first_parent">
            <Grid
              container
              //   spacing={2}
              style={{
                height: "30%",
              }}
              // rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <div className={classes.Icon}>
                <CloseIcon onClick={() => {
          handleClose(name)}} className="icon_close" />
              </div>
              <Grid
                style={{ display: "flex", alignItems: "end" }}
                item
                sm={12}
                xs={12}
                md={4}
              >
                <Item>
                  <div>Estoy buscando un servicio para mi:</div>
                </Item>
              </Grid>
              <Grid item sm={12} xs={12} md={8}>
                <Item>
                  <div className="top_main_p">
                    <p>
                      {/* <CheckCircleIcon
                        style={{
                          color: "#ABE236",
                          marginRight: "6px",
                          fontSize: "21px",
                        }}
                      /> */}
                      <input type="radio" name="fav_language" />
                      Perro
                    </p>
                    <p>
                      <input type="radio" name="fav_language" />
                      Gato
                    </p>
                    <p>
                      <input type="radio" name="fav_language" />
                      Mamíferos
                    </p>
                    <p>
                      {/* <Brightness1Icon
                        style={{
                          marginRight: "6px",
                          fontSize: "21px",
                        }}
                      /> */}
                      <input type="radio" name="fav_language" />
                      Reptiles
                    </p>
                    <p>
                      {/* <Brightness1Icon
                        style={{
                          marginRight: "6px",
                          fontSize: "21px",
                        }}
                      /> */}
                      <input type="radio" name="fav_language" />
                      Otros
                    </p>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>

          <div className="second_parent">
            <Grid
              container
              spacing={6}
              style={{
                height: "30%",
                marginBottom: "20px",
              }}
              // rowSpacing={2}
              // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item sm={12} xs={12} md={6}>
                <Item className="left_text">
                  {" "}
                  Para cuando estás fuera de casa
                </Item>
              </Grid>
              <Grid item sm={12} xs={12} md={6}>
                <Item className="left_text"> Para cuando estés en casa</Item>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              style={{
                height: "30%",
                marginBottom: "20px",
              }}
              // rowSpacing={2}
              // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item sm={12} xs={12} md={3}>
                <Item
                  onClick={() => setActive(0)}
                  className={active == 0 ? classes.box : classes.deactiveBox}
                >
                  {" "}
                  {active == 0 && (
                    <svg
                      id="Capa_1"
                      data-name="Capa 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 9.555 8.604"
                    >
                      <path
                        id="Path_399"
                        data-name="Path 399"
                        d="M14.539,26.87h-6.9A1.328,1.328,0,0,0,6.31,28.2V31.65a1.328,1.328,0,0,0,1.326,1.326h6.9a1.33,1.33,0,0,0,1.326-1.326V28.2A1.33,1.33,0,0,0,14.539,26.87Zm-4.272.617h1.645v1.065a.747.747,0,0,1-.822.631.747.747,0,0,1-.822-.631Zm4.981,4.163a.711.711,0,0,1-.709.709H14.1V29.686a.308.308,0,1,0-.617,0v2.672H8.658V29.686a.308.308,0,1,0-.617,0v2.672H7.63a.711.711,0,0,1-.709-.709V28.2a.711.711,0,0,1,.709-.709h.411v.7a.308.308,0,1,0,.617,0v-.7h.993v1.065A1.353,1.353,0,0,0,11.09,29.8a1.353,1.353,0,0,0,1.439-1.248V27.487h.956v.7a.308.308,0,1,0,.617,0v-.7h.442a.711.711,0,0,1,.709.709Z"
                        transform="translate(-6.31 -24.372)"
                        fill="#abe236"
                      />
                      <path
                        id="Path_400"
                        data-name="Path 400"
                        d="M19.671,16.628a.308.308,0,0,0,.308-.308v-.643a.339.339,0,0,1,.339-.339h2.249a.339.339,0,0,1,.339.339v.87a.308.308,0,0,0,.617,0v-.87a.958.958,0,0,0-.956-.956H20.306a.956.956,0,0,0-.956.956v.648a.308.308,0,0,0,.321.3Z"
                        transform="translate(-16.669 -14.72)"
                        fill="#abe236"
                      />
                    </svg>
                  )}
                  Cuidadog
                  {active == 0 && (
                    <div className={classes.display_icons}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 11.962 11.907"
                      >
                        <path
                          id="Icon_material-wb-sunny"
                          data-name="Icon material-wb-sunny"
                          d="M4.632,3.158l-.979-.973-.767.767.973.973Zm-1.5,3.077H1.5V7.322H3.131ZM8.025.825H6.937v1.6H8.025V.825Zm4.051,2.126-.767-.767-.973.973.767.767ZM10.33,10.4l.973.979.767-.767-.979-.973-.761.761Zm1.5-4.165V7.322h1.631V6.235ZM7.481,3.516a3.262,3.262,0,1,0,3.262,3.262A3.265,3.265,0,0,0,7.481,3.516Zm-.544,9.216H8.025v-1.6H6.937ZM2.886,10.607l.767.767.973-.979L3.86,9.628Z"
                          transform="translate(-1.5 -0.825)"
                          fill="#abe236"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.486 5.801"
                      >
                        <path
                          id="Icon_awesome-arrows-alt-h"
                          data-name="Icon awesome-arrows-alt-h"
                          d="M9.955,10.892V12.1H3.531V10.892a.632.632,0,0,0-1.079-.447L.185,12.711a.632.632,0,0,0,0,.894l2.267,2.267a.632.632,0,0,0,1.079-.447V14.212H9.955v1.213a.632.632,0,0,0,1.079.447L13.3,13.605a.632.632,0,0,0,0-.894l-2.267-2.267A.632.632,0,0,0,9.955,10.892Z"
                          transform="translate(0 -10.258)"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 7.861 8.796"
                      >
                        <path
                          id="Icon_awesome-moon"
                          data-name="Icon awesome-moon"
                          d="M6.311,8.8A4.39,4.39,0,0,0,9.728,7.168a.206.206,0,0,0-.2-.332A3.445,3.445,0,0,1,7.18.455.206.206,0,0,0,7.115.074a4.4,4.4,0,1,0-.8,8.723Z"
                          transform="translate(-1.913)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  )}
                </Item>
              </Grid>

              <Grid item sm={12} xs={12} md={3}>
                <Item
                  onClick={() => setActive(1)}
                  className={active == 1 ? classes.box : classes.deactiveBox}
                >
                  {" "}
                  {active == 1 && (
                    <svg
                      id="Capa_1"
                      data-name="Capa 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 9.555 8.604"
                    >
                      <path
                        id="Path_399"
                        data-name="Path 399"
                        d="M14.539,26.87h-6.9A1.328,1.328,0,0,0,6.31,28.2V31.65a1.328,1.328,0,0,0,1.326,1.326h6.9a1.33,1.33,0,0,0,1.326-1.326V28.2A1.33,1.33,0,0,0,14.539,26.87Zm-4.272.617h1.645v1.065a.747.747,0,0,1-.822.631.747.747,0,0,1-.822-.631Zm4.981,4.163a.711.711,0,0,1-.709.709H14.1V29.686a.308.308,0,1,0-.617,0v2.672H8.658V29.686a.308.308,0,1,0-.617,0v2.672H7.63a.711.711,0,0,1-.709-.709V28.2a.711.711,0,0,1,.709-.709h.411v.7a.308.308,0,1,0,.617,0v-.7h.993v1.065A1.353,1.353,0,0,0,11.09,29.8a1.353,1.353,0,0,0,1.439-1.248V27.487h.956v.7a.308.308,0,1,0,.617,0v-.7h.442a.711.711,0,0,1,.709.709Z"
                        transform="translate(-6.31 -24.372)"
                        fill="#abe236"
                      />
                      <path
                        id="Path_400"
                        data-name="Path 400"
                        d="M19.671,16.628a.308.308,0,0,0,.308-.308v-.643a.339.339,0,0,1,.339-.339h2.249a.339.339,0,0,1,.339.339v.87a.308.308,0,0,0,.617,0v-.87a.958.958,0,0,0-.956-.956H20.306a.956.956,0,0,0-.956.956v.648a.308.308,0,0,0,.321.3Z"
                        transform="translate(-16.669 -14.72)"
                        fill="#abe236"
                      />
                    </svg>
                  )}
                  Ojeadog
                  {active == 1 && (
                    <div className={classes.display_icons}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 11.962 11.907"
                      >
                        <path
                          id="Icon_material-wb-sunny"
                          data-name="Icon material-wb-sunny"
                          d="M4.632,3.158l-.979-.973-.767.767.973.973Zm-1.5,3.077H1.5V7.322H3.131ZM8.025.825H6.937v1.6H8.025V.825Zm4.051,2.126-.767-.767-.973.973.767.767ZM10.33,10.4l.973.979.767-.767-.979-.973-.761.761Zm1.5-4.165V7.322h1.631V6.235ZM7.481,3.516a3.262,3.262,0,1,0,3.262,3.262A3.265,3.265,0,0,0,7.481,3.516Zm-.544,9.216H8.025v-1.6H6.937ZM2.886,10.607l.767.767.973-.979L3.86,9.628Z"
                          transform="translate(-1.5 -0.825)"
                          fill="#abe236"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.486 5.801"
                      >
                        <path
                          id="Icon_awesome-arrows-alt-h"
                          data-name="Icon awesome-arrows-alt-h"
                          d="M9.955,10.892V12.1H3.531V10.892a.632.632,0,0,0-1.079-.447L.185,12.711a.632.632,0,0,0,0,.894l2.267,2.267a.632.632,0,0,0,1.079-.447V14.212H9.955v1.213a.632.632,0,0,0,1.079.447L13.3,13.605a.632.632,0,0,0,0-.894l-2.267-2.267A.632.632,0,0,0,9.955,10.892Z"
                          transform="translate(0 -10.258)"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 7.861 8.796"
                      >
                        <path
                          id="Icon_awesome-moon"
                          data-name="Icon awesome-moon"
                          d="M6.311,8.8A4.39,4.39,0,0,0,9.728,7.168a.206.206,0,0,0-.2-.332A3.445,3.445,0,0,1,7.18.455.206.206,0,0,0,7.115.074a4.4,4.4,0,1,0-.8,8.723Z"
                          transform="translate(-1.913)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  )}
                </Item>
              </Grid>

              <Grid item sm={12} xs={12} md={3}>
                <Item
                  onClick={() => setActive(2)}
                  className={active == 2 ? classes.box : classes.deactiveBox}
                >
                  {" "}
                  {active == 2 && (
                    <svg
                      id="Capa_1"
                      data-name="Capa 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 9.555 8.604"
                    >
                      <path
                        id="Path_399"
                        data-name="Path 399"
                        d="M14.539,26.87h-6.9A1.328,1.328,0,0,0,6.31,28.2V31.65a1.328,1.328,0,0,0,1.326,1.326h6.9a1.33,1.33,0,0,0,1.326-1.326V28.2A1.33,1.33,0,0,0,14.539,26.87Zm-4.272.617h1.645v1.065a.747.747,0,0,1-.822.631.747.747,0,0,1-.822-.631Zm4.981,4.163a.711.711,0,0,1-.709.709H14.1V29.686a.308.308,0,1,0-.617,0v2.672H8.658V29.686a.308.308,0,1,0-.617,0v2.672H7.63a.711.711,0,0,1-.709-.709V28.2a.711.711,0,0,1,.709-.709h.411v.7a.308.308,0,1,0,.617,0v-.7h.993v1.065A1.353,1.353,0,0,0,11.09,29.8a1.353,1.353,0,0,0,1.439-1.248V27.487h.956v.7a.308.308,0,1,0,.617,0v-.7h.442a.711.711,0,0,1,.709.709Z"
                        transform="translate(-6.31 -24.372)"
                        fill="#abe236"
                      />
                      <path
                        id="Path_400"
                        data-name="Path 400"
                        d="M19.671,16.628a.308.308,0,0,0,.308-.308v-.643a.339.339,0,0,1,.339-.339h2.249a.339.339,0,0,1,.339.339v.87a.308.308,0,0,0,.617,0v-.87a.958.958,0,0,0-.956-.956H20.306a.956.956,0,0,0-.956.956v.648a.308.308,0,0,0,.321.3Z"
                        transform="translate(-16.669 -14.72)"
                        fill="#abe236"
                      />
                    </svg>
                  )}
                  Paseadog
                  {active == 2 && (
                    <div className={classes.display_icons}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 11.962 11.907"
                      >
                        <path
                          id="Icon_material-wb-sunny"
                          data-name="Icon material-wb-sunny"
                          d="M4.632,3.158l-.979-.973-.767.767.973.973Zm-1.5,3.077H1.5V7.322H3.131ZM8.025.825H6.937v1.6H8.025V.825Zm4.051,2.126-.767-.767-.973.973.767.767ZM10.33,10.4l.973.979.767-.767-.979-.973-.761.761Zm1.5-4.165V7.322h1.631V6.235ZM7.481,3.516a3.262,3.262,0,1,0,3.262,3.262A3.265,3.265,0,0,0,7.481,3.516Zm-.544,9.216H8.025v-1.6H6.937ZM2.886,10.607l.767.767.973-.979L3.86,9.628Z"
                          transform="translate(-1.5 -0.825)"
                          fill="#abe236"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.486 5.801"
                      >
                        <path
                          id="Icon_awesome-arrows-alt-h"
                          data-name="Icon awesome-arrows-alt-h"
                          d="M9.955,10.892V12.1H3.531V10.892a.632.632,0,0,0-1.079-.447L.185,12.711a.632.632,0,0,0,0,.894l2.267,2.267a.632.632,0,0,0,1.079-.447V14.212H9.955v1.213a.632.632,0,0,0,1.079.447L13.3,13.605a.632.632,0,0,0,0-.894l-2.267-2.267A.632.632,0,0,0,9.955,10.892Z"
                          transform="translate(0 -10.258)"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 7.861 8.796"
                      >
                        <path
                          id="Icon_awesome-moon"
                          data-name="Icon awesome-moon"
                          d="M6.311,8.8A4.39,4.39,0,0,0,9.728,7.168a.206.206,0,0,0-.2-.332A3.445,3.445,0,0,1,7.18.455.206.206,0,0,0,7.115.074a4.4,4.4,0,1,0-.8,8.723Z"
                          transform="translate(-1.913)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  )}
                </Item>
              </Grid>

              <Grid item sm={12} xs={12} md={3}>
                <Item
                  onClick={() => setActive(3)}
                  className={active == 3 ? classes.box : classes.deactiveBox}
                >
                  {" "}
                  {active == 3 && (
                    <svg
                      id="Capa_1"
                      data-name="Capa 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 9.555 8.604"
                    >
                      <path
                        id="Path_399"
                        data-name="Path 399"
                        d="M14.539,26.87h-6.9A1.328,1.328,0,0,0,6.31,28.2V31.65a1.328,1.328,0,0,0,1.326,1.326h6.9a1.33,1.33,0,0,0,1.326-1.326V28.2A1.33,1.33,0,0,0,14.539,26.87Zm-4.272.617h1.645v1.065a.747.747,0,0,1-.822.631.747.747,0,0,1-.822-.631Zm4.981,4.163a.711.711,0,0,1-.709.709H14.1V29.686a.308.308,0,1,0-.617,0v2.672H8.658V29.686a.308.308,0,1,0-.617,0v2.672H7.63a.711.711,0,0,1-.709-.709V28.2a.711.711,0,0,1,.709-.709h.411v.7a.308.308,0,1,0,.617,0v-.7h.993v1.065A1.353,1.353,0,0,0,11.09,29.8a1.353,1.353,0,0,0,1.439-1.248V27.487h.956v.7a.308.308,0,1,0,.617,0v-.7h.442a.711.711,0,0,1,.709.709Z"
                        transform="translate(-6.31 -24.372)"
                        fill="#abe236"
                      />
                      <path
                        id="Path_400"
                        data-name="Path 400"
                        d="M19.671,16.628a.308.308,0,0,0,.308-.308v-.643a.339.339,0,0,1,.339-.339h2.249a.339.339,0,0,1,.339.339v.87a.308.308,0,0,0,.617,0v-.87a.958.958,0,0,0-.956-.956H20.306a.956.956,0,0,0-.956.956v.648a.308.308,0,0,0,.321.3Z"
                        transform="translate(-16.669 -14.72)"
                        fill="#abe236"
                      />
                    </svg>
                  )}
                  Banadog
                  {active == 3 && (
                    <div className={classes.display_icons}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 11.962 11.907"
                      >
                        <path
                          id="Icon_material-wb-sunny"
                          data-name="Icon material-wb-sunny"
                          d="M4.632,3.158l-.979-.973-.767.767.973.973Zm-1.5,3.077H1.5V7.322H3.131ZM8.025.825H6.937v1.6H8.025V.825Zm4.051,2.126-.767-.767-.973.973.767.767ZM10.33,10.4l.973.979.767-.767-.979-.973-.761.761Zm1.5-4.165V7.322h1.631V6.235ZM7.481,3.516a3.262,3.262,0,1,0,3.262,3.262A3.265,3.265,0,0,0,7.481,3.516Zm-.544,9.216H8.025v-1.6H6.937ZM2.886,10.607l.767.767.973-.979L3.86,9.628Z"
                          transform="translate(-1.5 -0.825)"
                          fill="#abe236"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 13.486 5.801"
                      >
                        <path
                          id="Icon_awesome-arrows-alt-h"
                          data-name="Icon awesome-arrows-alt-h"
                          d="M9.955,10.892V12.1H3.531V10.892a.632.632,0,0,0-1.079-.447L.185,12.711a.632.632,0,0,0,0,.894l2.267,2.267a.632.632,0,0,0,1.079-.447V14.212H9.955v1.213a.632.632,0,0,0,1.079.447L13.3,13.605a.632.632,0,0,0,0-.894l-2.267-2.267A.632.632,0,0,0,9.955,10.892Z"
                          transform="translate(0 -10.258)"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 7.861 8.796"
                      >
                        <path
                          id="Icon_awesome-moon"
                          data-name="Icon awesome-moon"
                          d="M6.311,8.8A4.39,4.39,0,0,0,9.728,7.168a.206.206,0,0,0-.2-.332A3.445,3.445,0,0,1,7.18.455.206.206,0,0,0,7.115.074a4.4,4.4,0,1,0-.8,8.723Z"
                          transform="translate(-1.913)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  )}
                </Item>
              </Grid>
            </Grid>
            <Grid style={{ marginBottom: "20px" }} container spacing={4}>
              <Grid item sm={12} xs={12} md={4}>
                <Item>
                  <InputLabel
                    style={{
                      marginBottom: "10px",
                      color: "#000225",
                    }}
                    className="left_text"
                  >
                    Alojamiento de perros cerca de
                  </InputLabel>
                  <input
                    className={classes.placeholder}
                    placeholder="Código postal o dirección"
                  />
                </Item>
              </Grid>
              <Grid item sm={12} xs={12} md={4}>
                <Item className="second_input">
                  <InputLabel
                    style={{
                      marginBottom: "10px",
                      color: "#000225",
                    }}
                    className="left_text"
                  >
                    Para esos días
                  </InputLabel>
                  <input
                    className={classes.placeholder}
                    placeholder="Código postal o dirección"
                    type="date"
                  />
                </Item>
              </Grid>
              <Grid item sm={12} xs={12} md={4}>
                <Item className="third_input">
                  <InputLabel
                    style={{
                      marginBottom: "10px",
                      color: "#000225",
                    }}
                    className={"third_label"}
                  >
                    Para esos días
                  </InputLabel>
                  <input
                    className={classes.placeholder}
                    placeholder="Código postal o dirección"
                    type="date"
                  />
                </Item>
              </Grid>
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={12}
              style={{
                marginBottom: "10px",
              }}
            >
              <Item>
                <InputLabel
                  style={{
                    color: "#000225",
                  }}
                  className="left_text"
                >
                  El tamaño de mi perro
                </InputLabel>
              </Item>
            </Grid>
            <Grid style={{ height: "30%" }} container spacing={4}>
              <Grid item sm={12} xs={12} md={12} style={{ height: "100%" }}>
                <Item
                  style={{
                    height: "100%",
                    display: isMobileLarge ? "flex" : "block",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className={`test box ${activeBottom == 0 && `activeBot`} `}
                    onClick={() => setActiveBottom(0)}
                  >
                    <div>Pequeño</div>
                    <div>0-7kg</div>
                  </div>
                  <div
                    className={`test box ${activeBottom == 1 && `activeBot`}`}
                    onClick={() => setActiveBottom(1)}
                  >
                    <div>Mediano </div>
                    <div>7-18kg</div>
                  </div>
                  <div
                    className={`test box ${activeBottom == 2 && `activeBot`}`}
                    onClick={() => setActiveBottom(2)}
                  >
                    <div>Grande </div>
                    <div>18-45kg</div>
                  </div>
                  <div
                    className={`test box ${activeBottom == 3 && `activeBot`}`}
                    onClick={() => setActiveBottom(3)}
                  >
                    <div>Gigante </div>
                    <div>45+kg</div>
                  </div>
                  <div className=" btn1" style={{ border: 0 }}>
                    <button>Buscar</button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SubcatModal;
