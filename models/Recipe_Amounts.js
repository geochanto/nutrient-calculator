module.exports = function (sequelize, DataTypes) {
    var Recipe_Amount = sequelize.define("Recipe_Amounts", {
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,2],
                isIn: [['sm', 'md','lg']]
            }
        },
        //Smoothie, or Acai Bowl, etc.
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,50],
                isIn: [['acai bowl', 'smoothie','meal replacement','renovo cafe','teas and coffee','shots']]
            }
        }
    });

    Recipe_Amount.associate = function (models) {
        Recipe_Amount.belongsTo(models.Ingredients, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Recipe_Amount.associate = function (models) {
        Recipe_Amount.belongsTo(models.Recipes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recipe_Amount;
};