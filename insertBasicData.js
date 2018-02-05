var mongoose = require('mongoose');
var credentials = require('./credentials.js');

var dbUrl = 'mongodb://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

var connection = mongoose.createConnection(dbUrl);

var EmployeeDb = require('./employeeDb.js');
var Employee = EmployeeDb.getModel(connection);

//delete
Employee.remove({},
	function(err,result) {
		if(err) throw err;
		console.log('Delete', result);
    // connection.close();
});

  var employee;
  var employees = [];
  employee = new Employee({
    id:1,
    firstName:'John',
    lastName:'Smith'
  })
  employees.push(employee);
  employee = new Employee({
    id:2,
    firstName:'Jane',
    lastName:'Smith'
  })
  employees.push(employee);
  employee = new Employee({
    id:3,
    firstName:'John',
    lastName:'Doe'
  })
  employees.push(employee);

  //insertMany
  Employee.insertMany(employees)
    .then(function(results){
      console.log('insert successfully ', results);

      //select
      Employee.find({}, function(err, results){
        if (err) throw err;
        console.log('Find All');
        console.log(JSON.stringify(results));
        connection.close();
      });

    })
    .catch(function(err){
      console.log('insert error ', err);
    }
  );
