import fs from 'fs';
import { fileURLToPath } from 'url'
import path from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataProducts = path.join(__dirname, '../databases/productos.txt')


const listaProductos = [];

const readAndParseFile = async () => {  
    try {
        const data = await fs.promises.readFile(dataProducts, 'utf-8')
        const parsedData = JSON.parse(data);
        return parsedData;                                                       
    } catch (error) {
        console.error(`El error es: ${error}`)
    }
}


const getProductById = async (req, res) => {
    const idProducto = req.params.id
    try {
        const data = await readAndParseFile()

        //devuelve un producto según su id
        const producto = data.filter(e=> e.id == idProducto)
      
        if(producto){
            res.send(producto)
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
        const dbProduct = await readAndParseFile();
        product.id = dbProduct.length + 1;                                                                  // Insertamos el ID en el producto
        product.timeStamp = Date.now()   
        dbProduct.push(product);
        await fs.promises.writeFile('./databases/productos.txt', JSON.stringify(dbProduct, null, 2), err => {
            if(err) throw err
        })
        
    } catch (error) {
        console.error(`El error es: ${error}`)
    }

    res.send(product)

    /*listaProductos.push(data);
    data.id = listaProductos.length;
    res.send(listaProductos)*/
}

const updateProduct = (req, res) => {
    //recibe y actualiza un producto segun su id
    const idProducto = req.params.id
    if(!idProducto){
        res.status(400).json({ error : 'El producto solicitado no existe'})
    }
    let producto = listaProductos.find(element => element.id = idProducto)
    let productoNuevo = {
        "id": producto.id,
        "name": req.body.name ? req.body.name : producto.name,
        "price": req.body.price ? req.body.price : producto.price,
        "thumbnail": req.body.thumbnail ? req.body.thumbnail : producto.thumbnail,
        
    }
    producto = productoNuevo;
    res.send(producto)
}

const deleteProduct = (req, res) => {
    //elimina un producto segun su id
    let idProducto = req.params.id
    listaProductos.splice(idProducto -1 , 1)
    res.send(listaProductos);
}

export { listaProductos, getProductById, addProduct, updateProduct, deleteProduct}