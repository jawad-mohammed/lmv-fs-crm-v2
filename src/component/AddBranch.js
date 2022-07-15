import { useState, useEffect, useMemo } from "react";
import SideNav from "./SideNav";
import Logohead from "./Logohead";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "../App.css";

import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

//import Pagination from "./Pagination";
import "./Pagination.css";
import PaginateCrmFs from "./PaginateCrmFs";

const AddBranch = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    CBankBranch: "",
    companylocation: "",
  });
  const { CBankBranch, companylocation } = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 

  // Change page
  const handleClick = async (id) => {
    // const deleteItem = await fetch(`http://localhost:8000/lmv/${id}`, {
    //   method: "DELETE",
    // });
    // setAllUsers(allUsers.filter((user) => user.id !== id));
  };
  // for adding Bank Location The data
  const submitHandler = async (e) => {
    // e.preventDefault();
    console.log(data);
  };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      {<Logohead />}

      {/* pagination */}

      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <u style={{ color: "white", width: "100vw" }}>
            <b>Branch & Location</b>
          </u>
        </h3>
      </div>
      <SideNav />
      <div className="text-center mb-3">
        <h6 className=" mt-5" id="empdeslabel1" style={{ color: "#00adff" }}>
          BRANCH & LOCATION
        </h6>
        {/* this is form for posting designation req */}

        {/* ////<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}
        <form onSubmit={handleSubmit(submitHandler)} className="mt-5" id="addbranchForm">
       
          <div className="text-center" id="ressearch">
            {/*  */}
            <div>
              <label >
                <b className=""> BRANCH:</b>
              </label>
              <InputGroup
                className="align-center"
                style={{
                  width: "271px",
                  borderRadius: "6px",
                  marginLeft: "45vw",
                  padding: "7px",
                }}
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
                  value={CBankBranch}
                  name="CBankBranch"
                  onChange={changeHandler}
                />
              </InputGroup>
              <div >
                {errors.CBankBranch && (
                  <small className="addBranchErr">
                    {errors.CBankBranch.message}
                  </small>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="mid">
                <b> LOCATION:</b>
              </label>
              <InputGroup
                className="align-center"
                style={{
                  width: "271px",
                  borderRadius: "6px",
                  marginLeft: "45vw",
                  padding: "7px",
                }}
                {...register("companylocation", {
                  required: "Please Enter Your Location Name ",
                  pattern: {
                    value: /[A-Za-z]/,
                    message: "Invalid User Name",
                  },
                })}
              >
                <FormControl
                  placeholder="Company Location"
                  aria-label="companylocation"
                  aria-describedby="basic-addon1"
                  value={companylocation}
                  name="companylocation"
                  onChange={changeHandler}
                />
              </InputGroup>
              <div className="align-center">

              {errors.companylocation && (
                <small className="addBranchErr">
                  {errors.companylocation.message}
                </small>
              )}
              </div>
            </div>
            <button
              className="btn b-border-3 mt-3"
              style={{
                backgroundColor: "#00adff",
                color: "whitesmoke",
                marginLeft: "72px",
                padding: "7px",
                width: "127px"
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <h5
        className=" mt-5 mb-3 text-center"
        id="empdeslabel4"
        style={{ color: "#00adff" }}
      >
        Branch & Location
      </h5>

      <div className=" d-flex text" style={{ overflowX: "auto" }}>
        <div className="mb-3 mt-3" style={{ marginLeft: "110px" }}>
          {/* search Form */}
          <div className="d-flex mt-2 mb-2" id="viewEmployeeres">
            <div
              className="ml-5"
              id="viewEmployeeinput"
              style={{
                marginLeft: "100px",
                width: "144px",
                borderRadius: "8px",
                height: "33px",
              }}
            ></div>
            <div className="d-flex">
              <form autoComplete="off">
                <input
                  id="viewEmployeeSearch"
                  style={{
                    width: "271px",
                    borderRadius: "6px",
                    marginLeft: "35vw",
                    padding: "7px",
                  }}
                  type="text"
                  placeholder="Search..🔍"
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {}
              </form>
            </div>
          </div>
          {/* end of search Form */}

          <table
            className=" table table-bordered mt-3 "
            id="viewEmployeeTable"
            style={{ width: "68vw", marginLeft: "100px" }}
          >
            <thead>
              <tr style={{ background: "#00adff" }}>
                <th className="text-center" scope="col">
                  <b>S.no</b>
                </th>
                <th className="text-center" scope="col">
                  <b>Company Branch</b>
                </th>
                <th className="text-center" scope="col">
                  <b>Location</b>
                </th>

                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers
                .filter((user) => {
                  if (search === "") {
                    return user;
                  }
                  if (
                    user.employeeid
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return user;
                  }
                  if (
                    user.cbankbranch
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return user;
                  }
                  if (
                    user.companylocation
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((user) => (
                  <tr key={user.id}>
                    <td className="text-center" scope="col">
                      {user.id}
                    </td>

                    <td className="text-center" scope="col">
                      {user.cbankbranch}
                    </td>

                    <td className="text-center" scope="col">
                      {user.companylocation}
                    </td>

                    {/* edit button */}
                    <td className="text-center" scope="col">
                      <button className="viewEmployeeBtn">
                        <FaUserEdit />
                      </button>
                    </td>
                    {/* delete button */}

                    <td className="text-center" scope="col">
                      <button
                        className="viewEmployeeBtn"
                        onClick={() => handleClick(user.id)}
                      >
                        <MdDeleteSweep />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddBranch;
