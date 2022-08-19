const express = require('express');
const path = require('path')

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));


app.use(express.static(path.join(__dirname, "public")))


app.use('/api/productos', require('./routes/routes'))



const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server On ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`));

