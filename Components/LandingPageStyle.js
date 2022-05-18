import { makeStyles } from "@mui/styles";
import { textAlign } from "@mui/system";

export const LandingPageStyle = makeStyles({
    WaitingList:{
    "& .wait_list_form": { 
        
        padding: "5px 0 5px",
    },
    "& .custom_header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "17px 27px 0 70px"
    },
    "& .language_main": { 
      color: "#abe236",
      display: "flex",
    },
    "& .btn1": {
      background: "#abe236",
      border: "0",
      borderRadius: "30px",
      padding: "8px 11px",
      display: "flex",
      alignItems: "center",
      marginLeft: "23px"
    },
    "& .btn1 span": {
       fontFamily: "'axiforma-bold'"
     },
    "& .language_main svg": { 
      marginRight: "7px" 
    },
    "& .language_main .lang": { 
      display: "flex",
      alignItems: "center"
       },
    "& .wait_list_form>.MuiFormControl-root": {
         display: "block" 
     },
    "& .wait_list_form>.MuiFormControl-root .MuiFilledInput-root": {
        backgroundColor: "#fff",
        borderRadius: "10px",
        margin: "0 8px"
      },
      "& .wait_list_form>.MuiFormControl-root .MuiFilledInput-root input": {
        padding: "10px 30px",
        color  :"#B9B9B9",
        textAlign: "center"
      },
      "& .wait_list_form>.MuiFormControl-root label": {
           paddingLeft: "30px"
         },
      "& .wait_list_form>.MuiFormControl-root .MuiFilledInput-root:before": {
        border: "0"
      },
      "& .wait_list_form>.MuiFormControl-root .Mui-focused": {
        color: "#B9B9B9"
      },
      "& .wait_list_form>.MuiFormControl-root .MuiFilledInput-root.Mui-focused:after": {
        border: "0 !important"
      },
      "& .wait_list_form p": {
           color: "#abe236", 
           fontSize: "17px",
           fontFamily: "axiforma-semi-bold", 
        },
        "& .wait_list_form button": {
            backgroundColor: "#ABE236",
            borderRadius: "30px",
            padding: "10px 60px",
            color: "#080808",
            textTransform: "capitalize"
          },
          "& .launch_count a": {
            color: "#ABE236",
            textTransform: "uppercase",
            marginTop: "50px",
            fontFamily: '"axiforma-extra-bold"',
            textDecoration: "underline"

          },
          "& .launch_count": { 
              marginTop: "40px"
         },
         "& .wait_list_form p:last-child": {
              color: "#fff",
              fontFamily: '"axiforma-med"',
             },
        "& .landing_page_heading h1": { 
            color: "#FFFFFF",
            fontFamily: "'axiforma-heavy'",
            fontSize: "60px" ,
            marginBottom: "0"
        },
        "& .landing_page_heading p": {
             color: "#abe236",
              fontSize: "45px" ,
              fontFamily: "'axiforma-heavy'",
              marginTop: "0",
         },
         "& .custom_modal_main": { 
             display: "flex",
              justifyContent: "center",
              marginLeft: "27%",
              "@media (max-width:1600px)": {
                marginLeft: "20%",
            },
        },
         "& .tour_modal": { 
             color: "#fff"
        },
         "& .tour_modal h1": { 
            fontSize: "44px",
            fontFamily:"axiforma-heavy",
            marginTop:"10px",

        },
        "& .social_icon": {
             display: "block",
              color: "#fff",
               marginTop: "40%"
         },
        "& .social_icon ul": {
            listStyle: "none",
            padding: "0",
            display: "flex",
            justifyContent: "end"
        },
        "& .social_icon ul li": {
             padding: "0 6px" 
        },
        "& .social_icon h4": {
             textAlign: "right",
             marginRight: "20px",
             fontFamily:"'axiforma-reg'"
            },
            "& .bike_img": { 
              position: "relative", bottom: "-9px"
             },
             "& .close_main": { position: "relative" },
             "& .close_main img.close-icon": { position: "absolute", top: "20px" }

        

}});
