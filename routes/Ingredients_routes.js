
var express = require('express');
var router  = express.Router();

var Recipes_controllers = require('../controllers/Recipes_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, Recipes_controllers.index);

router.post('/new', isAuthenticated, Recipes_controllers.createRecipes);

module.exports = router;