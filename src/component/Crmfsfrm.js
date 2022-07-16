import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideNav from "./SideNav";
import { addEmployeeInitialValues } from "../validations/initialValues";
import Logohead from "./Logohead";
import AllRoles from "./AllRoles";

const Crmfsfrm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  const initialValues = addEmployeeInitialValues();

  const [userdata, setUserdata] = useState({
    ...initialValues,
  });

  
  const {
    Employeeid,
    userName,
    Address,
    Pincode,
    MNumber,
    BankName,
    BankBranch,
    IFSCCODE,
    AccountNo,
    AdharCard,
    PanCard,
    AlternateNo,
    email,
    state,
    designation,
    AssignedManager,
    companylocation,
    Status,
    AAddress,
    CBankBranch,
    district,
    city,
  } = userdata;

  const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    // e.preventDefault();
    const body = userdata;
    console.log(body);
    const response = await fetch(`http://localhost:8001/lmv/register`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    });
  };

//getting role req from backend






  return (
    <>


      {<Logohead />}
      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <u style={{ color: "white", width: "100vw" }}>
            <b>Add Employee</b>
          </u>
        </h3>
      </div>
     
      <div className="container-fluid d-flex">
        <SideNav />
        {/* <div > */}
        <Form  id="addEmployeeFrom" onSubmit={handleSubmit(submitHandler)}>
        <div className="text-center mb-3">
            <h5 className="mb-5" id="empdeslabel" style={{ color: "#00adff" }}>
              ADD EMPLOYEE DETAILS
            </h5>
          </div>
          
          <h5>
            <u style={{ color: "#3fa2da",marginLeft:"13px" }}>
              <b>PERSONAL DETAILS:-</b>
            </u>
          </h5>
          <Container>
            <Row>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b>EMPLOYEE ID:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("Employeeid", {
                      required: "Please Enter Your Employee Id",
                      pattern: {
                        value: /(?<!\d)\d{5}(?!\d)/g,
                        message: "Invalid  Employee Id",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="EmployeeId"
                      aria-label="Employeeid"
                      aria-describedby="basic-addon1"
                      name="Employeeid"
                      value={Employeeid}
                      onChange={changeHandler}
                      // helper={error}
                    />
                  </InputGroup>
                  {errors.Employeeid && (
                    <small className="text-danger">
                      {errors.Employeeid.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b> EMPLOYEE NAME:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("userName", {
                      required: "Please Enter Your User Name ",
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Invalid User Name",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="User Name"
                      aria-label="userName"
                      aria-describedby="basic-addon1"
                      value={userName}
                      name="userName"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.userName && (
                    <small className="text-danger">
                      {errors.userName.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b>MOBILE NUMBER:</b>
                  </label>
                  <InputGroup
                    {...register("MNumber", {
                      required: "Please Enter The Mobile Number",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Invalid Mobile Number",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                      aria-describedby="basic-addon1"
                      name="MNumber"
                      type="number"
                      value={MNumber}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.MNumber && (
                    <small className="text-danger">
                      {errors.MNumber.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3">
                  <label htmlFor="mid">
                    <b> EMAIL:</b>
                  </label>
                  <InputGroup
                    {...register("email", {
                      required: "Please Enter Your Email",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid Email",
                      },
                    })}
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      id="emailid"
                      name="email"
                      value={email}
                      onChange={changeHandler}
                    />
                    {/* /> */}
                  </InputGroup>
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={4} lg={3} sm={12}>
                {/* <div className="mb-3  "> */}
                <label htmlFor="mid">
                  <b>ALTERNATE NUMBER:</b>
                </label>
                <InputGroup
                  className="mb-3"
                  {...register("AlternateNo", {
                    required: "Alternate Number Is Required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Invalid Alternate Number",
                    },
                  })}
                >
                  <FormControl
                    placeholder="Alternate  Number"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="number"
                    name="AlternateNo"
                    value={AlternateNo}
                    onChange={changeHandler}
                  />
                </InputGroup>
                {errors.AlternateNo && (
                  <small className="text-danger">
                    {errors.AlternateNo.message}
                  </small>
                )}
                {/* </div> */}
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b>PANCARD NO:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("PanCard", {
                      required: "Please Enter Your PanCard",
                      pattern: {
                        value: /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,
                        message: "Invalid Pan Card",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="PAN card Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="PanCard"
                      value={PanCard}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.PanCard && (
                    <small className="text-danger">
                      {errors.PanCard.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b>AADHAR CARD NO:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("AdharCard", {
                      required: "Please Enter Your Adhar Card",
                      pattern: {
                        value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                        message: "Invalid Adhar Card",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="AAdhard Card Number"
                      aria-label="AdharCard"
                      aria-describedby="basic-addon1"
                      name="AdharCard"
                      value={AdharCard}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.AdharCard && (
                    <small className="text-danger">
                      {errors.AdharCard.message}
                    </small>
                  )}
                </div>
              </Col>
               <Col>
                <div className="mb-3 form-check" id={"crmselect"}>
                  <label>
                    <b>STATUS:</b>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    placeholder="Select"
                    name="Status"
                    onChange={changeHandler}
                  >
                    <option>Select Status</option>
                    <option name={Status} value="In Active">
                      In Active
                    </option>
                     <option name={Status} value="Active">
                      Active
                    </option>
                   
                  </Form.Select>
                </div>
              </Col>
            </Row>
          </Container>

          <h5>
            <u style={{ color: "#3fa2da",marginLeft:"13px" }}>
              <b>BANK DETAILS</b>
            </u>
          </h5>
          <Container>
            <Row>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 flex ">
                  <label htmlFor="mid">
                    <b>BANK NAME:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("BankName", {
                      required: "Please Enter your Bank Name",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Invalid Bank Name",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Bank Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="BankName"
                      onChange={changeHandler}
                      value={BankName}
                    />
                  </InputGroup>
                  {errors.BankName && (
                    <small className="text-danger">
                      {errors.BankName.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 flex  ">
                  <label htmlFor="mid">
                    <b>ACCOUNT NUMBER</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("AccountNo", {
                      required: "Please Enter Your Account Number",
                      pattern: {
                        value: /^\d{9,18}$/,
                        message: "Invalid Account Number",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Bank Account Number"
                      aria-label="AccountNo"
                      aria-describedby="basic-addon1"
                      name="AccountNo"
                      value={AccountNo}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.AccountNo && (
                    <small className="text-danger">
                      {errors.AccountNo.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b>IFSC CODE:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("IFSCCODE", {
                      required: "Please Enter Your IFSC code",
                      pattern: {
                        value: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
                        message: "Invalid IFSC Code",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="IFSC Code"
                      aria-label="IFSC"
                      aria-describedby="basic-addon1"
                      name="IFSCCODE"
                      value={IFSCCODE}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.IFSCCODE && (
                    <small className="text-danger">
                      {errors.IFSCCODE.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3">
                  <label htmlFor="mid">
                    <b> BRANCH NAME:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("BankBranch", {
                      required: "Please Enter Your Branch Name ",
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Invalid User Name",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="User Name"
                      aria-label="BankBranch"
                      aria-describedby="basic-addon1"
                      value={BankBranch}
                      name="BankBranch"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.BankBranch && (
                    <small className="text-danger">
                      {errors.BankBranch.message}
                    </small>
                  )}
                </div>
              </Col>
            </Row>
          </Container>

          <div>
            <h5>
              <u style={{ color: "#3fa2da",marginLeft:"13px" }}>
                <b>ADDRESS:</b>
              </u>
            </h5>
            <Container>
              <Row>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3  ">
                    <label htmlFor="mid">
                      <b>ADDRESS 1:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("Address", {
                        required: "Please Enter Your Address",
                        // pattern: {
                        //   value: /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/,
                        //   message: "Invalid address Number",
                        // },
                      })}
                    >
                      <FormControl
                        placeholder="Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={Address}
                        name="Address"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.Address && (
                      <small className="text-danger">
                        {errors.Address.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3   ">
                    <label htmlFor="mid">
                      <b> ADDRESS 2:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("Address", {
                        required: "Please Enter Your Address",
                        // pattern: {
                        //   value: /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/,
                        //   message: "Invalid address Number",
                        // },
                      })}
                    >
                      <FormControl
                        placeholder="Alternate Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={AAddress}
                        name="AAddress"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.Address && (
                      <small className="text-danger">
                        {errors.Address.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3 ">
                    <label htmlFor="mid">
                      <b>PINCODE:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("Pincode", {
                        required: "Please Enter Your Pincode",
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: "Invalid Pincode",
                        },
                      })}
                    >
                      <FormControl
                        placeholder="PINCODE"
                        aria-label="PINCODE"
                        aria-describedby="basic-addon1"
                        name="Pincode"
                        value={Pincode}
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.Pincode && (
                      <small className="text-danger">
                        {errors.Pincode.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3 ">
                    <label htmlFor="mid">
                      <b>STATE:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("state", {
                        required: "Please Enter Your State Name",
                        // pattern: {
                        //   value:/([A-Z][a-z]+\s?)+,\s[A-Z]{2}/,
                        //   message: "Please Enter  A Valid state Name",
                        // },
                      })}
                    >
                      <FormControl
                        aria-label="Default select example"
                        placeholder="please Enter Your State"
                        value={state}
                        name="state"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.state && (
                      <small className="text-danger">
                        {errors.state.message}
                      </small>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="districtdiv">
            <Container>
              <Row>
                <Col md={4} lg={6} sm={12}>
                  <div className="mb-3">
                    <label htmlFor="mid">
                      <b>DISTRICT:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("district", {
                        required: "Please Enter Your State Name",
                        // pattern: {
                        //   value:/([A-Z][a-z]+\s?)+,\s[A-Z]{2}/,
                        //   message: "Please Enter  A Valid state Name",
                        // },
                      })}
                    >
                      <FormControl
                        aria-label="Default select example"
                        placeholder="please Enter Your State"
                        // style={{ width: "212px" }}
                        value={district}
                        name="district"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.district && (
                      <small className="text-danger">
                        {errors.district.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={6} sm={12}>
                  <div className="mb-3 ">
                    <label htmlFor="mid">
                      <b>CITY:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("city", {
                        required: "Please Enter Your State Name",
                        // pattern: {
                        //     value:/([A-Z][a-z]+\s?)+,\s[A-Z]{2}/,
                        //     message: "Please Enter  A Valid City Name",
                        //   },
                      })}
                    >
                      <FormControl
                        aria-label="Default select example"
                        placeholder="please Enter Your State"
                        // style={{ width: "212px" }}
                        value={city}
                        name="city"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.city && (
                      <small className="text-danger">
                        {errors.city.message}
                      </small>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="d-flex "></div>
 

          <h5>
            <u style={{ color: "#3fa2da",marginLeft:"6px"}}>
              <b>COMPANY DETAILS:</b>
            </u>
          </h5>
    

          <Container style={{marginLeft: "-12px"}}>
            <Row>
              <Col>
                <div className="mb-3 form-check" id={"crmselect"}>
                  <label>
                    <b>Designation</b>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    placeholder="Select"
                    name="designation"
                    onChange={changeHandler}
                  >
                    <option>Select Designation</option>
                    <option name={designation} value="Managing Director">
                      Managing Director
                    </option>
                    <option name={designation} value="Admin">
                      Admin
                    </option>
                    <option name={designation} value="CEO">
                      CEO
                    </option>
                    <option name={designation} value="Principle Manager">
                      Principle Manager
                    </option>
                    <option name={designation} value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                  </Form.Select>
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b>ASSIGNED MANAGER:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("AssignedManager", {
                      required: "Please Enter Your assigned Manager",
                      // pattern: {
                      //   value:password.trim().length>4,
                      //   message: "INVALIDE password",
                      // },
                    })}
                  >
                    <FormControl
                      placeholder="Assigned Manager"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="AssignedManager"
                      value={AssignedManager}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.AssignedManager && (
                    <small className="text-danger">
                      {errors.AssignedManager.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3  ">
                  <label htmlFor="mid">
                    <b>LOCATION:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("companylocation", {
                      required: "Please Enter Your branch location",
                      // pattern: {
                      //   value: /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/,
                      //   message: "Invalid address Number",
                      // },
                    })}
                  >
                    <FormControl
                      placeholder="Company Location"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={companylocation}
                      name="companylocation"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.companylocation && (
                    <small className="text-danger">
                      {errors.companylocation.message}
                    </small>
                  )}
                </div>
              </Col>
              <Col md={4} lg={3} sm={12}>
                <div className="mb-3 ">
                  <label htmlFor="mid">
                    <b> BRANCH:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("CBankBranch", {
                      required: "Please Enter Your Branch Name ",
                      pattern: {
                        value: /[A-Za-z]/,
                        message: "Invalid User Name",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Company Branch"
                      aria-label="CBankBranch"
                      aria-describedby="basic-addon1"
                      value={CBankBranch}
                      name="CBankBranch"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.CBankBranch && (
                    <small className="text-danger">
                      {errors.CBankBranch.message}
                    </small>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
          <div>
            <div className="d-flex">{/*  */}</div>
          </div>

          <div className=" text-center">
            <Button 
              style={{
                backgroundColor: "#3fa2da",
                text: "white",
                width: "142px",
                marginTop: "40px"
              }}
              type="submit"
            >
              <b>SUBMIT</b>
            </Button>
          </div>
        </Form>
      </div>

gfg

    </>
  );
};

export default Crmfsfrm;
