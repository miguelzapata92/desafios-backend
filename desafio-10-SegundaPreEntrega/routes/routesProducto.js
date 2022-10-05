import express from 'express';
import { ProductDao } from '../daos/products/productDaoMongo.js';
import  productPostValidator from '../middlewares/productPostValidator.js';
import authValidator from '../middlewares/authValidator.js';
import { productsController } from '../controllers/productosController.js';

const productoRouter = express.Router();


productoRouter.get('/:id?', productsController.getProductById);

//productoRouter.post('/', authValidator,  productPostValidator, (req, res) => addProduct(req, res));

//productoRouter.put('/:id', authValidator,  (req, res) => updateProduct(req, res));

//productoRouter.delete('/:id', (req, res) => deleteProduct(req, res));





export default productoRouter;