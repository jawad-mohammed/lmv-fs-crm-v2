import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Select from "react-bootstrap/FormSelect";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SideNav from "../UIDesign/SideNav";
import { addEmployeeInitialValues } from "../../validations/initialValues";
import Logohead from "../UIDesign/Logohead";
import Modal from "react-bootstrap/Modal";
import axios from 'axios'
const AddEmployee = () => {
  // console.log(EmployeeValidation)
  const [show, setShow] = useState(false);
  const [designations, setDesignations] = useState([]); /////// limited roles
  const [allDesignation, setAllDesignation] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  const initialValues = addEmployeeInitialValues();
  // const EmployeeValidation = AddEmployeeValidation();
  // for disabbling the assigned Manager
  const [userdata, setUserdata] = useState({
    ...initialValues,
  });
  // for checkbox

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
    officialNum,
    officialEmail,
    officialState,
    ZonalManager,
  } = userdata;
  // const

  const changeHandler = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value.toUpperCase() });
    console.log(userdata.ZonalManager);
    // disabling the assigned Manager
    // if (designation === "HR" || "CEO") {
    if (designation.value === "Zonal Manager") {
      setShow(true);
    } else {
      setShow(false);
    }
    //   SetShow(true);
    // }
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
    console.log(parseRes.message);

    console.log(parseRes.created);
    alert(parseRes.message)
    alert(parseRes.created)
 
    //  if(parseRes.Status(200)){
  //   alert(parseRes.created);
  //  } 
  //  if(parseRes.Status(401)){
  //   alert(parseRes.message)
  //  }
    
  };
  // for zonal manager

  //getting role req from backend
  // for checkboxes
  const [userinfo, setUserInfo] = useState({
    Employeeid:"",
    userName:"",
    languages: [],
    // response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { Employeeid,userName,languages } = userinfo;

    // console.log(value);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        // response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
  const submitHandler1 = async (e) => {
    e.preventDefault();
    const body = userinfo.languages;
    console.log(body);
  //  axios.post(`http://localhost:8001/permission/api/post`,body)
  //  .then((res)=>console.log(res))
  //  .catch((err)=>console.log(err))
  const response = await fetch(
    `http://localhost:8001/permission/test/api`,
    {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    }
  );


  };
  //////////designation get limited roles////////////////////////////////////////////////
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8001/designation/api/v1/conditional`
    );
    const jsonData = await response.json();
    setDesignations(jsonData);
  };

  //////////designation get all roles except admin, ceo ////////////////////////////////////////////////
  const fetchDesignation = async () => {
    const response = await fetch(
      `http://localhost:8001/designation/api/v1/all `
    );
    const jsonData = await response.json();
    setAllDesignation(jsonData);
  };
  useEffect(() => {
    fetchDesignation();
    fetchData();
  }, []);

  //////////////////////////////////////////////////////////
  //get req from backend
  const getRequest = async () => {
    const res = await fetch(`http://localhost:8001/branchloc/api/v1/get`);
    const jsonData = await res.json();
    setAllUsers(jsonData);
  };
  if (allUsers.designation === "ADMIN") {
    alert("hi");
  }
  // console.log(allUsers.designation==="ADMIN")

  useEffect(() => {
    getRequest();
  }, []);
  // for disabling the assigned manager
  const [showhide, setShowhide] = useState("");

  //
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    console.log(getuser);
    setShowhide(getuser);
  };

  return (
    <>
      {<Logohead />}
      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <b className="text-white">Add Employee</b>
        </h3>
      </div>
      <div className="container-fluid d-flex">
        <SideNav />
        {/* <div > */}
        <Form
          id="addEmployeeFrom"
          onSubmit={handleSubmit(submitHandler)}
          // autoComplete="off"
        >
          <div className="text-center mb-3">
            <h5 className="mb-5" id="empdeslabel" style={{ color: "#00adff" }}>
              ADD EMPLOYEE DETAILS
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
                        name="Status"
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
                      placeholder="Branch Name"
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
              <u style={{ color: "#3fa2da", marginLeft: "13px" }}>
                <b>ADDRESS:</b>
              </u>
            </h5>
            <Container>
              <Row>
                <Col md={4} lg={3} sm={12}>
                  <div className="mb-3  ">
                    <label>
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
                      {...register("AAddress", {
                        required: "Please Enter Your Address",
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
                        placeholder="Please Enter Your State"
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
                        placeholder="Please Enter Your State"
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
                        placeholder="Please Enter Your State"
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
            <u style={{ color: "#3fa2da", marginLeft: "6px" }}>
              <b>COMPANY DETAILS:</b>
            </u>
          </h5>

          <Container style={{ marginLeft: "-12px" }}>
            <Row>
              <Col className="wrapper">
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
                      value={officialState}
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

              <Col md={4} lg={3} sm={12}>
                {/* test */}
                <label htmlFor="mid">
                  <b>LOCATION:</b>
                </label>
                <InputGroup
                  className="mb-3"
                  name="companylocation"
                  onChange={changeHandler}
                >
                  <FormControl
                    className="MentorList_DropdownMenu"
                    aria-label="Default select example"
                    placeholder="Location"
                    // style={{ width: "212px" }}
                    name="companylocation"
                    onChange={changeHandler}
                    list="datalistOptions2"
                    id="exampleDataList"
                    {...register("companylocation", {
                      required: "Please Select Your companylocation",
                      // pattern: {
                      //   value:password.trim().length>4,
                      //   message: "INVALIDE password",
                      // },
                    })}
                  />

                  <datalist id="datalistOptions2" className="overflowY-scroll">
                    {/* modal */}

                    {allUsers.map((option) => (
                      <option value={option.location}>
                        {option.location} key={option.id}
                      </option>
                    ))}
                  </datalist>
                </InputGroup>
                {errors.companylocation && (
                  <small className="text-danger">
                    {errors.companylocation.message}
                  </small>
                )}
              </Col>
              <Col md={4} lg={3} sm={12}>
                {/* TEST */}
                <label htmlFor="mid">
                  <b> BRANCH:</b>
                </label>
                <InputGroup
                  className="mb-3"
                  name="CBankBranch"
                  onChange={changeHandler}
                  {...register("CBankBranch", {
                    required: "Please Enter Your Branch Name ",
                    pattern: {
                      value: /[A-Za-z]/,
                      message: "Invalid User Name",
                    },
                  })}
                >
                  <FormControl
                    className="MentorList_DropdownMenu"
                    aria-label="Default select example"
                    placeholder="Bank Branch"
                    // style={{ width: "212px" }}
                    name="CBankBranch"
                    onChange={changeHandler}
                    list="datalistOptions3"
                    id="exampleDataList"
                    {...register("CBankBranch", {
                      required: "Please Select Your Company Bank Branch",
                      // pattern: {
                      //   value:password.trim().length>4,
                      //   message: "INVALIDE password",
                      // },
                    })}
                  />

                  <datalist id="datalistOptions3" className="overflowY-scroll">
                    {/* modal */}
                    {allUsers.map((option) => (
                      <option value={option.companybranch}>
                        {option.companybranch}
                      </option>
                    ))}
                  </datalist>
                </InputGroup>
                {errors.CBankBranch && (
                  <small className="text-danger">
                    {errors.CBankBranch.message}
                  </small>
                )}
                {/*  */}
                <div className="mb-3 "></div>
              </Col>
              <Col md={4} lg={3} sm={12}>
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
                      value={officialEmail}
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

                {/*  */}
              </Col>
            </Row>
          </Container>
          {/*  */}
          <Container style={{ marginLeft: "-12px" }}>
            <Row>
              <Col md={4} lg={3} sm={12} className="wrapper">
                <div className="mb-3 " style={{width:"max-width"}}>
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
                      value={officialNum}
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

              <Col md={4} lg={3} sm={12}>
                {/* test */}
                <div className=" form-group">
                  <label className="">
                    <b>DESIGNATION:</b>
                  </label>
                  <select
                    name="designation"
                    className="form-control"
                    onClick={(e) => handleshowhide(e)}
                    onChange={changeHandler}
                  >
                    <option name="designation" value="">
                      -- Designation--
                    </option>
                    <option name="designation" value="ADMIN">
                      ADMIN
                    </option>
                    <option name="designation" value="MD">
                      MD
                    </option>
                    <option name="designation" value="CEO">
                      CEO
                    </option>
                    <option
                      name="designation"
                      value="ZONAL MANAGER"
                      onClick={(e) => setShow(false)}
                    >
                      ZONAL MANAGER
                    </option>

                    {allDesignation.map((option) => {
                      return (
                        <option value={option.designation} key={option.id}>
                          {option.designation}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {errors.designation && (
                  <small className="text-danger">
                    {errors.designation.message}
                  </small>
                )}
              </Col>
              <Col md={4} lg={3} sm={12}>
                {/* TEST */}
                {showhide === "ADMIN" ? (
                  ""
                ) : showhide === "MD" ? (
                  ""
                ) : showhide === "CEO" ? (
                  ""
                ) : showhide === "PRINCIPLE MANAGER" ? (
                  ""
                ) : (
                  <div className="mb-3 " id="ShowAndHide">
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
                )}
              </Col>
              <Col md={4} lg={3} sm={12}>
            <div style={{width: "27rem"}}></div>

                {/*  */}
              </Col>
            </Row>
          </Container>
          {/*  */}
          <div className="companydetails">
            <Container>
              <div className="d-flex">
                <Row>
                  {/* for showing the zonal manager button */}
                  <Col>
                    {showhide === "ZONAL MANAGER" && (
                      <option
                        name={designation}
                        value="Zonal Manager"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        style={{ color: "blue" }}
                        onClick={(e) => setShow(true)}
                      >
                        CLICK ME TO SELECT YOUR ZONE
                      </option>
                    )}
                  </Col>
                </Row>
              </div>
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
              <b>SUBMIT</b>
            </Button>
          </div>
          {/* modal for zonal mannerger */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>PERMISSIONS FOR ZONAL MANAGER </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/*  */}
              {/* persmission form handler */}
              <form onSubmit={submitHandler1}>
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>

                <div className="form-floating mt-3 mb-3 text-center">
                  <label htmlFor="exampleFormControlTextarea1"></label>
                  <textarea
                    className="form-control text"
                    name="response"
                    value={userinfo.response}
                    placeholder="The checkbox values will be displayed here "
                    id="floatingTextarea2"
                    style={{ height: "150px" }}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onSubmit={submitHandler1}>SUBMIT</Button> */}
            </Modal.Footer>
          </Modal>
        </Form>
        {/*  */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>PERMISSIONS FOR ZONAL MANAGER </Modal.Title>
          </Modal.Header>
          <form onSubmit={submitHandler1}>
            <Modal.Body>
              <h6>SELECT ONLY FOR ZONAL MANAGER</h6>
              <div>
              <div className="d-flex sm-grid" 
              style={{gap: "45px"}}
              >
            
            <div md={4} lg={3} sm={12}>
              <div className="mb-3 ">
                <label htmlFor="mid">
                  <b>EMPLOYEE ID:</b>
                </label>
                <InputGroup
                  className="mb-3"
                  {...register("Employeeid", {
                    required: "Please Enter Your Employee Id",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Invalid Mobile Number",
                    },
                  })}
                 
                >
                  <FormControl
                    placeholder="EmployeeId"
                    aria-label="Employeeid"
                    aria-describedby="basic-addon1"
                    type="tel"
                    name="Employeeid"
                    value={userinfo.Employeeid}
                    onChange={changeHandler}
                  />
                </InputGroup>
                {errors.Employeeid && (
                  <small className="text-danger">
                    {errors.Employeeid.message}
                  </small>
                )}
              </div>
            </div>
            <div md={4} lg={3} sm={12}>
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
            </div>
                  </div>
              </div>
              <h5>STATE:</h5>
              <div className=" d-flex align-items-center ml-25" lg={4} sm={12}>
                <br />
                <div className="d-grid">
                  <div className="form-check m-3">
                    {/* adding employeeeid and username */}
                 
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="telangana"
                      value="telangana"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Telangana
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="ap"
                      value="ap"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      ANDHRAPRADESH
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="karnataka"
                      value="karnataka"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      KARNATAKA
                    </label>
                  </div>
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="tn"
                      value="tn"
                      id="flexCheckDefault"
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      TAMILNADU
                    </label>
                  </div>
                </div>
                <div className="form-check m-3" id="zonalmodal">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="maharastra  "
                    value="maharastra"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    MAHARASTRA
                  </label>
                </div>
              </div>
              <div className="d-flex w-100 mt-3 " lg={4} sm={12}>
                <br />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default AddEmployee;
