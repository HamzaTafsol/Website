import { makeStyles } from "@mui/styles";

export const LanguagesStyle = makeStyles({
    ModalMain:{
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
    },
    languages_main:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginBottom: "35px"

    },
   

});
