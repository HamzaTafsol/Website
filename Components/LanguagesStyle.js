import { makeStyles } from "@mui/styles";

export const LanguagesStyle = makeStyles({
    ModalMain:{
"& h1": { 
    fontFamily: "'axiforma-bold' !important",
    fontSize: "30px !important",
    marginBottom: "40px",
    marginTop: "15px" 
},
"& h2":{
    fontSize:"15px",
    fontFamily: "'axiforma-bold'"
},
"& .icon_close": { 
    top: "10px !important", },
"& .scroll_fix::-webkit-scrollbar":{
    width: "10px",
},
"& .scroll_fix::-webkit-scrollbar-track":{
    background: "#f1f1f1",
},
"& .scroll_fix::-webkit-scrollbar-thumb":{
    background: "#888",
},
"& .scroll_fix::-webkit-scrollbar-thumb:hover":{
    background: "#555",
},
"& .MuiGrid-item.MuiGrid-grid-md-3:last-child": {
    width: "100%",
    flexBasis: "80%",
    marginRight: "auto",
    cssFloat: "left"
  },

  "& .lang_btn": {
    width: "255px",
    height: "55px",
    backgroundColor: "#ABE236",
    border: "0",
    borderRadius: "50px",
    fontFamily: "'axiforma-semi-bold'",
    fontSize: "15px",
    marginBottom: "10px"
  },
  
  
    },
    languages_main:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginBottom: "35px"

    },
   

});
