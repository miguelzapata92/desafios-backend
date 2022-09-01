const express = require('express');
const { engine } = require('express-handlebars');
const router = require('./routes/routes');

const path = require('path')

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.engine('.hbs', engine({ extname: '.hbs' }))
//seteamos el view engine
app.set('view engine', '.hbs');
//aca le decimos donde van a estar las vistas
app.set('views',  path.join(__dirname, 'views'));

app.use('/', router);

const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server On ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`));

