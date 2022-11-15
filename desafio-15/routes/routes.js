import express  from 'express';
const router = express.Router();
import { fork } from 'child_process'

import { Controller } from '../controllers/controller.js'

// Inicio
router.get('/', Controller.checkAuthentication,  Controller.getIndex);

// Login
router.get('/login', Controller.getLogin);
router.post('/login', Controller.postLogin);
router.get('/faillogin', Controller.getFailLogin);

// Signup
router.get('/signup', Controller.getSignup);
router.post('/signup', Controller.postSignup);
router.get('/failsignup', Controller.getFailSignup);


router.post('/redirect-signup', (req, res) => res.redirect('/signup'));
router.post('/redirect-login', (req, res) => res.redirect('/login'));

// Logout
router.post('/logout', Controller.getLogout);

//Info
router.get('/info', (req, res) => {
    const args =
    process.argv.length > 2 ? process.argv.slice(2).join(", ") : "ninguno";

  res.send(`
    <ul>
    <li>Sistema operativo: ${process.platform}</li>
    <li>Node version: ${process.version}</li>
    <li>Path de ejecución: ${process.execPath}</li>
    <li>Carpeta del proyecto: ${process.cwd()}</li>
  <li>Argumentos de entrada: ${args}</li>
  <li>ID: ${process.pid}</li>
  <li>Memoria total reservada: ${`${Math.round(
    process.memoryUsage().rss / 1024
  )} KB`}</li>
  <li>N° Procesadores ${require('os').cpus().length}</li>
</ul>`);
})

//Randoms

router.get('/randoms', (req,res) => {
    const forked = fork('./utils/random.js');

	let { cantidad } = req.query;
	let obj = {};
	cantidad
		? forked.send({ cantidad, obj })
		: forked.send({ cantidad: 500000000, obj });
	forked.on('message', message => res.send(message));
})


router.get('*', Controller.failRoute);


export default router;
