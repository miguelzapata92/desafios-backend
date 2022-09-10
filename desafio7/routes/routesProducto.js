import express from 'express';


import { getProductById, addProduct, updateProduct, deleteProduct} from '../controllers/productosController.js'; 
const productoRouter = express.Router();



productoRouter.get('/:id?', (req, res) => getProductById(req, res));

productoRouter.post('/', (req, res) => addProduct(req, res));

productoRouter.put('/:id', (req, res) => updateProduct(req, res));

productoRouter.delete('/:id', (req, res) => deleteProduct(req, res));





export default productoRouter;