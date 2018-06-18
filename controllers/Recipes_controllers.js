var db  = require('../models');

exports.index = function(req, res) {
  db.Recipes.findAll({
 
  }).then(function(data) {
    console.log(data);
    res.render('fullmenu', {
      Recipes: data
    });
  });
};


exports.createRecipes = function(req, res) {

  db.Recipes.create(req.body).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
};


exports.deleteRecipes = function(req, res) {

  db.Recipes.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
};


exports.updateRecipes = function(req, res) {

  db.Recipes.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
};
