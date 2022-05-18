import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { typoMain } from "./TypographyMain";
import { HamburModalStyles } from "./HamburModalStyles";
const dummy = "/images/dummy.png";

export default function HamburModal({ setOpen, open, children }) {
  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 28,
    boxShadow: "0px 3px 6px #000000",
    right: -50,
    // left: -150,
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
  const classes = HamburModalStyles();

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }} className={classes.hamburMain}>
        {open ? (
          <Box sx={styles}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <Box style={{ display: "flex" }}>
                    <Box style={{ width: "30%" }}>
                      <img className="bg_round" src={dummy} alt="dummy" />
                    </Box>
                    <Box style={{ width: "100%" }} className="flex_text">
                      <Box className="text-betwen">
                        <Box style={{ color: "#9796A1", fontSize: "12px" }}>
                          20 Jun, 10:30{" "}
                          <span style={{ marginLeft: "5px" }}>3 Items</span>
                        </Box>
                        <Box>
                          <span style={{ color: "#636060", fontSize: "15px" }}>
                            15.30€
                          </span>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          component={"h1"}
                          className={[typo.p, "text-center"]}
                          align="left"
                        >
                          Partner Name
                        </Typography>
                        <Typography
                          component={"h1"}
                          className={[typo.smallP, "text-center ball_b"]}
                          align="left"
                          style={{ marginLeft: "10px" }}
                        >
                          On the way
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={{ display: "flex", marginTop: "20px" }}>
                    <Button
                      style={{
                        fontSize: "13px",
                        marginRight: "20px",
                        backgroundColor: "#F1F1F1",
                      }}
                      className={typo.custom_btn}
                    >
                      Problems
                    </Button>
                    <Button
                      style={{
                        fontSize: "13px",
                        color: "#fff",
                      }}
                      className={typo.custom_btn}
                    >
                      Track order
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component={"h4"}
                  className={[typo.h4]}
                  align="center"
                  style={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Ultimas Ordenes
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Box style={{ display: "flex" }}>
                    <Box style={{ width: "30%" }}>
                      <img className="bg_round" src={dummy} alt="dummy" />
                    </Box>
                    <Box style={{ width: "100%" }} className="flex_text">
                      <Box className="text-betwen">
                        <Box style={{ color: "#9796A1", fontSize: "12px" }}>
                          20 Jun, 10:30{" "}
                          <span style={{ marginLeft: "5px" }}>3 Items</span>
                        </Box>
                        <Box>
                          <span style={{ color: "#636060", fontSize: "15px" }}>
                            15.30€
                          </span>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          component={"h1"}
                          className={[typo.p, "text-center"]}
                          align="left"
                        >
                          Partner Name
                        </Typography>
                        <Typography
                          component={"h1"}
                          className={[
                            typo.smallP,
                            "text-center ball_b ball_2b",
                          ]}
                          align="left"
                          style={{ color: "#ABE236", marginLeft: "10px" }}
                        >
                          Order Delivered
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={{ display: "flex", marginTop: "20px" }}>
                    <Button
                      style={{
                        fontSize: "13px",
                        marginRight: "20px",
                        backgroundColor: "#F1F1F1",
                      }}
                      className={typo.custom_btn}
                    >
                      Rate
                    </Button>
                    <Button
                      style={{
                        fontSize: "13px",
                        color: "#fff",
                      }}
                      className={typo.custom_btn}
                    >
                      Re-Order
                    </Button>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
