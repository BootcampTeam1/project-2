// MYSQL AND JAWSDB
// ============================================================
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "root",
		database: "budget_db"
	});
};

// ESTABLISH CONNECTION
// ============================================================
connection.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// EXPORT CONNECTION
// ============================================================
module.exports = connection;