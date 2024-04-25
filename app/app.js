const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

//initialize database
require('./db/mongoose');

//setting view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/views'));

//setting layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');

//public directory
app.use(express.static('public'));

//mount routes
app.use(require('./db/routes/web'));



module.exports = { app : app };