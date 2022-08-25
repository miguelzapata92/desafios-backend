const express = require('express');
const router = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', router);

const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server On ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor: ${error}`));
