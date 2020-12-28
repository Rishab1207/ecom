const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const users = require("./data/users");
const products = require("./data/products");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectDB = require("./config/db");

// Connect to the database
connectDB();

// Import Data
const importData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		const createdUser = await User.insertMany(users);

		const adminUser = createdUser[0]._id;

		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(sampleProducts);

		console.log("Data Imported");
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
// Destory Data
const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed");
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") destroyData();
else importData();
