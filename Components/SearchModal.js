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
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const SearchModal = ({ open, handleClose }) => {
  const setting = "/images/setting_search.svg";

  const classes = LanguagesStyle();
  const isMobile = useMediaQuery("@media (max-width:900px)");
  console.log(isMobile);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: !isMobile ? "60%" : "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: !isMobile ? 5 : 0,
    p: !isMobile ? 4 : 4,
    overflowY: "scroll",
    height: !isMobile ? "88%" : "100%",
  };
  const useStyles = makeStyles({
    Icon: {
      "& .icon_close": {
        position: "absolute",
        right: !isMobile ? "0" : "90%",
        top: !isMobile ? "0" : "55px",
      },
    },
    Icon2: {
      position: "absolute",
      left: !isMobile ? "0" : "90%",
      top: !isMobile ? "0" : "55px",
    },
    modal_Head: {
      position: "relative",
      textAlign: "center",
    },
    modal_HeadMob: {
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
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
      <Box sx={style}>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          <Grid
            item
            md={12}
            className={
              !isMobile ? customClasses.modal_Head : customClasses.modal_HeadMob
            }
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div className={customClasses.Icon}>
              <CloseIcon onClick={handleClose} className="icon_close" />
            </div>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              ¿Qué necesitas?
              </Typography>
            </div>

            <div className={customClasses.Icon2}>
              <img src={setting} className="icon_close" />
            </div>
          </Grid>
          <Grid item md={12}
          style={{width:"100%"}}
          
          >
          <Search
          style={{width:"100%"}}
          >
            <SearchIconWrapper>
              <SearchIcon style={{zIndex:"999"}}/>
            </SearchIconWrapper>
            <StyledInputBase
          style={{width:"100%",backgroundColor:"#F9F9F9",
          borderRadius:"20px"
        
        }}

              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SearchModal;
