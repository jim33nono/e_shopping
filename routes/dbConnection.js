var mongoose = require('mongoose');
var credentials = require('../credentials.js');

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = null;

var EmployeeDb = require('../employeeDb.js');
var Employee = null;

module.exports = {
	getModel: function getModel() {
		if (connection == null) {
			connection = mongoose.createConnection(dbUrl);
			console.log("Creating connection and model");
			Employee = EmployeeDb.getModel(connection);
		};
		return Employee;
	}
};
