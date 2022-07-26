const express = require('express');
const { join } = require('path');
const { engine } = require('express-handlebars');
const { Server: HttpServer} = require('http');
const { Server: IOServer } = require('socket.io');
const { router } = require('./routes/routes.js');
const path = require('path')
const {promises: fs} = require('fs');



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

let messages= [];
const products = [];

io.on('connection', (socket) => {
    console.log('Usuario Conectado')

    //CargarProductos
    socket.on("new-product", product => {
      console.log(product);
      socket.emit("new-products", products)
      products.push(product);
       
      io.sockets.emit("new-products", products)
    })


    //chat
    socket.on("new-message", async message =>{
      console.log(message);
      const chatInfo = await leerChat();
      socket.emit("new-chat-message", messages)
      messages.push(message);
      await insertarChat(message);
      io.sockets.emit("new-chat-message", messages)
  })
})

const leerChat = async () => {

  try {
      const data = await fs.readFile('chat.txt', 'utf-8', (err, data) => {
          if(err) throw err
          return data
      })
      return JSON.parse(data) 

  } catch (error) {
      console.error(`El error es: ${error}`)
  }
}

const insertarChat = async (mensaje) => {

  try {
      const chat = await leerChat() 
      chat.push(mensaje)
      await fs.writeFile('chat.txt', JSON.stringify(chat, null, 2), err => {
      if(err) throw err
  })

  } catch (error) {
      console.error(`El error es: ${error}`)
  }
}

const PORT = 8080;

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));

http.on('error', error => console.log(`Error en el servidor: ${error}`));

