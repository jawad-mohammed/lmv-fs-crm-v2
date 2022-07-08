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
  const [myOtp, setMyOtp] = useState([]);
  const navigation = useNavigate();
  const { input1, input2, input3, input4 } = otp;
  const changeHandler = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };
  const otpHandle = async (e) => {
    const response = await fetch("http://localhost:8000/lmv/otp", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    const parseRes = await response.json();
    console.log(parseRes);
    alert(parseRes.otp);
    // setMyOtp(parseRes)
    // if (parseRes.otp) {
    //   localStorage.setItem("token", parseRes.otp);

    // }
  };
  const submitHandler = (e) => {
  
    console.log(otp);
    navigation("/SideNav  ");
  }
  //   e.preventDefault();
//     if(!otp){
//       alert("PLease enter the valid otp")
//     }else if(otp!==otpHandle.parseRes){
// alert("Otp Dont Match")
//     }else{

//     }

  //get otp from backend
  

  return (
    <>
      <button onClick={otpHandle}>otp</button>

      <div
        className="logintab"
        style={{ backgroundColor: "#4c4c4c", text: "white" }}
      >
        <div className="login-con col-lg-4">
          {/* <img src={logo} alt="logo" /> */}
          <h3 className="px-3 mt-3">Enter an OTP to verify your account</h3>
          <h6 className="px-3 mt-3" style={{ color: "#3fa2da" }}>
            A code has been sent to your mobile phone
            <span className="text-danger">+91630XXXX879</span>
          </h6>
          <form id="otpfrm" onSubmit={submitHandler} className="">
            <div className="d-flex form m-2 px-3">
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input1}
                  name="input1"
                  onChange={changeHandler}
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  name="input2"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input2}
                  onChange={changeHandler}
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  name="input3"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input3}
                  onChange={changeHandler}
                />
              </div>
              <div className="p-2">
                <input
                  placeholder="0"
                  className="form-control"
                  name="input4"
                  type="text"
                  maxLength="1"
                  // onInput="this.value=this.value.replace(/[^0-9]/g,'');"
                  max="1"
                  value={input4}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn mb-3"
                style={{ background: "#3fa2da", text: "white" }}
                type="submit"
              >
                <b>Verify</b>
              </button>
              <hr></hr>

              <h6 className="mt-3" style={{ color: "#3fa2da" }}>
                Don't receive the code? Check your registered email for OTP.
              </h6>
              <h6 className="text-danger">
                Enter today's OTP to redirect to home page.
              </h6>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
