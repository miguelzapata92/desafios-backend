import { Router } from "express"
import { productsController } from '../controllers/productosController.js'

const productsRouter = Router()

productsRouter.get('/:id?', productsController.getProductById)

productsRouter.post('/', productsController.saveProduct)


productsRouter.put('/:id', productsController.updateProductByID)


productsRouter.delete('/:id', productsController.deleteProductById)

export default productsRouter