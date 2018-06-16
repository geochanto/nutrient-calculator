    var Ingredients = sequelize.define("Ingredients", {
        IngredientName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1,200]
            }
        },
        isGlutenFree: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        isNut: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        isGMO: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        Calories: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        Carbs: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        Sugar: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        Fat: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        Protein: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
    });

Ingredients.sync();

module.exports = Ingredients;