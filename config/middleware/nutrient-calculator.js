var db = require('../models');

module.exports = function(req, res, next) {
    //user will choose a recipe name (from recipe table)
    //req.body will be receipe name and a size (from RecipeAmounts table)
    //req.body = {RecipeName: recipeName, Size: size};
    db.Recipe.findAll({
        where:{
            RecipeName: req.body.recipeName
        },
        include: [{
            model: db.RecipeAmount,
            through: {
                // attributes: ['Amount', 'IngredientId'],
                where: {Size: req.body.size}
            },
            include: [{
                model: db.Ingredient,
                // through: {
                //     attributes: ["Calories", "Carbs", "Sugar","Fat"," Protein"]
                // },
            }],
        }]
    }).then(function(data){
         console.log(data);
         const resObj = data.map(function(data) {
             return Object.assign(
                 {},
                 {
                  recipe_id: Recipe.id,
                  recipeName: Recipe.RecipeName,
                  ingredients: Recipe.RecipeAmounts.map(function(recipeamounts){
                         return Object.assign (
                             {},
                             {
                                 size: RecipeAmounts.Size,
                                 amount: RecipeAmounts.Amount,
                                 ingredient: RecipeAmounts.Ingredients.map(function(ingredients){
                                     return Object.assign(
                                         {},
                                         {
                                          calories: Ingredients.Calories,
                                          carbs: Ingredients.Carbs,
                                          sugar: Ingredients.Sugar,
                                          fat: Ingredients.Fat,
                                          protein: Ingredients.Protein   
                                         }
                                     )
                                 })
                             }
                         )
                  })
                 }
             )
         });
        console.log(resObj);
        //perform total nutrients
        var totalCalories = function() {
            console.log(resObj.ingredients);
            for (var i=0;i=resObj.ingredients.length;i++) {
               total +=resObj.ingredients.ingredient.calories;
            return total;
            }
        };
        var totalCarbs = function() {
            console.log(resObj.ingredients);
            for (var i=0;i=resObj.ingredients.length;i++) {
               total +=resObj.ingredients.ingredient.carbs;
            return total;
            }
        };
        var totalSugar = function() {
            console.log(resObj.ingredients);
            for (var i=0;i=resObj.ingredients.length;i++) {
               total +=resObj.ingredients.ingredient.sugar;
            return total;
            }
        };
        var totalFat = function() {
            console.log(resObj.ingredients);
            for (var i=0;i=resObj.ingredients.length;i++) {
               total +=resObj.ingredients.ingredient.fat;
            return total;
            }
        };
        var Protein = function() {
            console.log(resObj.ingredients);
            for (var i=0;i=resObj.ingredients.length;i++) {
               total +=resObj.ingredients.ingredient.protein;
            return total;
            }
        };
        
        res.locals.totalCalories = totalCalories;
        res.locals.totalCarbs = totalCarbs;
        res.locals.totalSugers = totalSugars;
        res.locals.totalFat = totalFat;
        res.locals.totalProtein = totalProtein;


      //the next step is to render the res.locals variables into views

    
    });
  


    next();
  };

