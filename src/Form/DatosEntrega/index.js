import React, { useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ actualizarPaso }) => {

  const [address, setAddress] = useState({ value: '', valid: null})
  const [city, setCity] = useState({ value: '', valid: null})
  const [province, setProvince] = useState({ value: '', valid: null})

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={ (e) => { 
        e.preventDefault() 
        actualizarPaso(3)
        console.log(address, city, province)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange={ (e) => {
            const address = e.target.value
            const valid = validarInput(address)
            console.log(address, valid)
            setAddress({value: address, valid: valid })}
        }
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa almenos 4 caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={ (e) => {
            const city = e.target.value
            const valid = validarInput(city)
            console.log(city, valid)
            setCity({value: city, valid: valid })}
        }
        error={city.valid === false}
        helperText={city.valid === false && "Ingresa almenos 4 caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={ (e) => {
            const province = e.target.value
            const valid = validarInput(province)
            console.log(province, valid)
            setProvince({value: province, valid: valid })}
        }
        error={province.valid === false}
        helperText={province.valid === false && "Ingresa almenos 4 caracteres"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
