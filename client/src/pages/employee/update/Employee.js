import React, { useState, useEffect } from "react";
import {
  Container,
  Segment,
  Grid,
  Form,
  Input,
  Label,
  TextArea,
  Icon,
  Message,
} from "semantic-ui-react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import { Colors } from "../../../values/Colors";
import { SubmitButton } from "../../../components/buttons/SubmitButton";
import EmployeeData from "../../../utils/EmployeeData.json";
import {
  FetchSingleEmployeesService,
  updateEmployeesService,
} from "../../../services/EmployeeServices";

const ContainerWrapper = styled(Container)`
  padding: 30px 0 50px 0 !important;
  &&&& {
    .row {
      padding: 0.25rem 0 !important;
    }
  }
`;

const StyledLabel = styled(Label)`
  font-size: 16px !important;
  background-color: transparent !important;
  color: ${Colors.primary} !important;
  margin-bottom: 4px !important;
  padding-left: 0 !important;
`;

const RibbonLabel = styled(Label)`
  font-size: 18px !important;
  color: #ffffff !important;
  margin-bottom: 1rem !important;
  margin-top: 1.5rem !important;
  background-color: ${Colors.secondary} !important;
  &&&&::after {
    border-right-color: #d50000 !important;
  }
`;

const initialState = {
  job_name: "",
  first_name: "",
  last_name: "",
  father_name: "",
  dob: "",
  gender: "",
  aadhar: "",
  phone_number: "",
  address: "",
  organization: "",
  job_type: "",
  job_exp: "",
  present_company: "",
  present_salary: "",
  expected_salary: "",
  reached: "No",
  paid: "No",
  employee_status: "Progress",
  employee_comment: "",
  read_record: 0,
  is_deleted: 0,
  last_updated:
    new Date().toISOString().split("T")[0] +
    " " +
    new Date().toTimeString().split(" ")[0],
};

