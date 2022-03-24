import axios from "axios";

export async function EmployeesService() {
  try {
    const results = await axios.get("http://localhost:5000/api/v1/employees");
    const data = results.data;
    return data;
  } catch (err) {
    throw err;
  }
}
