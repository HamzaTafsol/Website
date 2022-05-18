import { makeStyles } from "@mui/styles";
export const CellPhoneNumberModalStyle = makeStyles({
    ModalMain :{
        "& h3": { fontFamily: "'axiforma-bold' !important", fontSize: "26px !important" },
        "& .login_form>.MuiFormControl-root .MuiTextField-root": { 
            width: "93%"
         },
         "& .login_form": { 
             maxWidth: "57%",
              margin: "40px auto" 
          },
       
        "& .login_form>.MuiFormControl-root": { 
            width: "100%"
        },
        "& .login_form>.MuiFormControl-root svg": { 
            color: "#abe236" 
        },
      
        "& .login_form>.MuiFormControl-root .MuiPaper-elevation:last-child": {
            textAlign: "center",
            marginTop: "40px"
          },
          "& .MuiBackdrop-root": {
               backgroundColor: "#abe236" 
        },
        "& .login_form .form-control": {
            border: "0",
            borderBottom: "1px solid #BBBBBB",
            borderRadius: "0"
          },
          "& .login_form label": { 
              fontFamily: "'axiforma-reg'" ,
              color:"#BBBBBB"
          }
    },
    ".custom_modal": { backgroundColor: "#abe236" }
})