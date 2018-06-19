var express = require('express');
var router  = express.Router();
const path = require("path");
var passport = require("../config/passport");
var users_controller = require('../controllers/Users_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");
// function isLogginIn() {
//     req.loggedin = !!req.user;
//     next();
// }

//below are user post-api-routes
// router.get("/", function(req, res){
//     res.render("login-modal");
// });
//router.get("/api/users", user_controller.findUser);
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/logintest.html"));
});


router.post("/api/users", users_controller.adminAdduser);

router.delete("/api/users/:id",users_controller.adminDeleteuser);

router.put("/api/users/:id",users_controller.userProfileUpdate);

//below are user management html routes
router.get('/admin', users_controller.adminMain);

router.get('/sign-out', users_controller.signOutUser);

router.post('/login', passport.authenticate("local", users_controller.loginUser)
);
//,{successRedirect:'/', failureRedirect: '/login'}
//, users_controller.loginUser
// router.get('/signup', users_controller.registrationPage);
//router.post('/signup', users_controller.signUpUser);

module.exports = router;