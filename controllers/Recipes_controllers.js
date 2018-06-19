var db  = require('../models');

exports.index = function(req, res) {
  db.Recipe.findAll({
 
  }).then(function(data) {
    console.log(data);
    res.render('fullmenu', {
      Recipes: data
    });
  });
};


exports.createRecipes = function(req, res) {

  db.Recipe.create(req.body).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
};


exports.deleteRecipes = function(req, res) {

  db.Recipe.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
};


exports.updateRecipes = function(req, res) {

  db.Recipe.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbRecipes) {
    res.json(dbRecipes);
  });
};
