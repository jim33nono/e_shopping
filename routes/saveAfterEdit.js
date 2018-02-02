var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
  function saveEmployee(req , res , next){
    var inputId = req.params.id;

    Employee.findOne({id: inputId}, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err);
      if (!employee)
        return res.render('404');

        employee.fristName = req.body.firstName
        employee.lastName = req.body.lastName;

        employee.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/displayEmployees');
        });
    });
  };
