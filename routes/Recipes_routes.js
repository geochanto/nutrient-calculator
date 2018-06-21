
var express = require('express');
var router  = express.Router();

var Recipes_controllers = require('../controllers/Recipes_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/recipes', Recipes_controllers.viewRecipes);

// router.post('/recipes/new', isAuthenticated, Recipes_controllers.createRecipes);
router.post('/recipes/new', Recipes_controllers.addRecipe);

// router.put('/recipes/update/:id', isAuthenticated, Recipes_controllers.updateRecipes);
router.put('/recipes/update/:id', Recipes_controllers.editRecipe);

// router.delete('/recipes/delete/:id', isAuthenticated, Recipes_controllers.updateRecipes);
router.delete('/recipes/delete/:id',Recipes_controllers.deleteRecipe);

module.exports = router;