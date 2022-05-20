const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
    // define columns
  {
    // column id:
    id: {
      // declare column data type as integer
      type: DataTypes.INTEGER,
      // set Null status of column
      allowNull: false,
      // set primary key status
      primaryKey: true,
      // set auto-increment
      autoIncrement: true,
    },
// column category
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  // set sequelize settings
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
