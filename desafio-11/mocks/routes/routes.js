const { generateProduct} = require('../utils/generateProducts');
const express = require('express');

const router = express.Router();

const listaProductos = [];

router.post('/productos', (req, res) => {
    const { title, price, thumbnail } = req.body;
    listaProductos.push({ title, price, thumbnail });

    console.log(listaProductos)

})

router.get('/productos', (req, res) => {
    res.render('form');
})

router.get('/listaproductos', (req, res) => {
    //res.render('productos', { listaProductos });
})

router.get('/api/productos-test', (req, res) =>{
    const data  = generateProduct();
    res.send(data)
})

module.exports = {router, listaProductos};
