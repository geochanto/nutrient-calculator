module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredients", {
        IngredientName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,200]
            }
        },
        isGlutenFree: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isNut: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isGMO: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Calories: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Carbs: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Sugar: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Fat: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Protein: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    });

    return Ingredient;
};