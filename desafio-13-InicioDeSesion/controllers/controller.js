import {User} from '../models/User.js'

// Index
const getIndex = (req, res) => res.render('form.hbs')

// Login
const getLogin = (req, res) => {
	if (req.isAuthenticated()) {
		let { username } = req.user;
		res.render('form.hbs', { username });
	} else res.render('login.hbs');
};

// Process login
const postLogin = async (req, res) => {
	const { username, password } = req.user;
	res.render('form.hbs', { username, password});
}

// Signup
const getSignup = async (req, res) => res.render('signup.hbs');

// Process signup
const postSignup = async (req, res) => {
	const { email, password } = req.body
    const userFound = await User.findOne({ email: email })
    if (userFound) {
        return res.render("failsignup.hbs")
    }
    const newUser = new User({ email, password })
    newUser.password = await newUser.encryptPassword(password)
    await newUser.save()
    return res.render('login.hbs');
}

const getFailLogin = (req, res) => res.render('faillogin.hbs');
const getFailSignup = (req, res) => res.render('failsignup.hbs');

// Logout
const getLogout = (req, res) => {
	req.logout(error => { if (error) next(error) });
	res.render('login.hbs');;
}


const checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.render('login.hbs');;
    }
}
const failRoute = (req, res) => res.status(404).render('routing-error');

export const Controller = { getIndex, getLogin, getSignup, postLogin, postSignup, getFailLogin, getFailSignup, getLogout, failRoute, checkAuthentication };