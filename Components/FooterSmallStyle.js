import { makeStyles } from "@mui/styles";

export const FooterSmallStyle = makeStyles({
    footer_small_section: {
        background: "#000929",
        padding: "10px 150px",
  height: "200px",
  display: "flex",
  alignItems: "center",
            "& ul" : {
                    display:"flex",
                "& & li" : {
                    listStyle: "none",
                    color: "#FFFFFF", 
                },
            },
             "& p": { 
                color: "#FFFFFF", 
                fontSize: "20px" 
            } ,
},
 
  



});
