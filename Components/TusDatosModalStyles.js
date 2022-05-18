import { makeStyles } from "@mui/styles";
export const TusDatosStyle = makeStyles({
    ModalMain :{
        "& h3": { fontFamily: "'axiforma-bold' !important", fontSize: "26px !important" },
        "& .login_form>.MuiFormControl-root .MuiTextField-root": { 
            width: "93%"
         },
        "& .login_form>.MuiFormControl-root p": {
          marginLeft: "30px",
          marginBottom: "0",
          fontFamily: "'axiforma-reg'",
          color: "#BBBBBB"
        },
        "& .login_form>.MuiFormControl-root": { 
            width: "100%"
        },
        "& .login_form>.MuiFormControl-root svg": { 
            color: "#abe236" 
        },
        "& .login_form>.MuiFormControl-root input": { 
            paddingBottom: "10px" 
        },
        "& .login_form>.MuiFormControl-root .MuiPaper-elevation:last-child": {
            textAlign: "center",
            marginTop: "20px",
          },
          "& .MuiBackdrop-root": {
               backgroundColor: "#abe236" 
        },
        "& button": {
            width: "323px",
            height: "46px"
          },
    },
    ".custom_modal": { backgroundColor: "#abe236" }
})