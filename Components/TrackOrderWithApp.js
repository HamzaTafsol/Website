import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { TrackOrderWithAppStyle } from "./TrackOrderWithAppStyle";
import { CommonContainer } from "./CommonContainer";
import { typoMain } from "./TypographyMain";
import DropDownResusable from "./DropDownResusable";
import { AppleStoreImage, GooglePlayImage } from "./Svgs";

function TrackOrderWithApp() {
  const classes = TrackOrderWithAppStyle();
  const conti = CommonContainer();
  const typo = typoMain();
  const isMobile = useMediaQuery("@media (max-width:768px)");
  const isMobile480 = useMediaQuery("@media (max-width:480px)");
  const is1440 = useMediaQuery("@media (max-width:1441px)");
  const min1440 = useMediaQuery("@media (min-width:1440px)");

  const [selectSection, setSelectSection] = useState("first-section");
  const MobileAppIcon = "/images/mobile-app-icon.png";
  const DashboardIcon = "/images/dashboard-icon.png";
  const DevelopmentIcon = "/images/development-icon.png";
  const SmartPhone = "/images/smart-phone.svg";
  const AppStore = "/images/app-store.svg";
  const TrackOrderSmallIcon1 = "/images/track-order-small-icon-1.svg";
  const TrackOrderSmallIcon2 = "/images/track-order-small-icon-2.svg";
  const TrackOrderDashboardImg = "/images/track-order-dashboard-img.png";
  const TrackOrderDevelopmentImg = "/images/track-order-development-img.png";
  const TrackOrderBgTop = "/images/track-order-bg.png";
  const TrackOrderBgBottom = "/images/track-order-btm-img.png";
  const Dogtar4Business = "/images/dogtor-for-business.svg";

const data = [ 
  {icon:MobileAppIcon, name:"Mobile App",value:"first-section"},
  {icon:DashboardIcon, name:"Dashboard",value:"second-section"},
  {icon:DevelopmentIcon, name:"Development",value:"third-section"},
]
console.log(!isMobile)
  return (
    <section
      className={classes.trackOrderSection}
      style={{
        width: "100%",
        height: "max-content",
        // paddingBottom: "5%",
        // backgroundColor: "#abe236",
        position: "relative",
        marginTop: "5%",
        zIndex: 1,
      }}
    >
      { !isMobile &&(

      <img
        alt=""
        className="bottom-circle-icon"
        src={TrackOrderSmallIcon2}
        style={{
          bottom:
            selectSection == "first-section" && is1440
              ? "17%"
              : selectSection == "first-section"
              ? "20%"
              : selectSection == "second-section" && is1440
              ? "15%"
              : selectSection == "second-section" && isMobile
              ? "11%"
              : selectSection == "third-section" && is1440
              ? "15%"
              : selectSection == "third-section" && is1440
              ? "20%"
              : "13%",
          // selectSection == "first-section"
          //   ? "20%"
          //   : selectSection == "second-section" && isMobile
          //   ? "11%"
          //   : selectSection == "third-section" && isMobile
          //   ? "10%"
          //   : "13%",
          // bottom: selectSection == "first-section" && !isMobile ? "20%" : "13%"
          // || selectSection == "first-section" && isMobile ? "14%" : "11%"
          // third
        }}
      />
      ) }
      { !isMobile &&(

      <img alt="" className="top-circle-icon" 
      
      style={{
        top: selectSection !== "first-section" && min1440 &&  "12%"
      }}
      src={TrackOrderSmallIcon1} />
      ) }

      <img className="bg-img-top" src={TrackOrderBgTop} />

      <Grid
        container
        spacing={2}
        className={conti.headerContainer}
        style={{
          width: "100%",
          margin: "-1px",
        }}
      >
        {selectSection === "first-section" && (
          <>
            <Grid container className="buttons-row">
              <Grid md={4} sm={4} xs={12}>
                <div className="a-center">
                  {!isMobile && (

                    <button className="mobile-app-btn btn bold-b">
                    <span className="track-order-btn-icon icon-1">
                      <img alt="" src={MobileAppIcon} className="btn-icon" />
                    </span>
                    Mobile App
                  </button>
                    )}
                    <div className="dropdown_main">
                    {isMobile && (

                      <DropDownResusable data={data} value={selectSection} setValue={setSelectSection}/>
                    )}
                      </div>
                </div>
              </Grid>
              {!isMobile && (
<>
              <Grid md={4} sm={4} xs={12}>
                <div className="a-center">
                  <button
                    className="dashboard-btn btn bold-b"
                    onClick={() => setSelectSection("second-section")}
                  >
                    <span className="track-order-btn-icon icon-2">
                      <img alt="" src={DashboardIcon} className="btn-icon" />
                    </span>
                    Dashboard
                  </button>
                </div>
              </Grid>
              <Grid md={4} sm={4} xs={12}>
                <div className="a-center">
                  <button
                    className="development-btn btn bold-b"
                    onClick={() => setSelectSection("third-section")}
                  >
                    <span className="track-order-btn-icon icon-3">
                      <img alt="" src={DevelopmentIcon} className="btn-icon" />
                    </span>
                    Development
                  </button>
                </div>
              </Grid>
</>
              )}

            </Grid>
            <Grid
              container
              className="track-order-main-content-row innerContainer"
            >
              <Grid lg={4} md={6} xs={6} className="cus_width">
                <div className="left-section">
                  <div className="text_width">

                  <p className="first-sec-heading">
                    <span>Sigue tus pedidos </span>
                    <Typography
                      component={"p"}
                      className={[typo.h2, "h2"]}
                      style={{ marginTop: "2px" }}
                    >
                      <span>con la </span>
                      <span className="app-dogtor">App de Dogtor</span>
                    </Typography>
                  </p>
                  <p className="tagline">
                    Rastrea todos tus pedidos en tiempo real,
                    <span className="d-block" style={{ marginTop: "10px",display:"block" }}>
                      y pide desde donde quieras.
                    </span>
                  </p>
                  </div>

                  { isMobile480  &&(


  <div className="right-section">
    <img alt="" src={SmartPhone} className="img-fluid" />
  </div>
)}

                  <div className="platforms">
                    <span style={{marginRight:"20px"}}>

       {GooglePlayImage}
                    </span>
                    <span>

                   {AppleStoreImage}
                    </span>
                  </div>
                </div>
              </Grid>
              { !isMobile480  &&(


<Grid lg={8} md={6} xs={6}>
  <div className="right-section">
    <img alt="" src={SmartPhone} className="img-fluid" />
  </div>
</Grid>
)}
            </Grid>
          </>
        )}

        {selectSection === "second-section" && (
          <Grid
            container
            className="dashboard-data-row innerContainer"
            style={{
              marginTop:
                selectSection == "second-section" && is1440 ? "15%" : "16.5%",
            }}
          >
            <Grid item lg={{ offset: 3, span: 6 }}>
              <Typography component="p" style={{ textAlign: "center" }}>
                Inicia entregas instantáneas o programadas con nuestra
                plataforma de entrega Saas
              </Typography>
              <h3>No se necesita integración de IT</h3>
            </Grid>

            <Grid item lg={11} md={11} xs={11}>
              <div className="dashboard-img">
                <img
                  alt=""
                  src={TrackOrderDashboardImg}
                  className="img-fluid"
                />
              </div>
            </Grid>
            <Grid item lg={1} md={1} xs={1}>
              <div className="close-icon-box">
                <AiOutlineClose
                  className="close-icon"
                  onClick={() => setSelectSection("first-section")}
                />
              </div>
            </Grid>
          </Grid>
        )}

        {selectSection === "third-section" && (
          <Grid container className="development-data-row innerContainer">
            <Grid item lg={{ offset: 3, span: 6 }}>
              <p>
                Integra nuestra <h3>API</h3> en tu método de pago y ofrece
                entregas instantáneas o programadas{" "}
                <h3>A TODOS TUS CLIENTES</h3>
              </p>
            </Grid>
            <Grid item lg={11} md={11} xs={11}>
              <div className="development-img">
                <img
                  alt=""
                  src={TrackOrderDevelopmentImg}
                  className="img-fluid"
                />
              </div>
            </Grid>
            <Grid item lg={1} md={1} xs={1}>
              <div className="close-icon-box">
                <AiOutlineClose
                  className="close-icon"
                  onClick={() => setSelectSection("first-section")}
                />
              </div>
            </Grid>
          </Grid>
        )}
      </Grid>
      <img className="bg-img-bottom" 
      style={{marginBottom:"-1px"}}
      src={TrackOrderBgBottom} />
      {/* <img className="bg-img-bottom" src={Dogtar4Business} /> */}
    </section>
  );
}

