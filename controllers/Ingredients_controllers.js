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
  db.Ingredient.create({
    IngredientName: req.body.ingredientName,
    Calories: req.body.Calories,
    Carbs: req.body.Carbs,
    Sugar: req.body.Sugar,
    Fat: req.body.Fat, 
    Protein: req.body.Protein,
    isGlutenFree: req.body.isGlutenFree,
    isNut: req.body.isNut,
    isGMO: req.body.isGMO
  }).then(function() {
    console.log('THEN!');
    res.redirect('/ingredients');
  });
};

exports.deleteIngredient = function(req, res) {
  db.Ingredient.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/ingredients');
  });
};

exports.editIngredient = function(req, res) {
  console.log('req body: ' + req.body.ingredientName);
  db.Ingredient.update({
    IngredientName: req.body.ingredientName,
    Calories: req.body.Calories,
    Carbs: req.body.Carbs,
    Sugar: req.body.Sugar,
    Fat: req.body.Fat, 
    Protein: req.body.Protein,
    isGlutenFree: req.body.isGlutenFree,
    isNut: req.body.isNut,
    isGMO: req.body.isGMO
    }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/ingredients');
  });
};