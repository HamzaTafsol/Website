import { makeStyles } from "@mui/styles";
export const PasswordModalStyle = makeStyles({
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
            color:"#BBBBBB"
        },
        "& .login_form>.MuiFormControl-root input": { 
            paddingBottom: "10px" 
        },
        "& .login_form>.MuiFormControl-root .MuiPaper-elevation:last-child": {
            textAlign: "center",
            marginTop: "20px"
          },
          "& .MuiBackdrop-root": {
               backgroundColor: "#abe236" 
        },
        "& .login_form>.MuiFormControl-root .MuiInputBase-formControl": {
            width: "100%",
          },
          "& .login_form>.MuiFormControl-root .MuiPaper-root": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          "& .login_form>.MuiFormControl-root .MuiPaper-root>svg": {
            marginRight: "20px"
          },
          "& .login_form": {
               padding: "35px 20px 0" 
          },
          "& .login_form button.makeStyles-custom_btn-11": {
            width: "323px",
            height: "46px"
          }
    },
    ".custom_modal": { backgroundColor: "#abe236" }
})