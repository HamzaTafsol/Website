import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import { typoMain } from "../Components/TypographyMain";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CommonContainer } from "../Components/CommonContainer";
import { IniciarSessionStyle } from "./IniciarSessionStyle";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FooterSmall from "../Components/FooterSmall";
const IniciarSession = () => {
  const typo = typoMain();
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    boxShadow: "unset",
  }));
  const conti = CommonContainer();
  const IniciarMain = IniciarSessionStyle();

  return (
    <>
      <Header />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className={`${conti.smallContainer}  ${IniciarMain.IniciarSessionStyle} `}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography
              component={"h2"}
              className={`${typo.h2} iniciar_heading`}
              align="left"
            >
              Iniciar Sesión
            </Typography>
            <Item>
            <div className="iniciar_para">
              <p> Introduce tu correo electrónico </p>
              </div>
            </Item>
          </Grid>
          <Grid item md={12}>
            <Item >
              <FormControl className="iniciar_form">
                <OutlinedInput placeholder="Introduce tu correo electrónico" />
                <Button variant="contained" className={typo.sign_in_btn} href="#" endIcon={<ArrowForwardIcon />}>
                SIGUIENTE
                </Button>
                <div className={typo.form_anchor_main}>
                    <div className={typo.form_inner_anchor}>
                        <span  style={{color:'#000929',}}>¿No tienes una cuenta? </span>
                        <Link href="#" underline="none">
                          {'Regístrate'}
                        </Link>
                    </div>
                   
                <div className={typo.form_inner_anchor}>
                <span style={{color:'#BBBBBB',}}>  Forgot password?</span>
                <Link href="#" underline="none">
                  {'Click Here'}
                </Link>
                </div>
              
                </div>
                

              </FormControl>
             
          
            </Item>
          </Grid>
        </Grid>
      </Box>
      <FooterSmall/>
    </>
  );
};

export default IniciarSession;
