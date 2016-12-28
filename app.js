let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let socket = require("socket.io");

let index = require('./routes/index');
let api = require('./routes/api');

let app = express();

let io = socket();
app.io = io;

let chat = require('./routes/chat')(io);

let admin = require("firebase-admin");

let serviceAccount = require("./helpers/serviceAccount.json");
let http = require("http");
let mongoose = require("mongoose");

var uristring  =
    process.env.MONGOLAB_URI||
        process.env.MONGOHQ_URL||
    "mongodb://admin:abc123@ds163667.mlab.com:63667/heroku_s3b0kwzb";

mongoose.connect(uristring,function (err,res) {
    if(err){
        console.log("Error connecting to : " + uristring + ". " + err);

    }
    else {
        console.log("Succeed to connect to :" + uristring);

    }
})






admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kuisapp.firebaseio.com"
});


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', api);
app.use('/chat', chat);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
