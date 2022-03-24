const express = require("express");

// create express
const router = express();

// import employee controller
const employeeController = require("../controllers/employee.controller");

// get all employees list
router.get("/", employeeController.getEmployeeList);

// get employee by id
router.get("/:id", employeeController.getEmployeeById);

// create new employee
router.post("/", employeeController.createEmployee);

//update employee by id
router.put("/:id", employeeController.updateEmployee);

//delete employee by id
router.delete("/:id", employeeController.deleteEmployeeById);

module.exports = router;
