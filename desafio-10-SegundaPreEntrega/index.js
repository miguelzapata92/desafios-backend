import express from 'express';
import productoRouter from './routes/routesProducto.js';
import carritoRouter from './routes/routesCarrito.js'
import mongoose from 'mongoose';

const URL = 'mongodb://localhost:27017/mongooseExample'
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/productos', productoRouter);
app.use('/api/carrito', carritoRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, async () =>{
    const connection = await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true,});
    console.log("Database connected");
    console.log(`Server on port: ${PORT}`);
})
server.on('error', error => console.log(error));