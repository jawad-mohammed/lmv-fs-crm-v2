import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import logo from "./images/Lmv-fs-logo.jpg";

const Crmlogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setDate] = useState({
    Employeeid: "",
  });
  const employyedetailsnav = useNavigate();
  const changeHandler = (e) => {
    setDate({ ...data, [e.target.name]: [e.target.value] });
  };

  const { Employeeid } = data;

  const submitHandler = async (e) => {
    const body = data;
    console.log(data);
    const response = await fetch(`http://localhost:8000/lmv/login`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    });
    navigate("/Otppage");
  };

  return (
    <>
      <div className="container">
        <div className="crmfrm">
          <img src={logo} alt="logo" />

          <form
            autoComplete="off"
            onSubmit={handleSubmit(submitHandler)}
            method="POST"
          >
            <div className="mb-3">
              <label className="form-label">
                <b>EMPLOYEE ID</b>
              </label>
              <br />
              <div className="d-flex">
                <div>
                  <FaUserAlt />
                </div>
                <input
                  {...register("Employeeid", {
                    required: "Please Enter Your Employee Id",
                    pattern: {
                      value: /(?<!\d)\d{5}(?!\d)/g,
                      message: "Invalid  Employee Id",
                    },
                  })}
                  type="number"
                  className="form-control"
                  name="Employeeid"
                  value={data.Employeeid}
                  onChange={changeHandler}
                />
                {errors.Employeeid && (
                  <small className="text-danger">
                    {errors.Employeeid.message}
                  </small>
                )}
              </div>
            </div>

            <button type="submit" className="sub-btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Crmlogin;
