import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Button,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const initialValues = {
  fname: "",
  lname: "",
  country: "",
  company: "",
  age: "",
};

export default function AddModal({ toggle }) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // name = "fname"
    // value = "A"
    setValues({
      ...values,
      [name]: value, // fname: "A"
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const { fname, lname, age, company, country } = values;
    // if (fname.trim() !== '' && lname.trim() !== '' ) {
    // ["", "", ""....]
    if (Object.values(values).every((v) => v.trim() !== "")) {
      alert("Success.");
    } else {
      alert("Please fill out all the required fields.");
    }
  };

  const { fname, lname, age, company, country } = values;

  console.log(values);
  return (
    <>
      <ModalHeader toggle={toggle}>Add New Student?</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup row>
            <Label sm={2}>First Name *</Label>
            <Col sm={10}>
              <Input
                value={fname}
                onChange={handleInputChange}
                name="fname"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Last Name *</Label>
            <Col sm={10}>
              <Input
                value={lname}
                onChange={handleInputChange}
                name="lname"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Country *</Label>
            <Col sm={10}>
              <Input
                value={country}
                onChange={handleInputChange}
                name="country"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Company *</Label>
            <Col sm={10}>
              <Input
                value={company}
                onChange={handleInputChange}
                name="company"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Age *</Label>
            <Col sm={10}>
              <Input
                value={age}
                onChange={handleInputChange}
                name="age"
                type="number"
              />
            </Col>
          </FormGroup>
          <FormGroup className="d-flex justify-content-end">
            <Button className="me-3" color="primary">
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={() => toggle(null, null)}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </>
  );
}
