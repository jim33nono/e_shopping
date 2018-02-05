var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var employeeSchema = new Schema({
	id: Number,
	firstName: String,
	lastName: String
});

module.exports = {
	getModel: function getModel(connection) {
		return connection.model("EmployeeModel",
							employeeSchema);
	}
}
