const express= require('express')
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct} from '../controllers/productosController'; 
const router = express.Router();


router.get('/', (req, res) => getAllProducts(req, res));

router.get('/:id?', (req, res) => getProductById(req, res));

router.post('/', (req, res) => addProduct(req, res));

router.put('/:id', (req, res) => updateProduct(req, res));

router.delete('/:id', (req, res) => deleteProduct(req, res));





module.exports = router