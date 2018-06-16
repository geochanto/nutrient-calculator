var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');

function isLogginIn() {
    req.loggedin = !!req.user;
    next();
}
//var isAuthenticated = require("../config/middleware/isAuthenticated");

// router.get('/signup', users_controller.registrationPage);

// router.get('/sign-out', users_controller.signOutUser);

// router.post('/login', passport.authenticate("local"), users_controller.loginUser);

// router.post('/signup', users_controller.signUpUser);

module.exports = router;