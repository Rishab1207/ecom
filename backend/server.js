const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv").config();

// Initialise app variable
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(PORT, () =>
	console.log(
		`Server has been started in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
