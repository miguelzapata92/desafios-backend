import { Router } from "express"
import { productsController } from '../controllers/productosController.js'
import authValidator from "../middlewares/authValidator.js"
import productPostValidator from "../middlewares/productPostValidator.js"

const productsRouter = Router()
// 
productsRouter.get('/:id?', productsController.getProductById)

productsRouter.post('/',authValidator, productPostValidator, productsController.saveProduct)


productsRouter.put('/:id',authValidator, productsController.updateProductByID)


productsRouter.delete('/:id',authValidator, productsController.deleteProductById)

export default productsRouter