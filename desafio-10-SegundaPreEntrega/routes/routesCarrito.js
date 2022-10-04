import express from 'express';
import { GetCartById, AddCartProduct, DeleteProdInCartByID, DeleteCart, GetProdInCartById} from '../controllers/carritoControllers.js'; 
import authValidator from '../middlewares/authValidator.js';
const carritoRouter = express.Router();



carritoRouter.get('/:id?', (req, res) => GetCartById(req, res));

carritoRouter.delete('/:id', authValidator, (req, res) => DeleteCart(req, res));

carritoRouter.get('/:id?', (req, res) => GetProdInCartById(req, res));

carritoRouter.post('/', authValidator, (req, res) => AddCartProduct(req, res));

carritoRouter.delete('/:id', authValidator, (req, res) => DeleteProdInCartByID(req, res));




export default carritoRouter; 