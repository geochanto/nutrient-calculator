var db = require('../models');
var sequelize = require('sequelize');
var Promise = require("bluebird");

exports.viewRecipes = function (req, res) {
  db.RecipeAmount.findAll({
    include: [db.Recipe, db.Ingredient]
  }).then(function (data) {
    res.render('fullmenu', {
      recipes: data
    });
  });
};

exports.addRecipe = function (req, res) {

  var promises = [];

  promises.push(
    db.Recipe.create({
      RecipeName: req.body.RecipeName,
      RecipeDescription: req.body.RecipeDescription
    })
  )

  for (var i = 0; i < req.body.RecipeIngredients.length; i++) {
    promises.push(
      db.RecipeAmount.create({
        Amount: req.body.RecipeIngredients[i].AmountForSmall,
        Size: 'sm',
        Type: 'smoothie',
        // IngredientId: 10,
        // RecipeId: 1
      })
    );

    promises.push(
      db.RecipeAmount.create({
        Amount: req.body.RecipeIngredients[i].AmountForMedium,
        Size: 'md',
        Type: 'smoothie',
        // IngredientId: 10,
        // RecipeId: 1
      })
    );

    promises.push(
      db.RecipeAmount.create({
        Amount: req.body.RecipeIngredients[i].AmountForLarge,
        Size: 'lg',
        Type: 'smoothie',
        // IngredientId: 10,
        // RecipeId: 1
      })
    );
  }



  // var promises = {
  //   recipeAdd: db.Recipe.create({
  //     RecipeName: req.body.RecipeName,
  //     RecipeDescription: req.body.RecipeDescription
  //   }),
  //   recipeAmountAdd: db.RecipeAmount.create({
  //     Amount: 110,
  //     Size: 'sm',
  //     Type: 'smoothie',
  //     // IngredientId: 10,
  //     // RecipeId: 1
  //   })
  // }
  // sequelize.Promise.props(promises).then(function (results) {
  //   /// each promise is resolved here, results:
  //   results.recipeAdd;
  //   results.recipeAmountAdd;

  // });

  sequelize.Promise.all(promises).then(function() {
    console.log("all the files were created");
});

};


exports.deleteRecipe = function (req, res) {
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


exports.editRecipe = function (req, res) {
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
