const express = require('express');
//const path = require('path')

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));

//pp.use(express.static(path.join(__dirname, "public")))


app.use('/api/productos', require('./routes/routes'))





const PORT = 8080;

app.listen(PORT, () =>{
    console.log("server on")
})

