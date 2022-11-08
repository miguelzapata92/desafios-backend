import express from 'express';
import { getProductById, addProduct, updateProduct, deleteProduct} from '../controllers/productosController.js'; 
import  productPostValidator from '../middlewares/productPostValidator.js';
import authValidator from '../middlewares/authValidator.js';

const productoRouter = express.Router();



productoRouter.get('/:id?', (req, res) => getProductById(req, res));

productoRouter.post('/', authValidator,  productPostValidator, (req, res) => addProduct(req, res));

productoRouter.put('/:id', authValidator,  (req, res) => updateProduct(req, res));

productoRouter.delete('/:id', (req, res) => deleteProduct(req, res));





export default productoRouter;