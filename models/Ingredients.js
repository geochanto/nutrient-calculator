module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredients", {
        IngredientName: {
            type: DataTypes.STRING,
            allowNull: false
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

    Ingredient.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Ingredient.belongsTo(models.Recipe_Amounts, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Ingredient;
};