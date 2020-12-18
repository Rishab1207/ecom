const bcrypt = require("bcryptjs");

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "John Doe",
		email: "johndoe@example.com",
		password: bcrypt.hashSync("123456", 12),
	},
	{
		name: "Jane Doe",
		email: "janedoe@example.com",
		password: bcrypt.hashSync("123456", 14),
	},
];

console.log(users);

module.exports = users;
