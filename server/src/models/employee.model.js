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
  this.present_or_previous_company = employee.present_or_previous_company;
  this.present_salary = employee.present_salary;
  this.expected_salary = employee.expected_salary;
  this.date_of_registered = new Date().toLocaleDateString("en-US");
  this.employee_status = "Progress";
  this.reached = "Reached";
  this.paid = "Paid";
  this.employee_comment = "";
  this.read_record = 0;
};

// get all employees
Employee.getAllEmployees = (result) => {
  dbConn.query("SELECT * FROM employee", (err, res) => {
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

// creaet new employee
Employee.createNewEmployee = (employeeReqBody, result) => {
  dbConn.query("INSERT INTO employee SET ? ", employeeReqBody, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// uppdate employee
Employee.updateNewEmployee = (id, employeeReqBody, result) => {
  dbConn.query(
    "UPDATE employee SET job_name = ?, first_name = ?, last_name = ?, father_name = ?, dob = ?, gender = ?, address = ?, phone_number = ?, aadhar = ?, organization = ?, job_type = ?, job_exp = ?, present_or_previous_company = ?, present_salary = ?, expected_salary = ? WHERE id = ?",
    [
      employeeReqBody.job_name,
      employeeReqBody.first_name,
      employeeReqBody.last_name,
      employeeReqBody.father_name,
      employeeReqBody.dob,
      employeeReqBody.gender,
      employeeReqBody.address,
      employeeReqBody.phone_number,
      employeeReqBody.aadhar,
      employeeReqBody.organization,
      employeeReqBody.job_type,
      employeeReqBody.job_exp,
      employeeReqBody.present_or_previous_company,
      employeeReqBody.present_salary,
      employeeReqBody.expected_salary,
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

// get employee by id
Employee.deleteEmployee = (id, result) => {
  dbConn.query("DELETE FROM employee WHERE id=?", id, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Employee;
