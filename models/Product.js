// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id
    id: {
      // set data type
      type: DataTypes.INTEGER,
      // allow null values in this column
      allowNull: false,
      // is primary key
      primaryKey: true,
      // is autoincrement
      autoIncrement: true,
    },
    // product name
    product_name: {
      // set data type
      type: DataTypes.STRING,
      // allow null
      allowNull: false,
    },
    // price of product
    price: {
      // set data type
      type: DataTypes.DECIMAL,
      // allow null
      allowNull: false,
      // validation/error handling for checking data type on input
      validate: {
        isDecimal: true,
      },
    },
    // stock quantity
    stock: {
      // set data type
      type: DataTypes.INTEGER,
      // allow null
      allowNull: false,
      // set a default value
      defaultValue: 10,
      // validation/error handling for checking data type on input
      validate: {
        isNumeric: true,
      },
    },
    // category id based on foreign key
    category_id: {
      // set data type
      type: DataTypes.INTEGER,
      // set reference for foreign key
      references: {
        // call model name
        model: 'category',
        // reference model column
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
