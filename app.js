const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const smtp = require('./config/sgMail');
const expressSanitizer = require('express-sanitizer');
const yup = require('yup')


const app = express();

const routes = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static('../MeuPortfolio'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSanitizer());

app.use('/', routes);




const PORT = 4001
app.listen(PORT, () => {
    console.log('Server levantado...')
})



module.exports = app;