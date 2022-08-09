const express = require('express');

const Contenedor = require('./contenedor')

const app = express();

const PORT = process.env.PORT || 8080;
const server = app.listen(8080, () =>{
    console.log(
        `Servidos Http escuchando en el puerto ${PORT}`
      );
})