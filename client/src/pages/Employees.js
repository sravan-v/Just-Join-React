import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import ContainerWrapper from "../components/container/ContainerWrapper";
import { EmployeesService } from "../services/EmployeesService";

function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeesService().then((res) => {
      setEmployees(res);
    });
  }, []);

  return (
    <ContainerWrapper>
      <Table striped color="red">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Purpose</Table.HeaderCell>
            <Table.HeaderCell>Mobile</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((emp) => {
            return (
              <Table.Row key={emp.id}>
                <Table.Cell>{`${emp.first_name} ${emp.last_name}`}</Table.Cell>
                <Table.Cell>{emp.job_name}</Table.Cell>
                <Table.Cell>{emp.phone_number}</Table.Cell>
                <Table.Cell>{emp.address}</Table.Cell>
                {emp.employee_status == "Progress" ? (
                  <Table.Cell>{emp.employee_status}</Table.Cell>
                ) : (
                  <Table.Cell positive>{emp.employee_status}</Table.Cell>
                )}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </ContainerWrapper>
  );
}

export default Employees;
