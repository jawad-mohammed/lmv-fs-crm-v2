import React, { useState } from "react";
import logo from "./images/Lmv-fs-logo.jpg";
import { Navigate, useNavigate } from "react-router-dom";


const Otp = () => {
  const [otp, setOtp] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [myOtp,setMyOtp ] = useState([])
  const navigation = useNavigate();
  const { input1, input2, input3, input4 } = otp;
  const changeHandler = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(otp);
    navigation("/employeeDetails  ");
  };

//get otp from backend
const otpHandle = async e => {
const response = await fetch("http://localhost:8000/lmv/otp",{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        }
      });

    const parseRes = await response.json();
    console.log(parseRes);
    alert(parseRes.otp)
     setMyOtp(parseRes)
    // if (parseRes.otp) {
    //   localStorage.setItem("token", parseRes.otp);
      
    // } 

  }





  return (
<>
<button onClick={otpHandle}>otp</button>

    <div className="logintab"style={{ backgroundColor: "#7f7f7f", text: "white" }}>
      <div className="login-con">
        {/* <img src={logo} alt="logo" /> */}
        <h4 className="px-3 mt-">
          Enter an OTP to verify your account{" "}
        </h4>
        <h5 style={{ color: "#3fa2da" }}>A code has been sent to your mobile phone +91630XXXX879</h5>
        <form id="otpfrm" onSubmit={submitHandler}>
          <div className="d-flex form m-5">
            <div className="p-2">
              <input
                type={"number"}
                placeholder="0"
                className="form-control"
                min-length="1"
                max-length="1"
                value={input1}
                name="input1"
                onChange={changeHandler}
              />
            </div>
            <div className="p-2">
              <input
                type={"number"}
                placeholder="0"
                className="form-control"
                name="input2"
                min-length="1"
                max-length="1"
                value={input2}
                onChange={changeHandler}
              />
            </div>
            <div className="p-2">
              <input
                type={"number"}
                placeholder="0"
                className="form-control"
                name="input3"
                min-length="1"
                max-length="1"
                value={input3}
                onChange={changeHandler}
              />
            </div>
            <div className="p-2">
              <input
                type={"number"}
                placeholder="0"
                className="form-control"
                name="input4"
                min-length="1"
                max-length="1"
                value={input4}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div>
            <button
              className="btn mb-3"
              style={{ backgroundColor: "#3fa2da", text: "white" }}
              type="submit"
            >
              <b>Verify</b>
            </button>
            <h5 style={{ color: "#3fa2da" }}>Don't receive the code? Check your registered email for OTP.</h5>
          </div>
        </form>

  
    
      </div>
    </div>
    </>
  );
};

export default Otp;
