const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv')

dotenv.config({
  path: './.env'
})

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const scheduleRouter = require('./routes/schedule');
const contactRouter = require('./routes/contact');
const gameRouter = require('./routes/game');
const faqRouter = require('./routes/faq');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

// to not accept form data
// app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

//this allows us to use static files like css/images/csv/ etc
//files must live in the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'))


app.use('/', indexRouter);
app.use('/faq', faqRouter);
app.use('/users', usersRouter);
app.use('/schedule', scheduleRouter);
app.use('/schedule/past-events', scheduleRouter);
app.use('/schedule/api/past-events', scheduleRouter);
app.use('/contact', contactRouter);
app.use('/game', gameRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

app.use(function(req, res, next){
  res.status(404).render('404', {
    title: "Sorry, page not found"
  });
});


module.exports = app;
