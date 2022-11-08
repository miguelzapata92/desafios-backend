import express from 'express';
import productoRouter from './routes/routesProducto.js';
import carritoRouter from './routes/routesCarrito.js'

const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/productos', productoRouter);
app.use('/api/carrito', carritoRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server on port: ${PORT}`);
})
server.on('error', error => console.log(error));