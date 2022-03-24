import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Employee from "./components/employee/Employee";
import Employees from "./pages/Employees";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Employee />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
}

export default App;
