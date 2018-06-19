var db  = require('../models');

exports.viewIngredients = function(req, res) {
  db.Ingredient.findAll({}).then(function(dbIngredient) {
    res.render('ingredients', {
      layout: 'main',
      ingredients: dbIngredient
    });
  });
};

exports.addIngredient = function(req, res) {
  console.log(req.body);
  db.Ingredient.create({
    IngredientName: req.body.ingredientName,
    Calories: req.body.Calories,
    Carbs: req.body.Carbs,
    Sugar: req.body.Sugar,
    Fat: req.body.Fat, 
    Protein: req.body.Protein,
    isGlutenFree: req.body.isGlutenFree,
    isNut: req.body.isNut,
    isGMO: req.body.isGMO,
    createdAt: "1000-01-01 00:00:00",
    updatedAt: "1000-01-01 00:00:00"
  }).then(function(dbIngredient) {
    console.log(dbIngredient);
    res.redirect('/ingredients');
  });
};