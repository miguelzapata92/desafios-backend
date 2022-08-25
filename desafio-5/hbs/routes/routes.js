
const express= require('express')
const router = express.Router();

const listaProductos = [];

router.get('/productos', (req, res) => {
    res.render('form');
})

router.get('/listaproductos', (req, res) => {
    res.render('productos', { listaProductos });
})

router.post('/productos', (req, res) => {
    const { name, price, thumbnail } = req.body;
    listaProductos.push({ name, price, thumbnail });
    res.render('form');
})

module.exports = router;




module.exports = router;