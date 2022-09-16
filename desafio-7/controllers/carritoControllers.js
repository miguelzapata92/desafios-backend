import fs from 'fs';
import { fileURLToPath } from 'url'
import path from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataCarrito = path.join(__dirname, '../databases/carrito.txt')

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

const GetProdInCartById = async (req, res) => {
    const idProducto = req.params.id;
    try {
        const dbCarrito = await readAndParseFile(dataCarrito);
        dbCarrito.forEach(carrito =>{
            if(carrito.id == idProducto) {
                res.send(carrito.products)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const GetCartById = async (req, res) => {
    const idCarrito = req.params.id
    try {
        const dbCarrito = await readAndParseFile(dataCarrito)
        const carrito = dbCarrito.filter(e=> e.id == idCarrito)
        
        //devuelve un carritosegún su id

        if(idCarrito){
            res.send(carrito)
        }else{
            res.status(400).json({ error : 'El carrito solicitado no existe'})
        }
    } catch (error) {
        console.log(error)
    }
}

const AddCartProduct = async (req, res) => {
    if (administrador) {
        try {
            const dbCarrito = await readAndParseFile(dataCarrito);
            const carrito = {id, timestamp: Date.now(), products:[]};
            dbCarrito.push(carrito);
            await fs.promises.writeFile(dataCarrito, JSON.stringify(dbCarrito, null, 2), err =>{
                if (err) throw err;
            })                         
        res.send(dbCarrito);
    } catch (error) {
         console.log(error);
        }
    } else {
        res.status(400).json({ message : 'Usted no tiene permiso para acceder a estas funcionalidades' })
    }
}

const DeleteProdInCartByID = async (req, res) => {
    const idCarrito = req.params.id;
    const prodIndex = req.body;
    if (administrador) {
        try {
            const dbCarrito = await readAndParseFile(dataCarrito);
            const carritoIndex = dbCarrito.findIndex(carrito => carrito.id == idCarrito);
            if (carritoIndex) {                                                               
                carritoIndex.products.splice(prodIndex, 1);                                              
                await fs.promises.writeFile(dataCarrito, JSON.stringify(dbCarrito, null, 2), err => {      
                    if(err) throw err
                })
                res.status(200).json({ messaje: 'Producto borrado con éxito'})
            } else {
                res.status(400).json({ error: 'El Productno no ha sido encontrado'})
            }
        } catch (error) {
            
        }
    } else {
        res.status(400).json({ message : 'Usted no tiene permiso para acceder a estas funcionalidades' })

    }
}

const DeleteCart = async (req, res) => {
    if (administrador) {
        const idCarrito = req.params.id;
        try {
            const dbCarrito = await readAndParseFile(dataCarrito);
            const carritoIndex = dbCarrito.findIndex(carrito => carrito.id == idCarrito)
            if (carritoIndex != -1) {                                                               //si el carrito existe lo borramos   
                dbData.splice(carritoIndex, 1)                                                        
                await fs.promises.writeFile(dbCart, JSON.stringify(dbData, null, 2), err => {      // reescribimos la database de carrito
                    if(err) throw err
                })
                res.status(200).json({ messaje: 'carrito borrado con éxito'})
            } else {
                res.status(400).json({ error: 'carrito no encontrado'})
            }
            res.send(dbCarrito)
        } catch (error) {
            console.log(error)
        }
    } else {
        res.status(400).json({ message : 'Usted no tiene permiso para acceder a estas funcionalidades' })

    }
}

export {GetCartById, AddCartProduct, DeleteProdInCartByID, DeleteCart, GetProdInCartById };