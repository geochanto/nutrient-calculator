var Recipes = sequelize.define("Recipes", {
    RecipeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RecipeDescription: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

Recipes.Sync();

module.exports = Recipes;