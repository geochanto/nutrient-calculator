var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');

// function isLogginIn() {
//     req.loggedin = !!req.user;
//     next();
// }
var isAuthenticated = require("../config/middleware/isAuthenticated");
router.get('/admin', users_controller.adminMain);
// router.get('/signup', users_controller.registrationPage);
router.get("/api/posts", );

router.get("/api/posts/:id", );

router.delete("/api/posts/:id",);

router.put("/api/posts");

router.get('/sign-out', users_controller.signOutUser);

router.post('/login', passport.authenticate("local"), users_controller.loginUser);

//router.post('/signup', users_controller.signUpUser);

module.exports = router;