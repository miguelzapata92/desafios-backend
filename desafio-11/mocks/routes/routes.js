import express  from 'express';
const router = express.Router();
import  {generateProduct} from '../utils/generateProducts.js'


const listaProductos = [];

router.get('/api/productos-test', (req, res) =>{
    let data  = generateProduct();
    res.send(data)
})
router.get('/api', (req, res)=> {
    res.render('form')
})

export default router;
