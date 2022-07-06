import React, { useState } from "react";
import logo from "./images/Lmv-fs-logo.jpg";

import { Link, useNavigate } from "react-router-dom";

const Crmlogin = () => {
  const [data, setDate] = useState({
    username: "",
    password: "",
  });
  const employyedetailsnav = useNavigate();
  const changeHandler = (e) => {
    setDate({ ...data, [e.target.name]: [e.target.value] });
  };

  const { username, password } = data;
  console.log(data);

  const submitHandler = (e) => {
    e.preventDefault();
    // const ldata=[data]
    // console.log(ldata)
    if (!username) {
      alert("please entere the name");
    } else if (!password) {
      alert("please eneter the password");
    } else {
      employyedetailsnav("/employeeDetails");
    }

    // const ldata=JSON.parse(data)
    // console.log((ldata));
    // localStorage.setItem("DData", JSON.stringify(data));
  };

  return (
    <>
      <div className="container">
        <div className="crmfrm">
          <img src={logo} alt="logo" />
          <button className="regfrm">
            <b>
              <Link to="/Crmregister" className="regfrm2">
                Register
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

export default Crmlogin;
