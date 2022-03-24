import React from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Grid } from "@mui/material";
import { enterAddressModalStyle } from "./EnterAddressModalStyles";

const EnterAddressModal = ({ open, setOpen, onUpdate }) => {
  const classes = enterAddressModalStyle();
  return (
    <ModalSkeleton open={open} setOpen={setOpen} className={classes.modal}>
      <section className={classes.section}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}> 
            <p className="heading">Ingresa tu dirección</p>
            <p className="tagline">¿Dónde quieres recibir tu pedido?</p>
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <input placeholder="Ingresa tu dirección" />
          </Grid>
          <Grid item lg={12} md={12} sm={12}>
            <button>Buscar</button>
          </Grid>
        </Grid>
      </section>
    </ModalSkeleton>
  );
};

export default EnterAddressModal;
