const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.engine('handlebars', engine({extname: '.hbs'}));
//seteamos el view engine
app.set('view engine', '.hbs');
//aca le decimos donde van a estar las vistas
app.set('views', './views');



app.use('/', require('./routes/routes'))

const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server On ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`));