export default TrackOrderWithApp;

// import { Grid, Typography } from "@mui/material";
// import React, { useState } from "react";

// import { AiOutlineClose } from "react-icons/ai";
// import { TrackOrderWithAppStyle } from "./TrackOrderWithAppStyle";
// import { CommonContainer } from "./CommonContainer";
// import { typoMain } from "./TypographyMain";

// function TrackOrderWithApp() {
//   const classes = TrackOrderWithAppStyle();
//   const conti = CommonContainer();
//   const typo = typoMain();

//   const [selectSection, setSelectSection] = useState("first-section");
//   const MobileAppIcon = "/images/mobile-app-icon.png";
//   const DashboardIcon = "/images/dashboard-icon.png";
//   const DevelopmentIcon = "/images/development-icon.png";
//   const SmartPhone = "/images/smart-phone.svg";
//   const AppStore = "/images/app-store.svg";
//   const GooglePlay = "/images/google-play.svg";
//   const TrackOrderSmallIcon1 = "/images/track-order-small-icon-1.svg";
//   const TrackOrderSmallIcon2 = "/images/track-order-small-icon-2.svg";
//   const TrackOrderDashboardImg = "/images/track-order-dashboard-img.png";
//   const TrackOrderDevelopmentImg = "/images/track-order-development-img.png";
//   const TrackOrderBgTop = "/images/track-order-bg.png";
//   const TrackOrderBgBottom = "/images/track-order-btm-img.png";
//   return (
//     <section
//       className={classes.trackOrderSection}
//       style={{
//         width: "100%",
//         height: "max-content",
//         paddingBottom: "5%",
//         backgroundColor: "#abe236",
//         position: "relative",
//         marginTop: "5%",
//         zIndex: 1,
//       }}
//     >
//       <img className="bg-img-top" src={TrackOrderBgTop} />
//       <img className="bg-img-bottom" src={TrackOrderBgBottom} />
//       <img alt="" className="bottom-circle-icon" src={TrackOrderSmallIcon2} />
//       <img alt="" className="top-circle-icon" src={TrackOrderSmallIcon1} />

