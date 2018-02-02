var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
	function displayEmployee(req , res , next){
    Employee.find({}, function(err , employees){
      if(err)
          console.log("Error : %s ",err);

      var results = employees.map(function (employee){
      	return {
      		id: employee.id,
          firstName: employee.firstName,
          lastName: employee.lastName
      	}
      });
      res.render('displayEmployeesView',
      	{title:"List of Employees", data:results});
    });
};
