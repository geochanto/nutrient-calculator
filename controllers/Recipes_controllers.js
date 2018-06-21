var db = require('../models');

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

  db.Recipe.destroy({
    where: {
      id: req.params.id
    }
  });
  
  db.RecipeAmount.destroy({
    where: {
      RecipeId: req.params.id
    }
  }).then(function (dbRecipes) {
    res.redirect('/recipes');
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
