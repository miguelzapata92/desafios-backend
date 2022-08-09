const express = require('express');

const Contenedor = require('./contenedor')

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
    res.send("todo ok");
})



app.get('/productos', async (req, res) =>{
    
    //devolver array con los productos disponibles en el servidor
    try {
        const contenedor = new Contenedor('./productos.txt');

        let productos = await contenedor.getAll();

        res.json(productos);

    } catch(error){
        console.log(error);
    }
})





app.get('/productoRandom', async (req, res) =>{
    //devolver producto al azar
       try {

        let numRandom = () => {
            return Math.floor(Math.random() * (2,3) * 1
            )
        }
        const contenedor = new Contenedor('./productos.txt');
        
        let productoRandom = await contenedor.getById(numRandom());
        
        
        res.json(productoRandom);

    } catch(error){
        console.log(error);
    }
})

const server = app.listen(PORT, () =>{
    console.log(
        `Servidos Http escuchando en el puerto ${PORT}`
      );
})

