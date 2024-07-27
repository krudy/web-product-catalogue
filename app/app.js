const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { sesion_key_secret } = require('./config')

//initialize database
require('./db/mongoose');

//session middleware
app.use(session({
    secret: sesion_key_secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}))

//setting view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/../views'));

//setting layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');

//public directory
app.use(express.static('public'));

//body parser // application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

//middleware
app.use('/', require('./middleware/view-variables'))

//mount routes
app.use(require('./routes/web'));



module.exports = { app : app };