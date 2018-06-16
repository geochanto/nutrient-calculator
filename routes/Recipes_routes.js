
var express = require('express');
var router  = express.Router();

var Recipes_controllers = require('../controllers/Recipes_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', Recipes_controllers.index);

router.post('/new', isAuthenticated, Recipes_controllers.createRecipes);

router.put('/update', isAuthenticated, Recipes_controllers.updateRecipes);

router.delete('/delete', isAuthenticated, Recipes_controllers.updateRecipes);

module.exports = router;