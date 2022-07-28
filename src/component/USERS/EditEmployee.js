import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Select from "react-bootstrap/FormSelect";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideNav from "../UIDesign/SideNav";
import { addEmployeeInitialValues } from "../../validations/initialValues";
import Logohead from "../UIDesign/Logohead";

const EditEmployee = (editHandler) => {
  // console.log(EmployeeValidation)
  const [show, SetShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  // console.log(errors);
  const initialValues = addEmployeeInitialValues();
  // for disabbling the assigned Manager

  const [userdata, setUserdata] = useState({
    ...initialValues,
  });

  const {
    employeeid,
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
    officialNum,
    officialEmail,
    officialState,
  } = userdata;

  const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.defaultValue});
    // disabling the assigned Manager
    if (designation === "HR" || "CEO") {
      SetShow(true);
    }
  };

  const submitHandler = async (e) => {
    // e.preventDefault();
    const body = userdata;
    console.log(body);
    const response = await fetch(
      `http://localhost:8001/viewEmployee/lmv/register`,
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(body),
      }
    );
    //alert(`Registered ${ userName}`)
    const parseRes = await response.json();
    //console.log(parseRes.message);
    alert(parseRes.message);
  };

  //getting role req from backend
  //testing
  // const editHandler=async(employeeid)=>{
  //   // navigation("/EditEmployee")
  //    const deleteItem = await fetch(`http://localhost:8001/viewEmployee/lmv/${employeeid}`);
  // const  jsonData = await deleteItem.json()
  //   setUserList(jsonData)
  //   const selectedUser = jsonData
  // console.log(selectedUser);

  // console.log(location.nation)

  const test = useParams();
  const test1 = useLocation();
  return (
    <>
      {/* <div>{location.nation.name}</div> */}

      {/* {editUsers:editUsers} */}
      {/* {console.log(test.state.userName)} */}
      {/* value={test1.state.employeeid} */}
      {/* {console.log()} */}
      {<Logohead />}
      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <u style={{ color: "white", width: "100vw" }}>
            <b>Edit Employee</b>
          </u>
        </h3>
      </div>
      <div className="container-fluid d-flex">
        <SideNav />
        {/* <div > */}
        <Form
          noValidate
          id="addEmployeeFrom"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="text-center mb-3">
            <h5 className="mb-5" id="empdeslabel" style={{ color: "#00adff" }}>
              EDIT EMPLOYEE DETAILS
            </h5>
          </div>

          <h5>
            <u style={{ color: "#3fa2da", marginLeft: "13px" }}>
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
                    // {...register("Employeeid", {
                    //   required: "Please Enter Your Employee Id",
                    //   pattern: {
                    //     value: /(?<!\d)\d{5}(?!\d)/g,
                    //     message: "Invalid  Employee Id",
                    //   },
                    // })}
                  >
                    <FormControl
                      placeholder="EmployeeId"
                      aria-label="Employeeid"
                      aria-describedby="basic-addon1"
                      name="employeeid"
                      defaultValue={test1.state.employeeid}
                      onChange={changeHandler}
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
                    // {...register("userName", {
                    //   required: "Please Enter Your User Name ",
                    //   pattern: {
                    //     value: /[A-Za-z]/,
                    //     message: "Invalid User Name",
                    //   },
                    // })}
                  >
                    <FormControl
                      placeholder="User Name"
                      aria-label="userName"
                      name="userName"
                      defaultValue={test1.state.username}
                      // value={test1.state.username}
                      aria-describedby="basic-addon1"
                      onChange={changeHandler}
                    />
                  </InputGroup>
                  {/* {errors.userName && (
                    <small className="text-danger">
                      {errors.userName.message}
                    </small> */}
                  {/* )} */}
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
                      type="number"
                      name="Mnumber"
                      defaultValue={test1.state.mnumber}
                      onChange={(e)=>changeHandler(e)}
                      // defaultValue={MNumber}
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
                      // defaultValue={email}
                      name="email"
                      defaultValue={test1.state.email}
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
                    // value={AlternateNo}
                   
                    name="AlternateNo"
                      defaultValue={test1.state.alternateno}
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
                      defaultValue={test1.state.pancard}
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
                      defaultValue={test1.state.adharcard}
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
                {/*  */}

                <Col className="wrapper">
                  <div className="mb-3 form-check" id={"crmselect"}>
                    <label>
                      <b>STATUS:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      name="Status"
                      onChange={changeHandler}
                    >
                      <FormControl
                        className="MentorList_DropdownMenu"
                        aria-label="Default select example"
                        placeholder="Select Status"
                        // style={{ width: "212px" }}
                        name="Status"
                        defaultValue={test1.state.status}
                        onChange={changeHandler}
                        list="datalistOptions1"
                        id="exampleDataList"
                        {...register("Status", {
                          required: "Please Select Your Status",
                        })}
                      />

                      <datalist
                        id="datalistOptions1"
                        className="overflowY-scroll"
                      >
                        <option name={Status} value="Active">
                          Active
                        </option>
                        <option name={Status} value="In Active">
                          In Active
                        </option>
                      </datalist>
                    </InputGroup>

                    {errors.Status && (
                      <small className="text-danger">
                        {errors.Status.message}
                      </small>
                    )}
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
          <h5>
            <u style={{ color: "#3fa2da", marginLeft: "13px" }}>
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
                      defaultValue={test1.state.bankname}
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
                      defaultValue={test1.state.accountno}
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
                      defaultValue={test1.state.ifsccode}
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
                      placeholder="Branch Name"
                      aria-label="BankBranch"
                      aria-describedby="basic-addon1"
                      defaultValue={test1.state.bankbranch}
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
              <u style={{ color: "#3fa2da", marginLeft: "13px" }}>
                <b>ADDRESS:</b>
              </u>
            </h5>
            <Container>
              <Row>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3  ">
                    <label >
                      <b>ADDRESS 1:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("Address", {
                        required: "Please Enter Your Address",
                      })}
                    >
                      <FormControl
                        placeholder="Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        defaultValue={test1.state.address}
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
                    <label>
                      <b> ADDRESS 2:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("Address", {
                        required: "Please Enter Your Address",
                      })}
                    >
                      <FormControl
                        placeholder="Alternate Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        defaultValue={test1.state.aaddress}
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
                        defaultValue={test1.state.pincode}
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
                        placeholder="Please Enter Your State"
                        defaultValue={test1.state.state}
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
                        placeholder="Please Enter Your State"
                        // style={{ width: "212px" }}
                        defaultValue={test1.state.district}
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
                        placeholder="Please Enter Your State"
                        // style={{ width: "212px" }}
                        defaultValue={test1.state.city}
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
            <u style={{ color: "#3fa2da", marginLeft: "6px" }}>
              <b>COMPANY DETAILS:</b>
            </u>
          </h5>

          <Container style={{ marginLeft: "-12px" }}>
            <Row>
              <Col className="wrapper">
                <div className="mb-3 form-check" id={"crmselect"}>
                  <label>
                    <b>Designation</b>
                  </label>
                  <InputGroup
                    className="mb-3"
                    name="designation"
                    onChange={changeHandler}
                  >
                    <FormControl
                      className="MentorList_DropdownMenu"
                      aria-label="Default select example"
                      placeholder="Designation"
                      // style={{ width: "212px" }}
                      name="designation"
                      defaultValue={test1.state.designation}
                      onChange={changeHandler}
                      list="datalistOptions"
                      id="exampleDataList"
                      {...register("designation", {
                        required: "Please Select Your designation",
                        // pattern: {
                        //   value:password.trim().length>4,
                        //   message: "INVALIDE password",
                        // },
                      })}
                    />

                    <datalist id="datalistOptions" className="overflowY-scroll">
                      <option name={designation} value="Managing Director">
                        Managing Director
                      </option>
                      <option name={designation} value="Admin">
                        Admin
                      </option>
                      <option name={designation} value="HR">
                        HR
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
                      <option name={designation} value="Zonal Manager">
                        Zonal Manager
                      </option>
                      {/* {options.map((option) => (
              <option name={option.designation}>{option.designation}</option>
            ))} */}

                      {/* for enabiling and diabling Assigned manager */}
                      {/* {designation === 'Admin' ? null : (
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
                  disabled={show}
                />
              </InputGroup>
              {errors.AssignedManager && (
                <small className="text-danger">
                  {errors.AssignedManager.message}
                </small>
              )}
            </div>
            )} */}
                    </datalist>
                  </InputGroup>

                  {errors.designation && (
                    <small className="text-danger">
                      {errors.designation.message}
                    </small>
                  )}
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
                      defaultValue={test1.state.assignedmanager}
                      onChange={changeHandler}
                      disabled={show}
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
                      defaultValue={test1.state.companylocation}
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
                      defaultValue={test1.state.cbankbranch}
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
          {/*  */}
          <div className="companydetails">
            <Container>
              <Row>
                <Col md={4} lg={4} sm={12}>
                  <div className="mb-3 ">
                    <label htmlFor="mid">
                      <b> OFFICIAL NUMBER:</b>
                    </label>
                    <InputGroup
                      {...register("officialNum", {
                        required: "Please Enter The Official Number",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Invalid Mobile Number",
                        },
                      })}
                    >
                      <FormControl
                        placeholder=" Official Mobile Number"
                        aria-label="Mobile Number"
                        aria-describedby="basic-addon1"
                        name="officialNum"
                        type="number"
                        defaultValue={test1.state.official_number}
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.officialNum && (
                      <small className="text-danger">
                        {errors.officialNum.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <div className="mb-3">
                    <label htmlFor="mid">
                      <b>OFFICIAL EMAIL:</b>
                    </label>
                    <InputGroup
                      {...register("officialEmail", {
                        required: "Please Enter Your  Official Email",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Invalid Email",
                        },
                      })}
                      style={{ marginLeft: "-10px" }}
                    >
                      <Form.Control
                        type="officialEmail"
                        placeholder="Official  Email"
                        id="officialEmailid"
                        name="officialEmail"
                        defaultValue={test1.state.official_email}
                        onChange={changeHandler}
                      />
                      {/* /> */}
                    </InputGroup>
                    {errors.officialEmail && (
                      <small className="text-danger">
                        {errors.officialEmail.message}
                      </small>
                    )}
                  </div>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <div className="mb-3 ">
                    <label htmlFor="mid">
                      <b>STATE:</b>
                    </label>
                    <InputGroup
                      className="mb-3"
                      {...register("officialState", {
                        required: "Please Enter Company State ",
                        // pattern: {
                        //   value:/([A-Z][a-z]+\s?)+,\s[A-Z]{2}/,
                        //   message: "Please Enter  A Valid officialState Name",
                        // },
                      })}
                    >
                      <FormControl
                        aria-label="Default select example"
                        placeholder="Please Enter Your State"
                        defaultValue={test1.state.company_state}
                        name="officialState"
                        onChange={changeHandler}
                      />
                    </InputGroup>
                    {errors.officialState && (
                      <small className="text-danger">
                        {errors.officialState.message}
                      </small>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/*  */}

          <div className=" text-center">
            <Button
              style={{
                backgroundColor: "#3fa2da",
                text: "white",
                width: "142px",
                marginTop: "40px",
              }}
              type="submit"
            >
              <b>Edit</b>
            </Button>
          </div>
          {/* modal for Jounal mannerger */}
        </Form>
      </div>
    </>
  );
};

export default EditEmployee;
