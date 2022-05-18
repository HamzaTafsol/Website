import { makeStyles } from "@mui/styles";
export const EditaTusDatosFiscalesModalStyles = makeStyles({
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
            color: "#abe236",
            marginRight:"5px" 
        },
        "& .login_form>.MuiFormControl-root input": { 
            paddingBottom: "10px" 
        },
        "& .login_form>.MuiFormControl-root .MuiPaper-elevation:last-child": {
            textAlign: "center",
            
          },
          "& .MuiBackdrop-root": {
               backgroundColor: "#abe236" 
        },
        "& .login_form>.MuiFormControl-root .MuiPaper-root:nth-child(2) svg": {
            marginRight: "20px"
          },
          "& .sub_paragraph": {
            color: "#BBBBBB",
            fontFamily: "'axiforma-reg'",
            fontSize: "15px",
            maxWidth: "95%",
            margin: "20px auto 50px"
          },
          "& button": {
            width: "323px",
            height: "46px"
          },
          "& span": { 
              color: "red",
              fontFamily: "'axiforma-reg'",
            }
    },
    ".custom_modal": { backgroundColor: "#abe236" }
})