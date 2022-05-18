import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "../Components/Header";
import { typoMain } from "../Components/TypographyMain";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CommonContainer } from "../Components/CommonContainer";
import { Volamos } from "../Components/Svgs";
import { ValamosStyles } from "./ValamosStyles";
const Valamos = () => {
  const [phone, setPhone] = useState(null);
  const typo = typoMain();

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    boxShadow: "unset",
  }));
  const conti = CommonContainer();
  const classes = ValamosStyles();

  return (
    <>
      <Header />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className={`${conti.verySmallContainer} ${classes.ValamosMain} `}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Item>
              <div className="center_main">
                {Volamos}
                <Typography
                  component={"h2"}
                  className={[typo.h2, "text-center"]}
                  align="center"
                >
                  Valamos por ti
                </Typography>
                <Typography
                  component={"h2"}
                  className={[typo.smallP, "text-center"]}
                  align="center"
                  style={{ marginBottom: "20px" }}
                >
                  Ingresa tu numero móvil
                </Typography>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  //   onChange={phone => setPhone({ phone })}
                />
                <Button
                  style={{ width: "100%", justifyContent: "center" }}
                  variant="contained"
                  className={typo.sign_in_btn}
                  href="#"
                >
                  Continuar
                </Button>
                <p>O conéctate aquí usando una cuenta social.</p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Valamos;
