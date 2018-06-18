const express = require('express');
const router  = express.Router();

const ingredients_controller = require('../controllers/Ingredients_controllers');
//var isAuthenticated = require("../config/middleware/isAuthenticated");


//add isAuthenticated once authentication works https://github.com/OSP123/TravelSecure/blob/master/routes/trips.js
router.get('/ingredients', ingredients_controller.viewIngredients);

// router.post('/ingredients/add', ingredients_controller.addIngredient);

// router.delete('/ingredients/delete', ingredients_controller.deleteIngredient);

// router.put('/ingredients/edit', ingredients_controller.editIngredient);

module.exports = router;