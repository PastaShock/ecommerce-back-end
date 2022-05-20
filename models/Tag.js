const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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
    // column key: tag name
    tag_name: {
      // set datatype
      type: DataTypes.STRING,
      // allow null
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
