const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Initialise app variable
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.get("/", (req, res) => {
	res.send("Home Page");
});

// Product Route Middleware
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
	console.log(
		`Server has been started in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
