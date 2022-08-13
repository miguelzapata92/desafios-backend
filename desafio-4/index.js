const express = require('express');
const { Router } = express;

const app = express();

const PORT = 8080

//creo el enrutador
const productos = Router();

const frase = "todo ok";

productos.get('/', (req, res) =>{
    // Devuelve todos los productos
    res.send(frase)
})

productos.get('/', (req, res) =>{
    // Devuelve todos los productos según su ID
})

productos.post('/', (req, res) => {
    //recibe y agrega un producto según su id
})

productos.delete('/', (req, res) => {
    //elimina un producto según su id
})



app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})