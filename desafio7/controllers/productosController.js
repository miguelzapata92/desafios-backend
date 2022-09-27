import fs from 'fs';
import { fileURLToPath } from 'url'
import path from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataProducts = path.join(__dirname, '../databases/productos.txt')


const administrador = true;

const readAndParseFile = async (file) => {  
    try {
        const data = await fs.promises.readFile(file, 'utf-8')
        const parsedData = JSON.parse(data);
        return parsedData;                                                       
    } catch (error) {
        console.error(`El error es: ${error}`)
    }
}

const getAll = async (req, res) =>{
    const data = await readAndParseFile(dataProducts);
    return res.json(data);
}


const getProductById = async (req, res) => {
    const idProducto = req.params.id
    
    if(idProducto == undefined) return getAll(req, res);
    try {
        const data = await readAndParseFile(dataProducts)

        //devuelve un producto según su id
        const producto = data.filter(e=> e.id == idProducto)
      
        if(producto){
            res.json(producto)
        }else{
            res.status(400).json({ error : 'El producto solicitado no existe'})
        }
    } catch (error) {
        console.log(error)
    }
}

const addProduct = async (req, res) => {

    const product = req.body;

    try {
        const dbProduct = await readAndParseFile(dataProducts);
        product.id = dbProduct.length + 1;                                                                  // Insertamos el ID en el producto
        product.timeStamp = Date.now()   
        dbProduct.push(product);
        await fs.promises.writeFile(dataProducts, JSON.stringify(dbProduct, null, 2), err => {
            if(err) throw err
        })
        
    } catch (error) {
        console.error(`El error es: ${error}`)
    }

    res.send(product)

}

const updateProduct = async (req, res) => {
    //recibe y actualiza un producto segun su id
    const idProducto = req.params.id
   
    try {
        const dbProduct = await readAndParseFile(dataProducts);
        if(dbProduct.idProducto = false){
            res.status(400).json({ error : 'El producto solicitado no existe'})
        }
        let producto = dbProduct.find(element => element.id = idProducto)
        let productoNuevo = {
            "name": req.body.name ? req.body.name : producto.name,
            "price": req.body.price ? req.body.price : producto.price,
            "urlImage": req.body.urlImage ? req.body.urlImage : producto.urlImage,
            "description": req.body.description ? req.body.description : producto.description,
            "code": req.body.code ? req.body.code : producto.code,
            "stock": req.body.stock ? req.body.stock : producto.stock,
            "id": producto.id,
        }
        producto = productoNuevo;
        await fs.promises.writeFile(dataProducts, JSON.stringify(dbProduct, null, 2), err=>{
            if(err) throw err
        })
        res.send(producto)
    } catch (error) {
        console.log(error)
    }

}

const deleteProduct = async (req, res) => {
    //elimina un producto segun su id

    if (administrador) {
        let idProducto = req.params.id
        try {
            const dbProduct = await readAndParseFile(dataProducts)
            const prodIndex = dbProduct.findIndex(product => product.id == idProducto)                             
            if ( prodIndex != -1) {                                                                     
                dbProduct.splice(prodIndex, 1)                                                            
                await fs.promises.writeFile(dataProducts, JSON.stringify(dbProduct, null, 2), err => {     
                    if(err) throw err
                })
                res.status(200).json({ message : 'Se ha borrado el producto con éxito' })
            } else {
                res.status(400).json({ error : 'id no existente' })
            }
        res.send(dbProduct);
    } catch (error) {
         console.log(error);
        }
    } else {
        res.status(400).json({ message : 'Usted no tiene permiso para acceder a estas funcionalidades' })
    }
    
    

}

export { getProductById, addProduct, updateProduct, deleteProduct};