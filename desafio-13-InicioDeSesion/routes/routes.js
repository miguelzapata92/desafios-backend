import express  from 'express';
const router = express.Router();
import passport from 'passport'

import { Controller } from '../controllers/controller.js'

// Inicio
router.get('/', Controller.checkAuthentication,  Controller.getIndex);

// Login
router.get('/login', Controller.getLogin);
router.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), Controller.postLogin);
router.get('/faillogin', Controller.getFailLogin);

// Signup
router.get('/signup', Controller.getSignup);
router.post('/signup', passport.authenticate('signup', { failureRedirect: '/failsignup' }), Controller.postSignup);
router.get('/failsignup', Controller.getFailSignup);


router.post('/redirect-signup', (req, res) => res.redirect('/signup'));
router.post('/redirect-login', (req, res) => res.redirect('/login'));

// Logout
router.post('/logout', Controller.getLogout);


router.get('*', Controller.failRoute);


export default router;
