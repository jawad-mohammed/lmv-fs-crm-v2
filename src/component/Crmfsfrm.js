import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import "../App.css";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmployeeDetails from "./EmployeeDetails";
import { addEmployeeInitialValues } from "../validations/initialValues";

const Crmfsfrm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  // console.log(errors);
  const initialValues = addEmployeeInitialValues();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  

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
  const submitHandler = async (e) => {
    // e.preventDefault();
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
  };
  // console.log(userdata)
  // console.log(errors);

  return (
    <>
      <div className="container ">
        <EmployeeDetails />
        <div className="sform">
          <Form autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
            <div>
              <div className="d-flex flex-wrap">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>EMPLOYEE ID:</b>
                  </label>
                  <InputGroup
                    className="mb-3 invali"
                    {...register("Employeeid", {
                      required: "Please Enter Your Employee Id",
                      pattern: {
                        value: /^[0-9]{4,6}$/,
                        message: "INVALID  Employee Id",
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>NAME:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("userName", {
                      required: "Please Enter Your User Name ",
                      // pattern: {
                      //   value: /^[a-zA-Z]{3,12}[a-zA-Z\s]{3,12}$/,
                      //   message: "Invalid User Name",
                      // },
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>ADDRESS:</b>
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
              </div>
              <div className="d-flex flex-wrap">
                {/*  */}
                <div className="mb-3 ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>City</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("city", {
                      required: "Please Enter Your City Name",
                      // pattern: {
                      //   value: /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/,
                      //   message: "Please Enter  A Valid City Name",
                      // },
                    })}
                  >
                    <FormControl
                      aria-label="Default select example"
                      placeholder="please Enter the Pincode"
                      style={{ width: "212px" }}
                      value={city}
                      name="city"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.city && (
                    <small className="text-danger">{errors.city.message}</small>
                  )}
                </div>
                {/*  */}
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>MOBILE NUMBER:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("MNumber", {
                      required: "Please Enter The Mobile Number",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "INVALID Mobile Number",
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
              </div>

              {/* 3rd line */}
              <div className="d-flex flex-wrap">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Bank Name:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("BankName", {
                      required: "Please Enter your Bank Name",
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "INVALIDE Bank Name",
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Bank Branch:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("BankBranch", {
                      required: "Please Enter Your Bank Branch",
                      pattern: {
                        value: /^[a-zA-z\s]+$/,
                        message: "Invalid Bank Branch",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Branch Name"
                      aria-label="BankBranch"
                      aria-describedby="basic-addon1"
                      name="BankBranch"
                      value={BankBranch}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.BankBranch && (
                    <small className="text-danger">
                      {errors.BankBranch.message}
                    </small>
                  )}
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>IFSC CODE</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("IFSCCODE", {
                      required: "Please Enter Your IFSC code",
                      pattern: {
                        value: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
                        message: "INVALIDE IFSC CODE",
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
              </div>

              {/* 4th line */}
              <div className="d-flex flex-wrap justify-content-center”">
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Account Number</b>
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Adhar Card No:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("AdharCard", {
                      required: "Please Enter Your Adhar Card",
                      pattern: {
                        value: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                        message: "INVALID Adhar Card",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Adhard Card Number"
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Pan Card No:</b>
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
              </div>
              {/* 5th line */}
              <div className="d-flex flex-wrap justify-content-center”">
                {/*  */}
                <div className="mb-3 ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>State</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("state", {
                      required: "Please Enter Your State Name",
                      // pattern: {
                      //   value: /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/,
                      //   message: "Please Enter  A Valid state Name",
                      // },
                    })}
                  >
                    <FormControl
                      aria-label="Default select example"
                      placeholder="please Enter Your State"
                      style={{ width: "212px" }}
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

                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Alternate Number</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("AlternateNo", {
                      required: "Alternate Number Is Required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "INVALIDE AlternateNumber",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Alternate  Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
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
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Mother Name:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("MotherName", {
                      required: "Please Enter Your Mother Name ",
                      pattern: {
                        value: /^[a-zA-Z]{3,12}[a-zA-Z\s]{3,12}$/,
                        message: "Invalid User Name",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="  Mother Name"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="MotherName"
                      value={MotherName}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.MotherName && (
                    <small className="text-danger">
                      {errors.MotherName.message}
                    </small>
                  )}
                </div>

                {/* 6th line */}
              </div>
              <div className="d-flex flex-wrap ">
                {/* <input type={"email"} */}
                <InputGroup
                  className="mb-3"
                  {...register("email", {
                    required: "Please Enter Your Email",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "INVALIDE EMAIL",
                    },
                  })}
                >
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
                    {/* /> */}
                  </Form.Group>
                </InputGroup>
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <div className="d-flex flex-wrap justify-content-center”">
                <div className="mb-3 flex d-flex flex-wrap justify-content-center ">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Password:</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("password", {
                      required: "password  IS REQUIRED",
                      maxLength: 8,
                      pattern: {
                        // value: password.trim().length > 4,
                        message: "INVALIDE password",
                      },
                    })}
                  >
                    <FormControl
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                      name="password"
                      value={password}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Designation</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("designation", {
                      required: "designation  IS REQUIRED",
                      // pattern: {
                      //   value:password.trim().length>4,
                      //   message: "INVALIDE password",
                      // },
                    })}
                  >
                    <FormControl
                      placeholder="Designation"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="designation"
                      value={designation}
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {errors.designation && (
                    <small className="text-danger">
                      {errors.designation.message}
                    </small>
                  )}
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>Assigned Manager</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    {...register("AssignedManager", {
                      required: "AssignedManager  IS REQUIRED",
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

                {/* 6th line */}
              </div>
              <div className="mb-3 form-check justify-content-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Crmfsfrm;
