import React from "react";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./Validaciones";

const DatosUsuario = ({ actualizarPaso }) => {
  
  const [email, setEmail] = useState({value: '', valid: null})
  const [password, setPassword] = useState({value: '', valid: null})

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
          actualizarPaso(1)
          console.log(email, password)
        }}
        onBlur={() => {
          if(email.valid && password.valid){
            console.log("Siguiente formulario")
          }else{
            console.log("No hacer nada")
          }
      }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid === false}
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          value={email.value}
          onChange={ (e) => {
            const email = e.target.value
            const valida = validarEmail(email)
            setEmail({value: email, valid: valida })}
          }
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          value={password.value}
          error={password.valid === false}
          helperText={password.valid === false && "La contraseña debe tener almenos 8 caracteres y maximo 20."}
          onChange={ (e) => {
            const password = e.target.value
            const valida = validarPassword(password)
            setPassword({value: password, valid: valida })
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
}

export default DatosUsuario;
