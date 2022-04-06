import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "semantic-ui-react";
import styled from "styled-components";
import {
  FetchAllEmployeesService,
  deleteEmployeesService,
} from "../../services/EmployeeServices";

const ContainerWrapper = styled(Container)`
  padding: 30px 0 50px 0 !important;
  &&&& {
    .row {
      padding: 0.25rem 0 !important;
    }
  }
`;

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    FetchAllEmployeesService().then((res) => {
      if (res.status === 200) {
        const results = res.data;
        setEmployees(results);
      }
    });
  };

  const handleEdit = (id) => {};

  const handleDelete = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      deleteEmployeesService(id).then((res) => {
        if (res.data.status == 200) {
          console.log("Successfully deleted");
        }
      });
      setTimeout(() => {
        fetchData();
      }, 500);
    }
  };

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
            <Table.HeaderCell></Table.HeaderCell>
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
                <Table.Cell>
                  <Link to={`/employee/update/${emp.id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button onClick={(e) => handleDelete(e, emp.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </ContainerWrapper>
  );
}

export default Employees;
