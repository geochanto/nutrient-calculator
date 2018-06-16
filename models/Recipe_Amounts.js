module.exports = function (sequelize, DataTypes) {
    var Recipe_Amount = sequelize.define("Recipe_Amounts", {
        RecipeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        IngredientID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Size: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};