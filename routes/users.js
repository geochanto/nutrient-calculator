var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');

// function isLogginIn() {
//     req.loggedin = !!req.user;
//     next();
// }
var isAuthenticated = require("../config/middleware/isAuthenticated");
//below are user post-api-routes

// router.get("/api/users", user_controller.findUser);

//router.get("/api/users/:id", );

// router.post("/api/users", user_controller.adminAdduser);

// router.delete("/api/users/:id",user_controller.adminDeleteuser);

// router.put("/api/users/:id",user_controller.userProfileUpdate);

//below are user management html routes
// router.get('/admin', users_controller.adminMain);

router.get('/sign-out', users_controller.signOutUser);

router.post('/login', passport.authenticate("local", users_controller.loginUser)
);
//,{successRedirect:'/', failureRedirect: '/login'}
//, users_controller.loginUser
// router.get('/signup', users_controller.registrationPage);
//router.post('/signup', users_controller.signUpUser);

module.exports = router;