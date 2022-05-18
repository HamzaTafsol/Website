import { makeStyles } from "@mui/styles";
export const MisMétodosModalStyle = makeStyles({
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
              //  padding: "35px 150px 0" 
              padding: "35px 95px 0" 
          },
          "& button": {
            width: "323px",
            height: "46px"
          },
          "& .card_detail p": {
            fontFamily: "'axiforma-reg'",
            fontSize: "15px",
            display: "block"
          },
          "& .delete_icon": { 
              cssFloat: "right" 
            },
            "& .card_border": {
                border: "2px solid #8EE304",
                borderRadius: "10px",
                height: "80px",
                marginBottom: "40px"
              },
              "& .add_payment": { textAlign: "center" },
            "& .add_payment p": {
                color: "#636060",
                fontFamily: "'axiforma-reg'",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px"
            }
    },
    ".custom_modal": { backgroundColor: "#abe236" }
})