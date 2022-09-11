import fs from 'fs';
import { fileURLToPath } from 'url'
import path from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataCarrito = path.join(__dirname, '../databases/carrito.txt')

const readAndParseFile = async (file) => {  
    try {
        const data = await fs.promises.readFile(file, 'utf-8')
        const parsedData = JSON.parse(data);
        return parsedData;                                                       
    } catch (error) {
        console.error(`El error es: ${error}`)
    }
}

const GetCartById = async (req, res) => {
    const idCarrito = req.params.id
    try {
        const dbCarrito = await readAndParseFile(dataCarrito)
        //devuelve un carritosegún su id
        const carrito = dbCarrito.filter(e=> e.id == idCarrito)
      
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

const UpdateCart = async (req, res) => {
    
}

const DeleteCart = async (req, res) => {
    
}

export {GetCartById, AddCartProduct, UpdateCart, DeleteCart }