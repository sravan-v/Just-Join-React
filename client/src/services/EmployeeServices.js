import axios from "axios";

// fetch all employees
export async function FetchAllEmployeesService() {
  console.log("S 1");
  try {
    const results = await axios.get("http://localhost:5000/api/v1/employees");
    const data = results.data;
    return data;
  } catch (err) {
    throw err;
  }
}

// fetch single employees
export async function FetchSingleEmployeesService(id) {
  console.log("S 2 ", id);
  try {
    const results = await axios.get(
      `http://localhost:5000/api/v1/employees/${id}`
    );
    const data = results.data;
    return data;
  } catch (err) {
    throw err;
  }
}

// send employees
export async function sendEmployeesService(data) {
  console.log("S 3");
  try {
    const results = await axios.post(
      `http://localhost:5000/api/v1/employees/`,
      data
    );
    return results;
  } catch (err) {
    throw err;
  }
}

// update employee
export async function updateEmployeesService(id, data) {
  console.log("S 4");
  try {
    const results = await axios.put(
      `http://localhost:5000/api/v1/employees/${id}`,
      data
    );
    return results;
  } catch (err) {
    throw err;
  }
}

// delete employee
export async function deleteEmployeesService(id) {
  console.log("S 5");
  try {
    const results = await axios.delete(
      `http://localhost:5000/api/v1/employees/${id}`
    );
    return results;
  } catch (err) {
    throw err;
  }
}
