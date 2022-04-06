import React, { useState } from "react";
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
import NumberFormat from "react-number-format";
import { Colors } from "../../values/Colors";
import { SubmitButton } from "../../components/buttons/SubmitButton";
import EmployeeData from "../../utils/EmployeeData.json";
import { sendEmployeesService } from "../../services/EmployeeServices";
import axios from "axios";

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
  const [check, setCheck] = useState(false);
  const [org, setOrg] = useState("default");

  const gender = EmployeeData[0].gender;
  const organization = EmployeeData[4].organization;
  const schools = EmployeeData[5].schools;
  const colleges = EmployeeData[6].colleges;
  const hospitals = EmployeeData[7].hospitals;
  const superMarkets = EmployeeData[8].superMarkets;
  const malls = EmployeeData[9].malls;
  const defaultJob = [
    { key: "def", text: "Select Organization", value: "default" },
  ];

  const handleInput = (e, result) => {
    const { name, value } = result || e.target;
    if (name === "organization") {
      // console.log("org ", name);
      setOrg(value);
    }
    setUser({ ...user, [name]: value });
  };

  const formControl = (type) => {
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
              placeholder="Select Organization"
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
              placeholder="Select Organization"
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
              placeholder="Select Organization"
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
              placeholder="Select Organization"
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
              placeholder="Select Organization"
            />
          );
        }
        break;
      case "Others":
        if (type.length) {
          return (
            <Input
              onChange={handleInput}
              value={user.job_type}
              name="job_type"
              placeholder="Enter Job Type"
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
    setCheck(!check);
    console.log("Final Submit user => ", user);
    sendEmployeesService(user)
      .then((res) => {
        console.log("Success, ", res);
      })
      .catch(() => console.log("Failed"));
    setUser(initialState);
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
              <Grid.Column>
                <RibbonLabel ribbon>
                  <Icon name="user" />
                  Personal Details
                </RibbonLabel>
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
                    value={user.gender}
                    onChange={handleInput}
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
                    onChange={handleInput}
                    value={user.organization}
                    name="organization"
                    options={organization}
                    placeholder="Choose Employee Category"
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
                    onChange={handleInput}
                    value={user.job_exp}
                    name="job_exp"
                    placeholder="Ex: 2"
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
            <Grid.Row style={{ marginTop: "1rem" }}>
              <Grid.Column>
                {
                  <Form.Checkbox
                    label="I agree to the Terms and Conditions"
                    checked={check}
                    onChange={(e) => setCheck(!check)}
                  />
                }

                {check ? (
                  <SubmitButton active text="Submit" />
                ) : (
                  <SubmitButton text="Submit" />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    </ContainerWrapper>
  );
}

export default Employee;
