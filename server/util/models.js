const {DataTypes} = require('sequelize')
const db = require('./database')

module.exports = {
  User: db.define("user", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }),
  Product: db.define("product", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    clearance: DataTypes.BOOLEAN
  }),
  Cart: db.define('cart', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    }
  })
}