//       <Grid container spacing={2} className={conti.headerContainer}>
//         {selectSection === "first-section" && (
//           <>
//             <Grid container className="buttons-row">
//               <Grid md={4} sm={6} xs={12}>
//                 <div className="a-center">
//                   <button className="mobile-app-btn btn bold-b">
//                     <span className="track-order-btn-icon icon-1">
//                       <img alt="" src={MobileAppIcon} className="btn-icon" />
//                     </span>
//                     Mobile App
//                   </button>
//                 </div>
//               </Grid>
//               <Grid md={4} sm={6} xs={12}>
//                 <div className="a-center">
//                   <button
//                     className="dashboard-btn btn bold-b"
//                     onClick={() => setSelectSection("second-section")}
//                   >
//                     <span className="track-order-btn-icon icon-2">
//                       <img alt="" src={DashboardIcon} className="btn-icon" />
//                     </span>
//                     Dashboard
//                   </button>
//                 </div>
//               </Grid>
//               <Grid md={4} sm={6} xs={12}>
//                 <div className="a-center">
//                   <button
//                     className="development-btn btn bold-b"
//                     onClick={() => setSelectSection("third-section")}
//                   >
//                     <span className="track-order-btn-icon icon-3">
//                       <img alt="" src={DevelopmentIcon} className="btn-icon" />
//                     </span>
//                     Development
//                   </button>
//                 </div>
//               </Grid>
//             </Grid>
//             <Grid container className="track-order-main-content-row">
//               <Grid lg={4} md={6} xs={6}>
//                 <div className="left-section">
//                   <p className="first-sec-heading">
//                     <span>Sigue tus pedidos con la </span>
//                     <h2 className={typo.h2}>App de Dogtor</h2>
//                   </p>
//                   <p className="tagline">
//                     Rastrea todos tus pedidos en tiempo real, y pide desde donde
//                     quieras.
//                   </p>
//                   <div className="platforms">
//                     <img
//                       alt=""
//                       src={GooglePlay}
//                       className="track-order-app-platform"
//                     />
//                     <img
//                       alt=""
//                       src={AppStore}
//                       className="track-order-app-platform"
//                     />
//                   </div>
//                 </div>
//               </Grid>
//               <Grid lg={8} md={6} xs={6}>
//                 <div className="right-section">
//                   <img alt="" src={SmartPhone} className="img-fluid" />
//                 </div>
//               </Grid>
//             </Grid>
//           </>
//         )}

//         {selectSection === "second-section" && (
//           <Grid container className="dashboard-data-row">
//             <Grid item lg={{ offset: 3, span: 6 }}>
//               <Typography component="p" style={{ textAlign: "center" }}>
//                 Inicia entregas instantáneas o programadas con nuestra
//                 plataforma de entrega Saas
//               </Typography>
//               <h3>No se necesita integración de IT</h3>
//             </Grid>

//             <Grid item lg={11} md={11} xs={11}>
//               <div className="dashboard-img">
//                 <img
//                   alt=""
//                   src={TrackOrderDashboardImg}
//                   className="img-fluid"
//                 />
//               </div>
//             </Grid>
//             <Grid item lg={1} md={1} xs={1}>
//               <div className="close-icon-box">
//                 <AiOutlineClose
//                   className="close-icon"
//                   onClick={() => setSelectSection("first-section")}
//                 />
//               </div>
//             </Grid>
//           </Grid>
//         )}

//         {selectSection === "third-section" && (
//           <Grid container className="development-data-row">
//             <Grid item lg={{ offset: 3, span: 6 }}>
//               <p>
//                 Integra nuestra <h3>API</h3> en tu método de pago y ofrece
//                 entregas instantáneas o programadas{" "}
//                 <h3>A TODOS TUS CLIENTES</h3>
//               </p>
//             </Grid>
//             <Grid item lg={11} md={11} xs={11}>
//               <div className="development-img">
//                 <img
//                   alt=""
//                   src={TrackOrderDevelopmentImg}
//                   className="img-fluid"
//                 />
//               </div>
//             </Grid>
//             <Grid item lg={1} md={1} xs={1}>
//               <div className="close-icon-box">
//                 <AiOutlineClose
//                   className="close-icon"
//                   onClick={() => setSelectSection("first-section")}
//                 />
//               </div>
//             </Grid>
//           </Grid>
//         )}
//       </Grid>
//     </section>
//   );
// }

// export default TrackOrderWithApp;
