var db = require('../models');
var sequelize = require('sequelize');
var Promise = require("bluebird");

exports.index = function(req, res) {
  var loggedIn=false;
  var userText = "";
  if (req.user) {
    loggedIn = true;
    userText="Logged In as "+req.user.username;
  };

  db.Recipe.findAll({
 
  }).then(function(data) {
    console.log(data);
    res.render('fullmenu', {
      recipes: data,
      loggedIn: loggedIn,
      loginfo: userText
    });
  });
};

exports.viewRecipes = function (req, res) {

    var arr = [];
    db.Ingredient.findAll({}).then(    
      function(data) {
        arr.push(data);
      },
      db.RecipeAmount.findAll({
        include: [db.Recipe, db.Ingredient]
      }).then(function (data2) {
        arr.push(data2);
        console.log('============');
        console.log(arr);
        console.log('============');
        res.render('recipes', {
          recipes: arr[1],
          ingredients: arr[0]
        });
      })
    );
};

exports.addRecipe = function (req, res) {
    db.Recipe.create({
      RecipeName: req.body.RecipeName,
      RecipeDescription: req.body.RecipeDescription
    }).then(function(newRecipe) {
        var promises = [];
        for (var i = 0; i < req.body.RecipeIngredients.length; i++) {
            var RecipeId = newRecipe.dataValues.id;
            console.log('========== REcipe INGREDIENTS');
            console.log(req.body.RecipeIngredients);
            console.log('========== REcipe INGREDIENTS');
            promises.push(
              db.RecipeAmount.create({
                Amount: req.body.RecipeIngredients[i].AmountForSmall,
                Size: 'sm',
                Type: 'smoothie',
                IngredientId: req.body.RecipeIngredients[i].IngredientId,
                RecipeId: RecipeId
              })
            );
        
            promises.push(
              db.RecipeAmount.create({
                Amount: req.body.RecipeIngredients[i].AmountForMedium,
                Size: 'md',
                Type: 'smoothie',
                IngredientId: req.body.RecipeIngredients[i].IngredientId,
                RecipeId: RecipeId
              })
            );
        
            promises.push(
              db.RecipeAmount.create({
                Amount: req.body.RecipeIngredients[i].AmountForLarge,
                Size: 'lg',
                Type: 'smoothie',
                IngredientId: req.body.RecipeIngredients[i].IngredientId,
                RecipeId: RecipeId
              })
            );
          }

          sequelize.Promise.all(promises).then(function() {
            console.log('All done YAYYYYYYY!!!!!!!');
          });

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
