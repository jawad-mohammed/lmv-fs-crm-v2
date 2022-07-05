import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
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
  } = useForm();
  // console.log(errors);
  // const initialValues = addEmployeeInitialValues();

  // const navigate = useNavigate();

  // const redirectToSignUp = () => {
  //   navigate("/create-account");
  // };
  const [userdata, setUserdata] = useState({
    Employeeid: "",
    userName: "",
    Address: "",
    Pincode: "",
    MNumber: "",
    BankName: "",
    BankBranch: "",
    IFSCCODE: "",
    AccountNo: "",
    AdharCard: "",
    PanCard: "",
    AlternateNo: "",
    email: "",
    state: "",
    designation: "",
    AssignedManager: "",
    companylocation: "",
    Status: "",
    AAddress: "",
    CBankBranch: "",
    district: "",
    city: "",
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
    const response = await fetch(`http://localhost:8000/lmv/register`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    });
  };

  return (
    <>
      <div className="container ">
        <EmployeeDetails />
        <div className="sform">
          <Form onSubmit={handleSubmit(submitHandler)}>
            <h5>
              <u style={{ color: "#3fa2db" }}>Personal Details:</u>
            </h5>
            <div className="col-lg-12 md-4 sm-12">
              <div className="d-flex">
                {/* 1st line */}
                <div className="mb-3 flex ">
                  <label htmlFor="mid" className="labelfrm">
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
                <div className="mb-3 form-check">
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
                {/*  */}
                <div className=" form-check mb-3" style={{ marginTop: "-7px" }}>
                  {/* <input type={"email"} */}
                  <InputGroup
                    {...register("email", {
                      required: "Please Enter Your Email",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid Email",
                      },
                    })}
                  >
                    <Form.Group className="mb-2">
                      <Form.Label>
                        <b className="labelfrm">EMAIL ADDRESS:</b>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        id="emailid"
                        name="email"
                        value={email}
                        onChange={changeHandler}
                      />
                      {/* /> */}
                    </Form.Group>
                  </InputGroup>
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>
              </div>
              {/* 2nd line */}
              <div className="d-flex ">
                <div className="mb-3  ">
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
                </div>
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
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
                <div className="mb-3 form-check">
                  <label htmlFor="mid" className="labelfrm">
                    <b>ADHAR CARD NO:</b>
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
                <div className="mb-3 form-check w-25">
                  <label>
                    <b>STATUS:</b>
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    placeholder="Select"
                    value={Status}
                    onChange={changeHandler}
                  >
                    <option value="Active">Active</option>
                    <option value="In Active">In Active</option>
                  </Form.Select>
                </div>
                {/* 3rd line */}
              </div>
              <h5>
                <u style={{ color: "#3fa2db" }}>Bank Details:</u>
              </h5>
              {/* 3rd line */}
              <div className="col-sm-12">
                <div className="d-flex">
                  <div className="mb-3 flex ">
                    <label htmlFor="mid" className="labelfrm">
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
                  <div className="mb-3 flex form-check ">
                    <label htmlFor="mid" className="labelfrm">
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
                  <div className="mb-3 form-check">
                    <label htmlFor="mid" className="labelfrm">
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
                  {/*  */}
                  <div className="mb-3 form-check">
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
                </div>

                {/*4th line */}

                <div className="col-lg-12 md-4 sm-1">
                  <h5>
                    <u style={{ color: "#3fa2db" }}>ADDRESS:</u>
                  </h5>
                  <div className="d-flex">
                    <div className="mb-3  ">
                      <label htmlFor="mid" className="labelfrm">
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
                    <div className="mb-3   form-check">
                      <label htmlFor="mid" className="labelfrm">
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
                    {/*  */}
                    <div className="mb-3 form-check">
                      <label htmlFor="mid" className="labelfrm">
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
                  </div>
                </div>
                <div className="d-flex col-lg-12 md-4 sm-1 ">
                  <div className="mb-3">
                    <label htmlFor="mid" className="labelfrm">
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
                  <div className="mb-3 form-check">
                    <label htmlFor="mid" className="labelfrm">
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
                </div>
                {/* 5th line */}
                {/*  */}
              </div>
              <h5>
                <u style={{ color: "#3fa2db" }}>COMPANY DETAILS:</u>
              </h5>
              {/* 3rd line */}
              <div className="col-lg-12 md-3 sm-12">
                <div className="d-flex">
                  <div className="mb-3">
                    <label htmlFor="mid" className="labelfrm">
                      <b>DESIGNATION:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("designation", {
                        required: "Please Enter Your Designation",
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
                  <div className="mb-3  form-check">
                    <label htmlFor="mid" className="labelfrm">
                      <b>Branch Location</b>
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
                  {/*  */}
                  <div className="mb-3 form-check">
                    <label htmlFor="mid">
                      <b> BRANCH NAME:</b>
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
                        placeholder="User Name"
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
                </div>
              </div>

              <div className="mb-3 form-check justify-content-center">
                <Button
                  style={{ backgroundColor: "#3fa2db", text: "white" }}
                  type="submit"
                >
                  <b>SUBMIT</b>
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
