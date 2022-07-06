import React, { useState, useNavigation } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "./images/Lmv-fs-logo.jpg";

const Crmregister = () => {
  const [data, setDate] = useState({
    username: "",
    email: "",
    password: "",
  });
  const employyedetailsnav = useNavigate();
  const changeHandler = (e) => {
    setDate({ ...data, [e.target.name]: [e.target.value] });
  };

  const { username, email, password } = data;
  console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!username) {
      alert("PLEASE ENTER THE NAME");
    }
    if (!email) {
      alert("PLEASE ENTER THE EMAIL");
    }
    if (!password) {
      alert("PLEASE ENTER THE PASSWORD");
    } else {
      employyedetailsnav("/employeeDetails");
    }
   
  };

  return (
    <>
      <div className="container">
        <div className="crmfrm">
          <img src={logo} alt="logo" />
          <button className="regfrm">
            <b>
              <Link to="/" className="regfrm2">
                USER
              </Link>
            </b>
          </button>

          <form autoComplete="off" onSubmit={submitHandler} method="POST">
            <div className="mb-3">
              <label className="form-label">
                <b>Name:</b>
              </label>
              <br />
              <input
                type="name"
                className="form-control"
                name="username"
                value={data.username}
                minLength={5}
                onChange={changeHandler}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <b>Email:</b>
              </label>
              <br />
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                minLength={5}
                onChange={changeHandler}
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <b>Password:</b>
              </label>
              <br />
              <input
                type="password"
                minLength={8}
                className="form-control"
                name="password"
                value={data.password}
                onChange={changeHandler}
              />
            </div>

            <button
              type="submit"
              className="sub-btn"
              // onClick={postdata}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Crmregister;
