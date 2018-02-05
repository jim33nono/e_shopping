var DB = require('./dbConnection.js');
var Employee = DB.getModel();
module.exports =
	function editEmployee(req , res , next){
		var inputId = req.params.id;

    Employee.findOne({id: inputId}, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err);
      if (!employee)
        return res.render('404');
      res.render('editEmployeeView',
          {title:"Edit Employee",
           data: {id: employee.id,
                  firstName: employee.firstName,
                  lastName: employee.lastName}
          });
    });
};
