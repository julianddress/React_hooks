import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";

const DatosPersonales = ({ actualizarPaso }) => {

  const [name, setName] = useState({ value: '', valid: null})
  const [lastName, setLastName] = useState({ value: '', valid: null})
  const [phone, setPhone] = useState({ value: '', valid: null})

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
        actualizarPaso(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={ (e) => {
            const name = e.target.value
            const valid = validarNombre(name)
            console.log(name, valid)
            setName({value: name, valid: valid })}
        }
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa almenos 2 caracteres y maximo 25 caracteres"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={ (e) => {
            const apellido = e.target.value
            const valid = validarApellido(apellido)
            console.log(apellido, valid)
            setLastName({value: apellido, valid: valid })
          }
        }
        error={lastName.valid === false}
        helperText={lastName.valid === false && "Ingresa almenos 2 caracteres y maximo 25 caracteres"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={ (e) => {
            const phone = e.target.value
            const valid = validarTelefono(phone)
            console.log(phone, valid)
            setPhone({value: phone, valid: valid })
          }
        }
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingresa almenos 8 digitos y maximo 14 digitos"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
