import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { typoMain } from "./TypographyMain";
import { CaseModalStyles } from "./CaseModalStyles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MopedIcon from "@mui/icons-material/Moped";
const minus = "/images/minus.png";
const plus = "/images/plus.png";

export default function HamburModal({ setOpen, open, children }) {
  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 28,
    boxShadow: "0px 3px 6px #000000",
    right: -50,
    // left: -50px,
    zIndex: 1,
    width: 400,
    border: "1px solid transparent",
    padding: "40px",
    bgcolor: "background.paper",
    borderRadius: "15px",
  };
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
  }));
  const typo = typoMain();
  const classes = CaseModalStyles();

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }} className={classes.caseMain}>
        {open ? (
          <Box sx={styles}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <Typography
                    component={"h1"}
                    className={[typo.h4, "text-center "]}
                    align="center"
                  >
                    Tu Dogtor
                  </Typography>
                  <Grid item xs={12}>
                    <Item>
                      <AccessTimeIcon /> 20-30 min <MopedIcon /> 7,70 €
                    </Item>
                  </Grid>

                  <Grid item xs={12}>
                    <Item>
                      <span style={{ fontWeight: "bold" }}>Recargo</span> en
                      pedidos{" "}
                      <span style={{ fontWeight: "bold" }}>
                        inferiores a 10,00 €
                      </span>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>
                          <span style={{ marginRight: "20px" }}>1x</span>
                          <span>Producto</span>
                        </div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>
                          <img src={minus} />
                        </div>
                        <div>
                          <img src={plus} />
                        </div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>Código promocional</div>
                        <div></div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>Producto 1</div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>Producto 2</div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>Entrega</div>
                        <div>GRATIS</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div style={{ textAlign: "left" }}>
                          Suplemento de esta tienda por pedidos inferiores a 10
                          €
                        </div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>TOTAL</div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <Typography
                        component={"h1"}
                        className={[typo.h4, "text-center "]}
                        align="center"
                      >
                        Kiwoko
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>
                          <span style={{ marginRight: "20px" }}>1x</span>
                          <span>Producto</span>
                        </div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>
                          <img src={minus} />
                        </div>
                        <div>
                          <img src={plus} />
                        </div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>Producto 1</div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <div className="between-text-b">
                        <div>Producto 2</div>
                        <div>0,00 €</div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <Button
                        style={{
                          fontSize: "13px",
                        }}
                        className={typo.custom_btn}
                      >
                        Hacer mi pedido
                      </Button>
                    </Item>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
