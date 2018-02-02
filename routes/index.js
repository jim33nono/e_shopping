var express = require('express');
var router = express.Router();

// other modules
var displayEmployees 	= require("./displayEmployees");
var addEmployee 			= require("./addEmployee");
var saveEmployee 			= require("./saveEmployee");
var editEmployee 			= require("./editEmployee");
var saveAfterEdit 	= require("./saveAfterEdit");
var deleteEmployee 		= require("./deleteEmployee");

// router specs
router.get('/', function(req, res, next) {
  res.redirect('/displayEmployees');
});

router.get('/displayEmployees', displayEmployees);

router.get('/employee/add', addEmployee);
router.post('/employee/add', saveEmployee);

router.get('/employee/edit/:id', 	editEmployee);
router.post('/employee/edit/:id', 	saveAfterEdit);

// router.get('/employee/delete/:id', deleteEmployee);
router.post('/employee/delete/:id', deleteEmployee);


module.exports = router;
