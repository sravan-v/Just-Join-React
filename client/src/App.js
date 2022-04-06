import React from "react";
import { Routes, Route } from "react-router-dom";
import Employee from "./pages/employee/Employee";
import Employees from "./pages/employee/Employees";
import EmployeeUpdate from "./pages/employee/update/Employee";

function App() {
  return (
    <Routes>
      <Route path="/employee" element={<Employee />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employee/update/:id" element={<EmployeeUpdate />} />
    </Routes>
  );
}

export default App;
