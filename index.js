const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const auth = require("./controllers/AuthController.js");
const User = require('./models/user-model');
var moment = require('moment');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const port = 3000

var connStr = 'mongodb://zlee:2128nFLV@ds227853.mlab.com:27853/heatseeker';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev,  quiet: true })
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
  const server = express()
  server.use(require('express-session')({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
  }));

  server.enable('trust proxy');
  server.use(passport.initialize());
  server.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  server.use(bodyParser.json())

  function usernameToLowerCase(req, res, next){
      req.body.username = req.body.username.toLowerCase();
      next();
  }
  // route for register action
  server.post('/register', usernameToLowerCase, auth.doRegister);

  // route for login action
  server.post('/login', usernameToLowerCase,  auth.doLogin);

  // route for logout action
  server.get('/logout', auth.logout);

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})





