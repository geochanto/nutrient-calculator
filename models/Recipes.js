var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Recipes = sequelize.define("Recipes", {
    RecipeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RecipeDescription: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

Recipes.Sync();

module.exports = Recipes;