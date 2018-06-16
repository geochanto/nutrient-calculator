module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("users", {
      firstname: {type:Sequelize.STRING, allowNull:false },

      lastname: {type:Sequelize.STRING, allowNull:false },
      role: {type:Sequelize.STRING, allowNull:false },
      //fb_id:DataTypes.STRING,     
      username: {
        type:Sequelize.STRING, 
        allowNull:false
      },
      password: {
        type:DataTypes.STRING, 

        allowNull:false 
      },
      email: {
        type:Sequelize.STRING, 
        allowNull:false ,
        validate: {
          isEmail: true
        }
      }
     

      // createdAt: DataTypes.TIMES
      // updatedAt: DataTypes.TIMESTAMP
    });
    return user;
  };
  