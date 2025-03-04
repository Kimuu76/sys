/** @format */

const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Supplier = sequelize.define("Supplier", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, allowNull: false },
	contact: { type: DataTypes.STRING, allowNull: false },
	address: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Supplier;
