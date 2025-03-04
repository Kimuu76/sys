/** @format */

const sequelize = require("./database");
//const models = require("./models");
require("./models"); // Ensure models are loaded before syncing

const initDB = async () => {
	try {
		await sequelize.sync({ alter: true }); // Updates schema without dropping data
		console.log("Database initialized successfully!");

		// Ensure proper sync order
		await Product.sync();
		await Supplier.sync();
		await Purchase.sync();

		console.log("✅ Tables synced successfully!");
	} catch (error) {
		console.error("DB Initialization Error:", error);
	}
};

module.exports = initDB;

/** @format 

const sequelize = require("./database"); // Ensure this path is correct
const models = require("./models"); // Ensure models are loaded

const initDB = async () => {
	try {
		await sequelize.sync({ force: true }); // Reset database & recreate tables
		console.log("Database initialized successfully!");

		await sequelize.close(); // Close connection after initialization
	} catch (error) {
		console.error("DB Initialization Error:", error);
	}
};

initDB();*/
