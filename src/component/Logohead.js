import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Logohead = () => {
  const navigate = useNavigate();
  const logoutfun = () => {
    navigate("/ ");
  };
  return (
    <>
      <div className="brand">
        <button className="log-btn btn " onClick={logoutfun} id="logoutbtn">
          {<FiLogOut />}
        </button>
      </div>
    </>
  );
};

export default Logohead;
