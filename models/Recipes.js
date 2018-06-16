module.exports = function (sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipes", {
        RecipeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        RecipeDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Recipe.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Recipe.belongsTo(models.Recipe_Amounts, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recipe;
};