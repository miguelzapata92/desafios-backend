const express = require('express');
const { join } = require('path');
const { engine } = require('express-handlebars');
const { Server: HttpServer} = require('http');
const { Server: IOServer } = require('socket.io');
const { router, listaProductos  } = require('./routes/routes.js');
const path = require('path')


const app = express();
const http = new HttpServer(app);
const io = new IOServer(http);
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static(join(__dirname, 'public')))



app.engine('.hbs', engine({ extname: '.hbs' }))
//seteamos el view engine
app.set('view engine', '.hbs');
//aca le decimos donde van a estar las vistas
app.set('views',  path.join(__dirname, 'views'));

app.use('/', router);

io.on('connection', (socket) => {
    console.log('Usuario Conectado')
  })

const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server On ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`));

