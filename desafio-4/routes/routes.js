
const express= require('express')
const router = express.Router();

const listaProductos = [];


router.get('/', (req, res)=> {
    //devuelve todos los productos
    res.send(listaProductos)
})

router.get('/:id', (req, res)=> {   
    //devuelve un producto según su id
    const id = req.params.id
    const producto = listaProductos.filter(e=> e.id == id)
    res.send(producto)
})

router.post('/', (req, res)=> {
    //recibe y agrega un producto, lo devuelve con su id
    const data = req.body;
    listaProductos.push(data);
    data.id = listaProductos.length;
    res.send(listaProductos)
})


router.put('/:id', (req, res)=> {
    //recibe y actualiza un producto segun su id
    const idProducto = req.params.id
    if(!idProducto){
        res.status(400).json({ error : 'El producto solicitado no existe'})
    }
    const producto = listaProductos.filter(e=> e.id == id)
    producto.title = nombre;
    producto.price = title;
    producto.thumbnail = thumbnail;
    res.send(producto);
})

router.delete('/:id', (req, res)=> {
    //elimina un producto segun su id
    let idProducto = req.params.id
    listaProductos.splice(idProducto -1 , 1)
    res.send(listaProductos);
})

module.exports = router;