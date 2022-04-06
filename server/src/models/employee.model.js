var dbConn = require("../../config/db.config");

var Employee = function (employee) {
  this.job_name = employee.job_name;
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.father_name = employee.father_name;
  this.dob = employee.dob;
  this.gender = employee.gender;
  this.address = employee.address;
  this.phone_number = employee.phone_number;
  this.aadhar = employee.aadhar;
  this.organization = employee.organization;
  this.job_type = employee.job_type;
  this.job_exp = employee.job_exp;
  this.present_company = employee.present_company;
  this.present_salary = employee.present_salary;
  this.expected_salary = employee.expected_salary;
  this.employee_status = employee.employee_status;
  this.reached = employee.reached;
  this.paid = employee.paid;
  this.employee_comment = employee.employee_comment;
  this.read_record = employee.read_record;
  this.is_deleted = employee.is_deleted;
  this.last_updated = employee.last_updated;
};

// get all employees
Employee.getAllEmployees = (result) => {
  dbConn.query("SELECT * FROM employee WHERE is_deleted = 0", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// get employee by id
Employee.getEmployeeById = (id, result) => {
  dbConn.query("SELECT * FROM employee WHERE id=?", id, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new employee
Employee.createNewEmployee = (employeeReqBody, result) => {
  dbConn.query("INSERT INTO employee SET ? ", employeeReqBody, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// update employee
Employee.updateNewEmployee = (id, employeeReqBody, result) => {
  dbConn.query(
    "UPDATE employee SET first_name = ?, last_name = ?, father_name = ?, gender = ?, dob = ?, phone_number = ?, aadhar = ?, address = ?, job_name = ?, organization = ?, job_type = ?, job_exp = ?, present_company = ?, present_salary = ?, expected_salary = ?, reached = ?, paid = ?, employee_status = ?, employee_comment = ?, last_updated = ? WHERE id = ?",
    [
      employeeReqBody.first_name,
      employeeReqBody.last_name,
      employeeReqBody.father_name,
      employeeReqBody.gender,
      employeeReqBody.dob,
      employeeReqBody.phone_number,
      employeeReqBody.aadhar,
      employeeReqBody.address,
      employeeReqBody.job_name,
      employeeReqBody.organization,
      employeeReqBody.job_type,
      employeeReqBody.job_exp,
      employeeReqBody.present_company,
      employeeReqBody.present_salary,
      employeeReqBody.expected_salary,
      employeeReqBody.reached,
      employeeReqBody.paid,
      employeeReqBody.employee_status,
      employeeReqBody.employee_comment,
      employeeReqBody.last_updated,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// delete employee by id
Employee.deleteEmployee = (id, result) => {
  dbConn.query(
    "UPDATE employee SET is_deleted = 1 WHERE id = ?",
    id,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Employee;
