const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const auth = require("./controllers/AuthController.js");
const User = require('./models/user-model');
const Query = require('./models/query-model');
const EmailAttempts = require('./models/email-attempts-model');
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
  server.use(passport.initialize());
  server.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  server.use(bodyParser.json())

  // route for register action
  server.post('/register', auth.doRegister);

  // route for login action
  server.post('/login', auth.doLogin);

  // route for logout action
  server.get('/logout', auth.logout);

  //router for creating queries
  server.post('/new_query', (req, res) => {
    const {newQuery, user} = req.body
    console.log('newq', newQuery)
    console.log('user', user)
    //get email
    User.findOne({_id: user})
    .then((doc) => {
      var newQ = new Query({
        userID: user,
        searchQuery: newQuery,
        sites: ['all'],
        userEmail: doc.email
      })
      newQ.save((err, doc) => {
        if (err) res.send({success: false, data: err});
        //invoke lambda for initial scrape
        res.send({success: true, data: doc})
      })
    })
    
  })
  function fetchDashboard (req, res) {
    //1. find in Query using req.body id
    const {user} = req.body
    user_id = decodeURI(user).replace(/"/g, '')
    Query.find({userID: user_id})
    .then((docs) => {
      res.send({success:true, data: docs})
    })
    .catch((err) => {
      console.log('err', err)
      res.send({success: false, data: err})
    })
  }
  //route for getting dashboard
  server.post('/fetch_dashboard', fetchDashboard)
  server.post('/queries/activate', (req, res) => {
    const {query_id} = req.body
    Query.findByIdAndUpdate(query_id, {active: true}, {new: true}, function(err, doc) {
      if (err) {
        res.send({success: false, data: err})
      } else {
        return fetchDashboard(req, res)
      }
    })
  })
  server.post('/queries/deactivate', (req, res) => {
    const {query_id} = req.body
    Query.findByIdAndUpdate(query_id, {active: false}, {new: true}, function(err, doc) {
      if (err) {
        res.send({success: false, data: err})
      } else {
        return fetchDashboard(req, res)
      }
    })
  })

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





