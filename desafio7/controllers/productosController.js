import fs from 'fs';
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataProducts = path.join(__dirname, '../databases/productos.txt')


const listaProductos = [];

const readAndParseFile = async (file) => {  // Esta funcion se utiliza para leer el archivo y parsear a JSON la informacion, para su posterior uso

    try {
        const data = await fs.promises.readFile(file, 'utf-8', (err, data) => {         // Consultamos por la informacion
            if(err) throw err
            return data
        })
        return JSON.parse(data)                                                         // Retornamos la informacion parseada
    } catch (error) {
        console.error(`El error es: ${error}`)
    }
}

const getProductById = async (req, res) => {
    const idProducto = req.params.id
    try {
        const data = await readAndParseFile(dataProducts)
        if(!idProducto){
            res.status(400).json({ error : 'El producto solicitado no existe'})
        }
        //devuelve un producto según su id
        const producto = data.filter(e=> e.id == idProducto)
        res.send(producto)
    } catch (error) {
        
    }
}

const addProduct = async (req, res) => {

    const product = req.body;

    try {
        const dbProduct = readAndParseFile(dataProducts);
        dbProduct.push(product);
        await fs.writeFile('./databases/productos.txt', JSON.stringify(dbProduct, null, 2), err => {
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