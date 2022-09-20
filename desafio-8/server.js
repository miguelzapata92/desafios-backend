const express = require('express');
const { join } = require('path');
const { engine } = require('express-handlebars');
const { Server: HttpServer} = require('http');
const { Server: IOServer } = require('socket.io');
const { router } = require('./routes/routes.js');
const path = require('path')
const { optionsSQLite3, optionsMariaDB } = require('./options/config.js');
const Container = require('./container.js');


const products = new Container(optionsSQLite3, 'products');
const messages = new Container(optionsMariaDB, 'messages')

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

    //CargarProductos
    socket.on("new-product", async product => {
      console.log(product);
      products.save(product);
      
      socket.emit("new-products", products)
      const dbProducts = await products.getAll();
      io.sockets.emit("new-products", dbProducts)
    })


    //chat
    socket.on("new-message", async message =>{
      console.log(message);
      messages.save(message);
      const dbMessages = await messages.getAll();
      io.sockets.emit("new-chat-message", dbMessages);
  })
})

const PORT = 8080;

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));

http.on('error', error => console.log(`Error en el servidor: ${error}`));

