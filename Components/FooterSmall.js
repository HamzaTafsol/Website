import { Grid, Link, Paper } from "@mui/material";
import React, { } from "react";
import { FooterSmallStyle } from "./FooterSmallStyle";
import { styled } from "@mui/material/styles";
import { CommonContainer } from "./CommonContainer";

const Logo = "/images/Logo.svg";


const FooterSmall = () => {
    const classes=FooterSmallStyle();
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        boxShadow: "unset",
      }));
    
  return (
    <div className={classes.footer_small_section}>
        <Grid container spacing={2}>
  <Grid  className={classes.test} item xs={4}>
    <Item style={{background:'#000929',}}>
    <div>
                        <img
                          src={Logo}
                          style={{
                            maxWidth: "100%",
                          }}
                        />
                      </div>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item style={{background:'#000929',}}>
        <div className="footer_para">
        <p>© 2021 Dogtor Technologies, Inc.</p>
        </div>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item style={{background:'#000929',}}>
    <div className="footer_para">
            <ul>
                <li><Link href="#" underline="none">
                  {'Política de privacidad'}
                </Link></li>
                <li><Link href="#" underline="none">
                  {'Términos de Uso'}
                </Link></li>
            </ul>
     </div>
    </Item>
  </Grid>
</Grid>
    </div>
  )
}

export default FooterSmall