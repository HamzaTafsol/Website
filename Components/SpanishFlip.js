import React, { useEffect, useState } from "react";
import { FiFlag } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import EnterAddressModal from "./EnterAddressModal";
import LocationSelectionModal from "./LocationSelectionModal";
import { MdKeyboardArrowDown } from "react-icons/md";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Grid,
  Paper,
  Box,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { SpanishFlipStyle } from "./SpanishFlipStyle";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
import Carousel from "react-elastic-carousel";
import SubcatModal from "./SubcatModal";
const more_icon = "/images/more_icon.svg";
import Link from "next/link";

// Category
function CircleItem({
  image,
  title,
  data,
  item,
  setSelectedData,
  setSelectedCategory,
}) {
  const classes = SpanishFlipStyle();

  return (
    <div
      className="banner-circle-card-col"
      onClick={() => setSelectedCategory(item)}
    >
      <div className="banner-circle-card" onClick={() => setSelectedData(data)}>
        <img alt="" className="" src={image} />
        <Typography
          component={"p"}
          style={{ display: { md: "flex", sm: "none", xs: "none" } }}
          className="title"
        >
          {title}
        </Typography>
      </div>
      <Typography
        component={"p"}
        display={{ sm: "flex", md: "none", xs: "flex" }}
        className="title-on-mobile"
      >
        {title}
      </Typography>
    </div>
  );
}
// SubCategory
function CircleItemSubCat({ image, title, data, setSelectedData }) {
  const [open, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const modalOpenCat = "Cuidadog";
  const handleClick = (title) => {
    if (title == modalOpenCat) {
      setOpenModal(!open);
      // handleOpen();
    }
  };

  useEffect(() => {
    console.log({ open });
  }, [open]);

  const classes = SpanishFlipStyle();
  const typo = typoMain();
  const isMobile = useMediaQuery("@media (max-width:768px)");

  return (
    <>
      <div
        className="banner-circle-card-col"
        onClick={() => handleClick(title)}
      >
        <div className="banner-circle-card">
          <img alt="" className="" src={image} />

          {!isMobile && <p>{title}</p>}
        </div>
        <p className="title-on-mobile">{title}</p>
      </div>

      {
        <SubcatModal
          setOpenModal={setOpenModal}
          name={modalOpenCat}
          open={open}
          handleClose={handleClick}
        />
      }
    </>
  );
}

// Slider
function SliderSection() {
  const classes = SpanishFlipStyle();
  const image = "/images/fancy-2.png";
  const data = [1, 2, 3];

  return (
    <div className={"slider-section"}>
      <Carousel itemsToScroll={1} itemsToShow={1}>
        {data?.map((item1) => {
          return (
            <Grid container>
              <Grid item sm={3} xs={3} md={2}>
                <Avatar src={image} className="avatar" />
              </Grid>
              <Grid item sm={9} xs={9} md={10}>
                <h5>Envio Gratis</h5>
                <h6
                  style={{
                    textAlign: "end",
                  }}
                >
                  CON EL CODIGO: HAPPYDOGTOR
                </h6>
              </Grid>
            </Grid>
          );
        })}
      </Carousel>
    </div>
  );
}

function SpanishFlip({
  circleCardsData,
  setSelectedData,
  selectedCategory,
  setSelectedCategory,
  setterFunction,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [login, setLogin] = useState(false);
  const isMobile = useMediaQuery("@media (max-width:768px)");

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    // textAlign: "center",
    // color: theme.palette.text.secondary,
  }));
  const conti = CommonContainer();
  React.useEffect(() => {
    setLogin(localStorage.getItem("login"));
  }, []);
  const classes = SpanishFlipStyle();

  const typo = typoMain();
  const currLoc = "/images/current-loc.png";
  const flagIcon = "/images/flag-icon.png";

  return (
    <Box
      sx={{ flexGrow: 1, marginTop: "120px" }}
      className={classes.banner_section}
    >
      <Grid
        container
        spacing={2}
        className={conti.headerContainer}
        style={{ justifyContent: "center" }}
      >
        <Grid item md={12} className="home_first">
          <Item>
            <Typography
              component={"h1"}
              className={[typo.h1, "text-center"]}
              align="center"
            >
              ¡Los españoles <span className="heading-gap">FLIPAN!</span>
            </Typography>

            <Typography
              align="center"
              className={typo.h2}
              color="black"
              component={"h2"}
            >
              Volamos por ti en{" "}
              <span onClick={() => setOpenLocationModal(true)}>
                <span className="madrid">Madrid</span>
                <MdKeyboardArrowDown color="black" className="arrow-down" />
              </span>
            </Typography>
          </Item>
        </Grid>
        <Grid md={12} style={{ width: "80%" }}>
          {isMobile ? (
            <SliderSection />
          ) : !login ? (
            <div className="address-box">
              <div className="address-flag-icon">
                <img src={flagIcon} className="flag-icon" />
              </div>
              <Grid lg={7} md={7} sm={9} xs={9} className="a-center">
                <input
                  className={classes.banner_section_input}
                  placeholder="¿Cual es tu dirección de entrega?"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
              </Grid>
              <Grid lg={1} md={1} sm={3} xs={3} className="address_bar_icon">
                <img
                  src={currLoc}
                  style={{
                    cursor: "pointer",
                  }}
                  className="loc-icon"
                />
              </Grid>
              <Grid lg={4} md={4} className="use-current-location">
                <span style={{ cursor: "pointer" }}>Usar ubicacion actual</span>
              </Grid>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", fontSize: "40px", color: "#000225", fontFamily: "axiforma-book", paddingTop: "40px" }}>Entrega en 
                <span style={{ fontFamily: "axiforma-bold", paddingLeft: "10px", textDecoration: "underline" }}>
                  <Link href="#!">
                    Calle Eduardo Chillida 219B
                  </Link>
                </span>
              </div>
            </>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center" }}F
        className={classes.cusCont}
      >
        <div className="banner-cards">
          <Grid container spacing={2} className="inner_div">
            {selectedCategory?.subCategories
              ? selectedCategory?.subCategories
                  ?.slice(
                    0,
                    selectedCategory?.subCategories.length > 5 &&
                      showMore == true
                      ? 5
                      : selectedCategory?.subCategories.length
                  )
                  ?.map((item, i) => {
                    return (
                      <Grid item xs={4} sm={4} md={2} key={i}>
                        <Item>
                          <CircleItemSubCat
                            item={item}
                            title={item?.title}
                            data={item?.data}
                            image={item?.image}
                            setSelectedData={setSelectedData}
                            setSelectedCategory={setSelectedCategory}
                          />
                        </Item>
                      </Grid>
                    );
                  })
              : circleCardsData?.map((item, i) => {
                  return (
                    <Grid item xs={4} sm={3} md={2} key={i}>
                      <Item>
                        <CircleItem
                          item={item}
                          title={item?.title}
                          data={item?.data}
                          image={item?.image}
                          setSelectedData={setSelectedData}
                          setSelectedCategory={setSelectedCategory}
                        />
                      </Item>
                    </Grid>
                  );
                })}
            {selectedCategory?.subCategories && (
              <>
                {showMore && selectedCategory?.subCategories.length > 5 && (
                  <Grid item xs={4} sm={4} md={2}>
                    <Item>
                      <div className="banner-circle-card-col">
                        <div
                          className="banner-circle-card"
                          onClick={() => setShowMore((prev) => !prev)}
                        >
                          <img alt="" className="" src={more_icon} />

                          {!isMobile && <p>Mas</p>}
                        </div>
                        <p className="title-on-mobile">Mas</p>
                      </div>
                    </Item>
                  </Grid>
                )}
              </>
            )}
          </Grid>
          {selectedCategory?.subCategories && (
            <AiOutlineCloseCircle
              className="close-icon"
              onClick={() => {
                setterFunction(0);
                setShowMore(true);
                setSelectedCategory({});
              }}
            />
          )}
        </div>
      </Grid>

      <LocationSelectionModal
        open={openLocationModal}
        setOpen={setOpenLocationModal}
      />
      {isOpen && <EnterAddressModal open={isOpen} setOpen={setIsOpen} />}
    </Box>
  );
}

export default SpanishFlip;
