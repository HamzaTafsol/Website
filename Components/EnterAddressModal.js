import React from "react";
import ModalSkeleton from "./ModalSkeleton";
import { Grid } from "@mui/material";
import { enterAddressModalStyle } from "./EnterAddressModalStyles";
import { IoClose } from "react-icons/io5";

const EnterAddressModal = ({ open, setOpen, onUpdate }) => {
  const classes = enterAddressModalStyle();
  return (
    <ModalSkeleton open={open} setOpen={setOpen} className={classes.modal}>
      <section className={classes.section}>
      <div className="close_main"
      style={{
        display: "flex",
        justifyContent: "end"

      }}
      >
                <IoClose
                style={{cursor:"pointer"}}
                onClick={() => setOpen(false)}
                fontSize={20}
                className="close-icon" />
              </div>
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
