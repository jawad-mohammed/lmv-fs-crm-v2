import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../App.css";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmployeeDetails from "./EmployeeDetails";
import { addEmployeeValidation } from "../validations/validationSchema";
import { addEmployeeInitialValues } from "../validations/initialValues";

const Crmfsfrm = () => {
  const initialValues = addEmployeeInitialValues();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loginFields, setLoginFields] = useState({ ...initialValues });
  useEffect(() => {
    if (isSubmitted) {
      setErrors(validate(loginFields));
    }
  }, [loginFields, isSubmitted]);

  const validate = (values) => {
    setIsSubmitted(true);
    return addEmployeeValidation(values);
  };

  const onChangeLoginFields = (value, name) => {
    setLoginFields({
      ...loginFields,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const result = validate(loginFields);
    if (Object.values(result).every((key, index) => key === "")) {
      const { email, password } = loginFields;
      // await obj.user.login(email, password, {});
      setIsSubmitted(false);
    } else {
      e.preventDefault();
      try {
        const body = { ...addEmployeeInitialValues };
        const response = await fetch("/formvalue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
      console.log(userdata);
    }
  };

  const redirectToSignUp = () => {
    navigate("/create-account");
  };
  const [userdata, setUserdata] = useState({
    Employeeid: "",
    userName: "",
    Address: "",
    city: "",
    Pincode: "",
    MNumber: "",
    BankName: "",
    BankBranch: "",
    IFSCCODE: "",
    AccountNo: "",
    AdharCard: "",
    PanCard: "",
    AlternateNo: "",
    MotherName: "",
    email: "",
    state: "",
    password: "",
    designation: "",
    AssignedManager: "",
  });
  const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: [e.target.value] });
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //
  // };
  const {
    Employeeid,
    userName,
    Address,
    city,
    Pincode,
    MNumber,
    BankName,
    BankBranch,
    IFSCCODE,
    AccountNo,
    AdharCard,
    PanCard,
    AlternateNo,
    MotherName,
    email,
    state,
    password,
    designation,
    AssignedManager,
  } = userdata;

  return (
    <>
      <div className="container ">
        <EmployeeDetails />
        <div className="sform">
          <form autoComplete="off">
            <div>
              <div className="d-flex flex-wrap">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>EMPLOYEE ID:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="EmployeeId"
                      aria-label="Employeeid"
                      aria-describedby="basic-addon1"
                      name="Employeeid"
                      value={Employeeid}
                      onChange={changeHandler}
                      helper={error}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>NAME:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="User Name"
                      aria-label="userName"
                      aria-describedby="basic-addon1"
                      value={userName}
                      name="userName"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>ADDRESS:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Address"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={Address}
                      name="Address"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>City</b>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "212px" }}
                    value={city}
                    name="city"
                    onChange={changeHandler}
                  >
                    <option>Hyderabad</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>PINCODE:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Branch Name"
                      aria-label="PINCODE"
                      aria-describedby="basic-addon1"
                      name="Pincode"
                      value={Pincode}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>MOBILE NUMBER:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                      aria-describedby="basic-addon1"
                      name="MNumber"
                      type="tel"
                      value={MNumber}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
              </div>

              {/* 3rd line */}
              <div className="d-flex flex-wrap">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Bank Name:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Bank Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="BankName"
                      onChange={changeHandler}
                      value={BankName}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Bank Branch:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Branch Name"
                      aria-label="BankBranch"
                      aria-describedby="basic-addon1"
                      name="BankBranch"
                      value={BankBranch}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>IFSC CODE</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="IFSC Code"
                      aria-label="IFSC"
                      aria-describedby="basic-addon1"
                      name="IFSCCODE"
                      value={IFSCCODE}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
              </div>

              {/* 4th line */}
              <div className="d-flex flex-wrap justify-content-center”">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Account Number</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Bank Account Number"
                      aria-label="AccountNo"
                      aria-describedby="basic-addon1"
                      name="AccountNo"
                      value={AccountNo}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Adhar Card No:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Adhard Card Number"
                      aria-label="AdharCard"
                      aria-describedby="basic-addon1"
                      name="AdharCard"
                      value={AdharCard}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Pan Card No:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="PAN card Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="PanCard"
                      value={PanCard}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
              </div>
              {/* 5th line */}
              <div className="d-flex flex-wrap justify-content-center”">
                <div className="form-check" id="statelbl">
                  <label htmlFor="mid" className="labelfrm">
                    <b>State</b>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    name="state"
                    value={state}
                    onChange={changeHandler}
                  >
                    <option>Telangana</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Alternate Number</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Alternate  Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="AlternateNo"
                      value={AlternateNo}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Mother Name:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Mother Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="MotherName"
                      value={MotherName}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>

                {/* 6th line */}
              </div>
              <div className="d-flex flex-wrap ">
                <Form.Group className="mb-3">
                  <Form.Label>
                    <b className="labelfrm">Email address</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="emailid"
                    style={{ width: "451px" }}
                    name="email"
                    value={email}
                    onChange={changeHandler}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </div>
              <div className="d-flex flex-wrap justify-content-center”">
                <div className="mb-3 flex d-flex flex-wrap justify-content-center ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Password:</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      name="password"
                      value={password}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Designation</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Designation"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="designation"
                      value={designation}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Assigned Manager</b>
                  </label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Mother Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="AssignedManager"
                      value={AssignedManager}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                </div>

                {/* 6th line */}
              </div>
              <div className="mb-3 form-check justify-content-center">
                <Button variant="primary" onClick={submitHandler}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Crmfsfrm;
