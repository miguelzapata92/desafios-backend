import { express } from 'express';
const router = express.Router();

const listaProductos = [];

router.get('/api/productos-test', (req, res) =>{
    const data  = generateProduct();
    res.send(data)
})

module.exports = {router, listaProductos};
