const express = require('express');
const { engine } = require('express-handlebars');
const { router, listaProductos  } = require('./routes/routes.js');
const { Server: HttpServer} = require('http');
const { Server: IOServer } = require('socket.io');
const path = require('path')

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));

const http= new HttpServer(app);
const io = new IOServer(http);

app.engine('.hbs', engine({ extname: '.hbs' }))
//seteamos el view engine
app.set('view engine', '.hbs');
//aca le decimos donde van a estar las vistas
app.set('views',  path.join(__dirname, 'views'));

app.use('/', router);

io.on('connection', async (socket) => {
    console.log('a user connected')
  
    socket.emit('servidor_todos_los_productos', productos)
  
    const chatINFO = await leerChat()
  
    socket.emit('servidor_todos_los_mensajes', chatINFO)
  
    socket.on('cliente_nuevo_producto_guardado', async data => {
      await guardarProducto(data)
      io.sockets.emit('servidor_todos_los_productos', productos)
    })
  
    socket.on('cliente_nuevo_mensaje_chat', async data => {
      await insertarChat(data)
      io.sockets.emit('servidor_todos_los_mensajes', await leerChat())
    })
  })








const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server On ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`));

