import express  from 'express';
const router = express.Router();
import login from '../middlewares/auth.js'
import  { Controller } from '../controllers/controller.js'




router.get('/', login, Controller.form);
router.post('/home', Controller.home);
router.post('/logout', Controller.logout);

export default router;
