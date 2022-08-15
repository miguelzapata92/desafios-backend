const express = require('express');
const { Router } = express;

const app = express();

const PORT = 8080

//creo el enrutador
const router = Router();

const frase = "todo ok";
const id = 2

router.get(`/productos`, (req, res) =>{
    // Devuelve todos los productos
    res.send(frase)
})

router.get(`/productos/:${id}`, (req, res) =>{
    //si el id no existe se devolvera el objeto error


    // Devuelve todos los productos según su ID

    
})

router.post('/productos', (req, res) => {
    //recibe y agrega un producto según su id
})

router.put(`/productos/:${id}`, (req, res) => {

})

router.delete(`/productos/:${id}`, (req, res) => {
    //si el id no existe se devolvera el objeto error

    //elimina un producto según su id
})

app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

