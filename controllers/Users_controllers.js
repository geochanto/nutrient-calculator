var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var cat = require("../models/cat.js");
var Recipes = require("../models/Recipes.js");
var Recipe_Amounts = require("../models/Recipe_Amounts.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Recipes.all(function(data) {
    var hbsObject = {
      Recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/recipes", function(req, res) {
  Recipes.create([
    "RecipeName", "RecipeDescription" ], [
    req.body.RecipeName, req.body.RecipeDescription, 
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
  Recipe_Amounts.create([
    "Amount", "Size", "Type" ], [
    req.body.Amount, req.body.Size, req.body.Type,
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });

});

router.put("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  Recipes.update({
    RecipeName: req.body.RecipeName, 
    RecipeDescription: req.body.RecipeDescription, 
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

  Recipe_Amounts.update({
    Amount: req.body.Amount, 
    Size: req.body.Size,
    Type: req.body.Type,  
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/recipes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  Recipes.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
