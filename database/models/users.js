const { FOREIGNKEYS } = require("sequelize/types/lib/query-types");

module.exports = function(sequelize, dataTypes){
    let alias = "Users"
    let cols ={
        id :{
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name :{
            type: dataTypes.STRING,
            allowNull: false,
        },
        last_name :{
            type: dataTypes.STRING,
            allowNull: false,
        },
        email :{
            type: dataTypes.STRING,
            allowNull: false,
        },
        password :{
            type: dataTypes.STRING,
            allowNull: false,
        },
        country :{
            type: dataTypes.STRING,
            allowNull: false,
        },
        user_img :{
            type: dataTypes.STRING
        },
        admin :{
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE,
          },
          updatedAt: {
            type: dataTypes.DATE,
          },
          deletedAt: {
            type: dataTypes.DATE,
          }
    };

    let config = {
        tableName: "users",
        timestamps: true,
        paranoid: true,
      }

    let Users = sequelize.define(alias,cols, config);
   

//    Users.associate = function (models){
  //      Users.belongsTo(models.User_id,{
   //         as: "User",
    //        ForeignKey: "user_id",
     //   })
  //  }
 
  return Users;
}
