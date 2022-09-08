const express = require('express');


const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/productos', require('./routes/routesProducto'));
app.use('/api/carrito', require('./routes/routesCarrito'));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server on port: ${PORT}`);
})
server.on('error', error => console.log(error));