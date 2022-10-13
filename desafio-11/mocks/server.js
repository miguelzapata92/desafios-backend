import { express } from 'express';
import { join } from 'path';
import engine from 'express-handlebars'
import { Server as HTTPServer } from 'http'
import { Server as IOServer } from 'socket.io'
import router from './routes/routes'
import path from 'path';
const { optionsSQLite3, optionsMariaDB } = require('./options/config.js');
const Container = require('./containers/containerKnex.js');
import { MongoContainer } from './containers/MongoContainer';


//const products = new Container(optionsSQLite3, 'products');
//const messages = new Container(optionsMariaDB, 'messages')

const app = express();
const http = new HTTPServer(app);
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


const products =[]
const messages = new MongoContainer

const { MongoContainer } = await import('./containers/MongoContainer');
persChat = new MongoContainer();

export default async (io) => {
  io.on('connection', async (socket) => {
  console.log('Usuario Conectado')
  
  


  socket.on("new-message", async message =>{
    console.log(message);
    messages.save(message);
    const dbMessages = await messages.getAll();
    io.sockets.emit("new-chat-message", dbMessages);
})
})}


const PORT = 3000;

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));

http.on('error', error => console.log(`Error en el servidor: ${error}`));

