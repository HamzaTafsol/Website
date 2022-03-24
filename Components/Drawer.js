import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { HiSearch } from "react-icons/hi";
import { DrawerStyles } from "./DrawerStyles";
import { IoClose } from "react-icons/io5";
import { AiOutlinePoweroff } from "react-icons/ai";
import LanguageModal from "./LanguageModal";
import SearchModal from "./SearchModal";

// const Logo = "/images/logo-for-mobile.svg";
const Logo = "/images/MobLogo.svg";
const LangIcon = "/images/language-icon.svg";
const UserIcon = "/images/user-icon.png";
const blackSmily = "/images/black-smily.svg";
const SearchIcon = "/images/search-icon.svg";

export default function NavDrawer({ openDrawer, setOpenDrawer, toggleDrawer }) {
  const links = [
    { title: "¿Qué necesitas?", icon: SearchIcon },
    { title: "Productos", icon: "" },
    { title: "Empresa", icon: "" },
    { title: "Seguridad", icon: "" },
    { title: "Ayuda", icon: blackSmily },
  ];
  const Styles = DrawerStyles();

  const [openModal, setOpenModal] = React.useState(false);
  const [openModalSearch, setOpenModalSearch] = React.useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseModalSearch = () => {
    setOpenModalSearch(false);
  };

const handleClick = (data) =>{
  console.log(data)
if(data.title == "¿Qué necesitas?" ){
  
console.log("run")
  setOpenModalSearch(true)

}
}
console.log(openModalSearch)


  return (
    <div>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        className={Styles.section}
      >
        <Box
          // className="header"
          role="presentation"
          sx={{ width: "100vw" }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="header">
            {/* DropDown */}
            <div className="a-center-sp">
              <div className="close_main">
                <IoClose className="close-icon" />
              </div>

              <select className="select">
                <option value="Ubicación actual">Ubicación actual</option>
              </select>
              <div></div>
            </div>
          </div>
          {/* Links */}
          <div className="links">
            <ul>
              <li>
                <img style={{maxWidth: "100%"}}
                className={Styles.Logos}
                src={Logo} />
              </li>
              <li>
                <span className="more-of">More Of Dogtor</span>
                {/* <span className="dogtor">Dogtor</span> */}
              </li>
              {links?.map((data, index) => {
                return (
                  <li
                  
                  onClick={()=> handleClick(data)}
                  
                  >
                    {data?.icon === "" ? (
                      <span className="gap" />
                    ) : (
                      <img src={data?.icon} />
                    )}
                    {data?.title}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="btns-box">
            <button className={"drawer-btn1 a-center"}>
              <img src={UserIcon} className="user-icon" />
              <span>Iniciar Sesión</span>
            </button>
            <button className={"drawer-btn2 a-center"}>
              <AiOutlinePoweroff size={15} />
              <span className={"ps1"}>Registrate</span>
            </button>
          </div>
          <div
            className="lang"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img src={LangIcon} />
            <span>ES-ES</span>
          </div>
          {/* <List>
            <ListItem>
              <ListItemIcon style={{ border: "1px solid" }}></ListItemIcon>
              <ListItemText style={{ border: "1px solid" }}>
                <span>Logo will be here</span>
              </ListItemText>
            </ListItem>
            {links.map((data, index) => (
              <ListItem button key={data?.title}>
                <ListItemIcon>{data?.icon}</ListItemIcon>
                <ListItemText primary={data?.title} />
              </ListItem>
            ))}
          </List> */}
        </Box>
        {/* {list("right")} */}
      </Drawer>
      {openModal && (
        <LanguageModal open={openModal} handleClose={handleCloseModal} />
      )}
      {
        openModalSearch &&(
          <SearchModal open={openModalSearch} handleClose={handleCloseModalSearch}  />
        )
      }
    </div>
  );
}
