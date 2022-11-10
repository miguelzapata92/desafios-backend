import express  from 'express';
import { join } from 'path';
import { engine } from 'express-handlebars'
import { Server as HTTPServer } from 'http'
import { Server as IOServer } from 'socket.io'
import router from './routes/routes.js'
import path from 'path';
//const { optionsSQLite3, optionsMariaDB } = require('./options/config.js');
//const Container = require('./containers/containerKnex.js');
import persChat from './utils/persChat.js';
import { denormalizeData } from './utils/normalize.js';
import { fileURLToPath } from 'url';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import session from 'express-session';
//const products = new Container(optionsSQLite3, 'products');
//const messages = new Container(optionsMariaDB, 'messages')
import passport from 'passport';
import mongoose from 'mongoose';
import {config} from 'dotenv';
config({ path: './config/.env' });

const app = express();
const http = new HTTPServer(app);
const io = new IOServer(http);
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const URL = process.env.MONGOATLAS;

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: URL,
        mongoOptions: {useNewUrlParser: true, useUnifiedTopology: true},
        ttl: 60,
        collectionName: 'users'
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {         
      httpOnly: false,
      secure: false,
      maxAge: 100000 
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.engine('.hbs', engine({ extname: '.hbs' }))
//seteamos el view engine
app.set('view engine', '.hbs');
//aca le decimos donde van a estar las vistas
app.set('views',  path.join(__dirname, 'views'));

app.use('/', router);




io.on('connection', async (socket) => {
  console.log('Usuario Conectado')


  socket.on("new-message", async message =>{
    console.log(message);
    await persChat.save(message);
    let chat = await persChat.getAll();
    console.log(chat)
    io.sockets.emit("all-messages", denormalizeData(chat));
  })
})

const PORT = process.env.PORT;

http.listen(PORT, async () => {
  console.log(`Server on port: ${PORT}`)});
  const connection = await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true,});
  console.log("Database connected");  

http.on('error', error => console.log(`Error en el servidor: ${error}`));

