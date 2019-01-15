var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/user-model");

var userController = {};

// Post registration
userController.doRegister = function(req, res, next) {
  User.register(new User({ username: req.body.username, email : req.body.username}), req.body.password, function(err, user) {
    if (err) {
      console.log('err saving user', err)
      return res.send({status: 'error', data: user})
    }
    passport.authenticate('local', (err, token, userData) => {
      if (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'This email is already taken.',
          });
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }


      return res.json({
        success: true,
        message: 'You have successfully registered',
      });
    })(req, res, next);
  });
};

// Post login
userController.doLogin = function(req, res, next) {
  passport.authenticate('local', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    if (!token) {
      return res.status(400).json({
        success: false,
        message: userData['message']
      })
    }
    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
};

// logout
userController.logout = function(req, res) {
  req.logout();
  return res.send({status: 'success', data: 'logged out'})
};

module.exports = userController;