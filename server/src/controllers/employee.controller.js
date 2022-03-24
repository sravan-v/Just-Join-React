const EmployeeModel = require("../models/employee.model");

// get all employee list
exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployees((err, employees) => {
    if (err) res.send(err);
    res.send(employees);
  });
};

// get employee by id
exports.getEmployeeById = (req, res) => {
  EmployeeModel.getEmployeeById(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.send(employee);
  });
};

// create new employee
exports.createEmployee = (req, res) => {
  const employeeReqBody = new EmployeeModel(req.body);

  // check null/empty data
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    EmployeeModel.createNewEmployee(employeeReqBody, (err, employee) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "New Employee Created Successfully",
        data: employee,
      });
    });
  }
};

// update employee
exports.updateEmployee = (req, res) => {
  const employeeReqBody = new EmployeeModel(req.body);

  // check null/empty data
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    EmployeeModel.updateNewEmployee(
      req.params.id,
      employeeReqBody,
      (err, employee) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Updated Employee Successfully",
          data: employee,
        });
      }
    );
  }
};

// delete employee by id
exports.deleteEmployeeById = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.send(employee);
  });
};
