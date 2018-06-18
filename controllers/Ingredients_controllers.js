var db  = require('../models');

exports.viewIngredients = function(req, res) {
  db.Ingredient.findAll({}).then(function(dbIngredient) {
    console.log(dbIngredient);
    res.render("ingredients", dbIngredient);
    // res.render('ingredients', {
    //   layout: 'main',
    //   ingredients: dbIngredient
    // });
  });
};