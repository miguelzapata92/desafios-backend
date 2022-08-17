const express = require('express');
const {Router} = express;

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));

const router = Router();

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
    const data = req.body;

    listaProductos.push(data);
    res.send(listaProductos)
})


router.put('/:id', (req, res)=> {
    //recibe y actualiza un producto segun su id
    let idProducto = req.params.id
    
    res.send("get ok")
})

router.delete('/:id', (req, res)=> {
    //elimina un producto segun su id
    let idProducto = req.params.id
    listaProductos.splice(idProducto + 1, 1)
    res.send(listaProductos);
})

app.use('/api/productos', router);


const PORT = 8080;

app.listen(PORT, () =>{
    console.log("server on")
})

