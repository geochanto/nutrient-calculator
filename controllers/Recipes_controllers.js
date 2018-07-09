var db = require('../models');
var sequelize = require('sequelize');
var Promise = require("bluebird");

exports.index = function (req, res) {
  var loggedIn = false;
  var userText = "";
  if (req.user) {
    loggedIn = true;
    userText = "Logged In as " + req.user.username;
  };

  db.Recipe.findAll({

  }).then(function (data) {
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
    function (data) {
      arr.push(data);
    },
    db.Recipe.findAll({}).then(
      function (data2) {
        arr.push(data2);
      }),
    db.RecipeAmount.findAll({
      include: [db.Recipe, db.Ingredient]
    }).then(function (data3) {
      arr.push(data3);
      res.render('recipes', {
        ingredients: arr[0],
        recipes: arr[1],
        recipeamounts: arr[2]
      });
    })
  );
};

//query recipes by id
//join recipeamounts by recipeId & size
//add up calories, carbs, sugars, fat, protein


exports.recipeTotals = function (req, res) {
  var totalsArr = [];
  db.Recipe.findAll({})
    .then(function (data) {
      calculateTotals(data, function () {
      res.json(totalsArr);
      });
    });


  function calculateTotals(data, callback) {
    for (var i = 0; i < data.length; i++) {
      db.RecipeAmount.findAll({
        where: {
          RecipeId: data[i].dataValues.id,
          Size: "sm"
        },
        include: [db.Recipe, db.Ingredient]
      })
        .then(function (data2) {
          var totalCalories = 0;
          var totalCarbs = 0;
          var totalSugar = 0;
          var totalFat = 0;
          var totalProtein = 0;

          for (var j = 0; j < data2.length; j++) {
            console.log("======== DataValues ========")
            console.log(data2[j].dataValues.Recipe.dataValues.id);
            console.log("======== DataValues ========")
            var RecipeId = data2[j].dataValues.Recipe.dataValues.id
            var RecipeName = data2[j].dataValues.Recipe.dataValues.RecipeName;
            var Calories = parseInt(data2[j].dataValues.Ingredient.dataValues.Calories) * parseInt(data2[j].Amount);
            var Carbs = parseInt(data2[j].dataValues.Ingredient.dataValues.Carbs) * parseInt(data2[j].Amount);
            var Sugar = parseInt(data2[j].dataValues.Ingredient.dataValues.Sugar) * parseInt(data2[j].Amount);
            var Fat = parseInt(data2[j].dataValues.Ingredient.dataValues.Fat) * parseInt(data2[j].Amount);
            var Protein = parseInt(data2[j].dataValues.Ingredient.dataValues.Protein) * parseInt(data2[j].Amount);
            totalCalories += Calories;
            totalCarbs += Carbs;
            totalSugar += Sugar;
            totalFat += Fat;
            totalProtein += Protein;
          }

          var totals = {
            RecipeId: RecipeId,
            RecipeName: RecipeName,
            totalCalories: totalCalories,
            totalCarbs: totalCarbs,
            totalSugar: totalSugar,
            totalFat: totalFat,
            totalProtein: totalProtein
          }
          totalsArr.push(totals);

          if (totalsArr.length === data.length) {
            callback();
          }
        });
    }
    
  };
}

exports.addRecipe = function (req, res) {
  db.Recipe.create({
    RecipeName: req.body.RecipeName,
    RecipeDescription: req.body.RecipeDescription
  }).then(function (newRecipe) {
    var promises = [];
    for (var i = 0; i < req.body.RecipeIngredients.length; i++) {
      var RecipeId = newRecipe.dataValues.id;
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

    sequelize.Promise.all(promises).then(function () {
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
    }).then(function () {
      res.redirect('/recipes');
    });
};
