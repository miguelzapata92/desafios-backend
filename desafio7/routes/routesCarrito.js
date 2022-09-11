import express from 'express';
import { GetCartById, AddCartProduct, UpdateCart, DeleteCart} from '../controllers/carritoControllers.js'; 

const carritoRouter = express.Router();



carritoRouter.get('/:id?', (req, res) => GetCartById(req, res));

carritoRouter.post('/', (req, res) => AddCartProduct(req, res));

carritoRouter.put('/:id', (req, res) => UpdateCart(req, res));

carritoRouter.delete('/:id', (req, res) => DeleteCart(req, res));



export default carritoRouter 