function Employee() {
  const [user, setUser] = useState(initialState);
  const [org, setOrg] = useState("default");
  const { id } = useParams();

  const gender = EmployeeData[0].gender;
  const reached = EmployeeData[1].reached;
  const paid = EmployeeData[2].paid;
  const employee_status = EmployeeData[3].employee_status;
  const organization = EmployeeData[4].organization;
  const schools = EmployeeData[5].schools;
  const colleges = EmployeeData[6].colleges;
  const hospitals = EmployeeData[7].hospitals;
  const superMarkets = EmployeeData[8].superMarkets;
  const malls = EmployeeData[9].malls;
  const defaultJob = [
    { key: "def", text: "Select Job Category", value: "default" },
  ];

  useEffect(() => {
    FetchSingleEmployeesService(id).then((res) => {
      const result = res.data[0];
      setUser(result);
      setOrg(result.organization);
    });
  }, [id]);

  const handleInput = (e, result) => {
    const { name, value } = result || e.target;
    console.log("name, value  ", name, value);
    if (name === "organization") {
      console.log("org ", name);
      setOrg(value);
    }
    setUser({ ...user, [name]: value });
  };

  const formControl = (type) => {
    console.log("Switch Before ", type);
    switch (type) {
      case "School":
        if (type.length) {
          console.log("enter");
          return (
            <Form.Select
              onChange={handleInput}
              value={user.job_type}
              name="job_type"
              options={schools}
              placeholder="Select Job Category"
            />
          );
        }
        break;

      case "College":
        if (type.length) {
          return (
            <Form.Select
              onChange={handleInput}
              value={user.job_type}
              name="job_type"
              options={colleges}
              placeholder="Select Job Category"
            />
          );
        }
        break;
      case "Hospital":
        if (type.length) {
          return (
            <Form.Select
              onChange={handleInput}
              value={user.job_type}
              name="job_type"
              options={hospitals}
              placeholder="Select Job Category"
            />
          );
        }
        break;
      case "Super Market":
        if (type.length) {
          return (
            <Form.Select
              onChange={handleInput}
              value={user.job_type}
              name="job_type"
              options={superMarkets}
              placeholder="Select Job Category"
            />
          );
        }
        break;
      case "Malls":
        if (type.length) {
          return (
            <Form.Select
              onChange={handleInput}
              value={user.job_type}
              name="job_type"
              options={malls}
              placeholder="Select Job Category"
            />
          );
        }
        break;
      case "Others":
        if (type.length) {
          return (
            <Input
              name="job_type"
              placeholder="Enter Job Type"
              onChange={handleInput}
              value={user.job_type}
            />
          );
        }
        break;
      case "default":
        if (type.length) {
          return (
            <Form.Select
              onChange={handleInput}
              name="default"
              options={defaultJob}
              placeholder="Select Job Type"
            />
          );
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Submit user => ", user);
    updateEmployeesService(id, user)
      .then((res) => {
        console.log("Success, ", res);
      })
      .catch(() => console.log("Failed"));
  };

  return (
    <ContainerWrapper>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Message as="h4" color="blue" style={{ marginBottom: "1rem" }}>
              Need Job? Please fill the below application
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment>
        <Form
          onSubmit={handleSubmit}
          style={{ paddingTop: "2rem", paddingBottom: "4rem" }}
        >
          <Grid relaxed>
            <Grid.Row>
              <Grid.Column width={12}>
                <RibbonLabel ribbon>
                  <Icon name="user" />
                  Personal Details
                </RibbonLabel>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={4}>
                <Label>
                  <Icon name="time" />
                  Last Updated: {user.last_updated}
                </Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Applying for the Job Name</StyledLabel>
                  <Input
                    name="job_name"
                    placeholder="Ex: Teacher, Supervisor, Watchman, etc.."
                    value={user.job_name}
                    onChange={handleInput}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>
                    First Name <span>*</span>
                  </StyledLabel>
                  <Input
                    name="first_name"
                    placeholder="Ex: John"
                    onChange={handleInput}
                    value={user.first_name}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Last Name</StyledLabel>
                  <Input
                    name="last_name"
                    placeholder="Ex: Alex"
                    onChange={handleInput}
                    value={user.last_name}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Father Name</StyledLabel>
                  <Input
                    name="father_name"
                    placeholder="Ex: Peter John"
                    value={user.father_name}
                    onChange={handleInput}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>
                    Date of Birth <span>*</span>
                  </StyledLabel>
                  <Input
                    name="dob"
                    type="date"
                    placeholder="Ex: 14/07/1997"
                    onChange={handleInput}
                    value={user.dob}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>
                    Gender <span>*</span>
                  </StyledLabel>
                  <Form.Select
                    name="gender"
                    placeholder="Gender"
                    options={gender}
                    onChange={handleInput}
                    value={user.gender}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Aadhar Number</StyledLabel>
                  <NumberFormat
                    name="aadhar"
                    placeholder="Ex: 87XX 52XX 77XX 10XX"
                    onChange={handleInput}
                    value={user.aadhar}
                    format="#### #### #### ####"
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>
                    Phone Number <span>*</span>
                  </StyledLabel>
                  <NumberFormat
                    name="phone_number"
                    placeholder="Ex: 9999999999"
                    onChange={handleInput}
                    value={user.phone_number}
                    format="##########"
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Address *</StyledLabel>
                  <TextArea
                    onChange={handleInput}
                    value={user.address}
                    rows={1}
                    name="address"
                    placeholder="Ex: 5-12/A89, Apex Nagar, Delhi, India, 432242"
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <RibbonLabel ribbon>
                  <Icon name="user" />
                  Professional Details
                </RibbonLabel>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Looking for employee organization</StyledLabel>
                  <Form.Select
                    name="organization"
                    options={organization}
                    placeholder="Choose Employee Category"
                    onChange={handleInput}
                    value={user.organization}
                  />
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Job Type</StyledLabel>
                  {formControl(org)}
                </Form.Field>
              </Grid.Column>

              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Experience</StyledLabel>
                  <Input
                    label={{ basic: true, content: "years" }}
                    labelPosition="right"
                    name="job_exp"
                    placeholder="Ex: 2"
                    value={user.job_exp}
                    onChange={handleInput}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Present/Previous Organization Name</StyledLabel>
                  <Input
                    name="present_company"
                    placeholder="Ex: Tata, Wipro, etc.."
                    onChange={handleInput}
                    value={user.present_company}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Present Salary</StyledLabel>
                  <NumberFormat
                    name="present_salary"
                    placeholder="Ex: 20,000"
                    onChange={handleInput}
                    value={user.present_salary}
                    thousandSeparator={true}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Expected Salary</StyledLabel>
                  <NumberFormat
                    name="expected_salary"
                    placeholder="Ex: 30,000"
                    onChange={handleInput}
                    value={user.expected_salary}
                    thousandSeparator={true}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="3">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Reached?</StyledLabel>
                  <Form.Select
                    name="reached"
                    placeholder="Select"
                    options={reached}
                    onChange={handleInput}
                    value={user.reached}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Paid?</StyledLabel>
                  <Form.Select
                    name="paid"
                    placeholder="Select"
                    options={paid}
                    onChange={handleInput}
                    value={user.paid}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Status</StyledLabel>
                  <Form.Select
                    name="employee_status"
                    placeholder="Select"
                    options={employee_status}
                    onChange={handleInput}
                    value={user.employee_status}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="1">
              <Grid.Column>
                <Form.Field>
                  <StyledLabel>Comments</StyledLabel>
                  <TextArea
                    fluid
                    rows={1}
                    name="employee_comment"
                    placeholder="Write Comment..."
                    onChange={handleInput}
                    value={user.employee_comment}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ marginTop: "1rem" }}>
              <Grid.Column>
                <SubmitButton active text="Update" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    </ContainerWrapper>
  );
}

export default Employee;
