var db = require('../models');
var sequelize = require('sequelize');
var Promise = require("bluebird");

exports.index = function (req, res) {
  db.RecipeAmount.findAll({
    include: [db.Recipe, db.Ingredient]
  }).then(function (data) {
    res.render('fullmenu', {
      recipes: data
    });
  });
};

exports.createRecipes = function (req, res) {
  db.Recipe.create(req.body).then(function (dbRecipes) {
    console.log('THEN!');
    res.redirect('/recipes');
  });
};


exports.deleteRecipes = function (req, res) {
  var promises = {
    recipeAmountDestroy: db.RecipeAmount.destroy({
      where: {
        RecipeId: req.params.id
      }
    }),
    recipeDestroy: db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    })

  };

  sequelize.Promise.props(promises).then(function (results) {
    /// each promise is resolved here, results:
    results.recipeAmountDestroy;
    results.recipeDestroy;
    
  });
};


exports.updateRecipes = function (req, res) {

  db.Recipe.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbRecipes) {
      console.log('THEN!');
      res.redirect('/recipes');
    });
};
