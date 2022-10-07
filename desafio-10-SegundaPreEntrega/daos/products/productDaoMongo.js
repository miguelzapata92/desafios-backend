import { ProductsModel } from "../../models/product.js";
import { MongoContainer } from "../../containers/MongoContainer.js";

const administrador = true

class ProductDaoMongoDb extends MongoContainer {

    constructor() {
        super(ProductsModel)
    }

    async getProductById (req, res) {  
        const { id } = req.params
        try {
            if (!id) {
                res.send(await super.getAll())
            } else {
                const product = await super.getProductById(id)
                if (product) {
                    res.send(product)
                } else {
                    res.status(400).json({ error: 'producto no encontrado' })
                }
            }
    
        } catch (error) {
            res.status(400).json({ error: `${error}` })
        }
    }
    
    async saveProduct (req, res) {       
        if (administrador == true) {
            const { name, price, urlImage, description, code, stock } = req.body                             
    
            if (!name || !price || !urlImage || !description || !code || !stock) {                          
                res.status(400).json({ error: 'Los datos ingresados están incompletos' })
            } else {
    
                const product = req.body                                                                      
                try {
                    await super.saveProduct(product)                                                             
                    res.status(200).json({ message: 'Producto guardado' })
                } catch (error) {
                    res.status(400).json({ error: `${error}` })
                }
            }
        } else {
            res.status(400).json({ message: 'No cumple con los requisitos para acceder a estas funcionalidades' })
        }
    }
    
    async updateProductByID (req, res) {
        if (administrador == true) {
            const { id } = req.params                                                                
            const { name, price, urlImage, description, code, stock } = req.body                      
    
            if (!name || !price || !urlImage || !description || !code || !stock) {                    
                res.status(400).json({ error: 'Los datos ingresados están incompletos'  })
            } else {
                try {
                    const product = await super.getProductById(id)
                    if (product) {
                        product[0].name = name
                        product[0].price = price
                        product[0].urlImage = urlImage
                        product[0].description = description
                        product[0].code = code
                        product[0].stock = stock
                        await super.updateById(product[0])
                        res.status(200).json({ message: 'Actualización exitosa' })
                    } else {
                        res.status(400).json({ error: 'El id ingresado no existe' })
                    }
                } catch (error) {
                    res.status(400).json({ error: `${error}` })
                }
            }
        } else {
            res.status(400).json({ messaje: 'No cumple con los requisitos para acceder a estas funcionalidades' })
        }
    }
    
    async deleteProductById (req, res) {  
        if (administrador == true) {
            const { id } = req.params
            try {
                await super.deleteProductById(id)
                res.status(200).json({ message: 'Producto borrado' })
            } catch (error) {
                res.status(400).json({ error: `${error}` })
            }
        } else {
            res.status(400).json({ message: 'No cumple con los requisitos para acceder a estas funcionalidades' })
        }
    }
}

export default ProductDaoMongoDb