var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
  function saveEmployee(req , res , next){

    Employee.findOne().sort('-id').exec(function(err, maxIdDocument){
      console.log(JSON.stringify(maxIdDocument));

      var employee = new Employee({
        id: maxIdDocument.id + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });

      employee.save(function (err){
        if(err)
          console.log("Error : %s ",err);
        res.redirect('/displayEmployees');
      });

    })

  };
