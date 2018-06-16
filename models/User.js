module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      firstname: {type:DataTypes.STRING, allowNull:false },

      lastname: {type:DataTypes.STRING, allowNull:false },
      role: {type:DataTypes.STRING, allowNull:false },
      //fb_id:DataTypes.STRING,     
      username: {
        type:DataTypes.STRING, 
        allowNull:false,
        validate: {
          len: [6]
        } 
      },
      password: {
        type:DataTypes.STRINGß, 
        allowNull:false 
      },
      email: {
        type:DataTypes.STRING, 
        allowNull:false ,
        validate: {
          isEmail: true
        }
      }
     

      // createdAt: DataTypes.TIMESTAMP,
      // updatedAt: DataTypes.TIMESTAMP
    });
    return users;
  };
  