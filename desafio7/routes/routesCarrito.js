import express from 'express';
import { GetCartById, AddCartProduct, DeleteProdInCartByID, DeleteCart, GetProdInCartById} from '../controllers/carritoControllers.js'; 

const carritoRouter = express.Router();



carritoRouter.get('/:id?', (req, res) => GetCartById(req, res));

carritoRouter.delete('/:id', (req, res) => DeleteCart(req, res));

carritoRouter.get('/:id?', (req, res) => GetProdInCartById(req, res));

carritoRouter.post('/', (req, res) => AddCartProduct(req, res));

carritoRouter.delete('/:id', (req, res) => DeleteProdInCartByID(req, res));




export default carritoRouter; 