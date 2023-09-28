import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {

  const [step, setStep] = useState(2)

  const actualizarPaso = (step) =>{
    setStep(step);
  }

  const steps = {
    0: <DatosUsuario actualizarPaso={actualizarPaso}/>,
    1: <DatosPersonales actualizarPaso={actualizarPaso}/>,
    2: <DatosEntrega actualizarPaso={actualizarPaso}/>,
    3: <Complete actualizarPaso={actualizarPaso}/>
  }
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
