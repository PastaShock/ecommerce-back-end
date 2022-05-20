const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // column key: id
    id: {
      // set datatype
      type: DataTypes.INTEGER,
      // allow null
      allowNull: false,
      // set primary status
      primaryKey: true,
      // set auto increment status
      autoIncrement: true,
    },
    product_id: {
      // set datatype
      type: DataTypes.INTEGER,
      // allow null
      allowNull: true,
      // set foreign key reference:
      references: {
        // declare model name
        model: 'product',
        // call model primary key
        key: 'id',
      },
    },
    // column key: tag id
    tag_id: {
      // set datatype
      type: DataTypes.INTEGER,
      // allow null
      allowNull: true,
      // set foreign key reference:
      references: {
        // declare model name
        model: 'tag',
        // call model primary key
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
