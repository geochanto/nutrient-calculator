module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipes", {
        RecipeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        RecipeDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Recipe;
};