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

  //get req from backend
  const getRequest = async () => {
    const res = await fetch(`http://localhost:8001/branchloc/api/v1/get`);
    const jsonData = await res.json();
    setAllUsers(jsonData);
  };
  useEffect(() => {
    getRequest();
  }, []);
  //////////////////////////////////////////////////////////////

  const handleEdit = () => {};

  //////////////////////
  // delete req
  const handleDelete = async (id) => {
    const confirm = window.confirm(`Are you sure to delete`);
    if (confirm) {
      const deleteItem = await fetch(
        `http://localhost:8001/branchloc/api/v1/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      setAllUsers(allUsers.filter((user) => user.id !== id));
    }
  };
  /////////////////////////////////////////////////////////////////////////////////
  // @Post req
  const submitHandle = async (e) => {
     e.preventDefault()
    const body = data;
    console.log(body);

    const res = await fetch(`http://localhost:8001/branchloc/api/v1/post`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(body),
    });
    // window.location.reload();
  };

  //////////////////////////////////////////////////////////////////
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
        <h5 className=" mt-5" id="empdeslabel1" style={{ color: "#00adff" }}>
          ADD BRANCH & LOCATION
        </h5>
        {/* this is form for posting designation req */}

        {/* ////<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}
        <form onSubmit={submitHandle} className="mt-3" id="addbranchForm">
          <div className="text-center" id="ressearch">
            <b>Add Branch:</b>
            <br />
            <input
              style={{
                width: "271px",
                borderRadius: "6px",
                // marginLeft: "45vw",
                padding: "7px",
              }}
              type={"text"}
              className="text-center mb-2"
              name="CBankBranch"
              value={CBankBranch}
              onChange={changeHandler}
              placeholder="Add Branch"
              required
            />
            <br />
            <b>Add Location:</b>
            <br />
            <input
              style={{
                width: "271px",
                borderRadius: "6px",
                // marginLeft: "45vw",
                padding: "7px",
              }}
              type={"text"}
              className="text-center mb-2"
              name="companylocation"
              value={companylocation}
              onChange={changeHandler}
              placeholder="Add Branch"
              required
            />

            <br />
            <button
              className="btn b-border-3 mt-3"
              style={{
                backgroundColor: "#00adff",
                color: "whitesmoke",
                // marginLeft: "72px",
              }}
              type="submit"
            >
              Submit1
            </button>
          </div>
        </form>
      </div>

      <h5
        className=" mt-5 mb-3 text-center"
        id="empdeslabel4"
        style={{ color: "#00adff" }}
      >
        BRANCH & LOCATION
      </h5>

      <div className=" d-flex text" style={{ overflowX: "auto" }}>
        <div className="mb-3 mt-3" style={{ marginLeft: "110px" }}>
          {/* search Form */}
          <div className="d-flex mt-2" id="viewEmployeeres">
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
            
          </div>
          {/* end of search Form */}

          <table
            className="table-bordered mt-3 "
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
            {allUsers.map((user) => {
                return (
                  <tbody className="align-center" key={user.id}>
                    <tr className="table-info ">
                      <td className="text-center" scope="col">
                        {user.id}
                      </td>
                      <td className="text-center" scope="col">
                        {user.companybranch}
                      </td>
                      <td className="text-center" scope="col">
                        {user.location}
                      </td>

                      <td>
                        <button
                          className="viewEmployeeBtn text-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target={`#id${user.id}`}
                          onClick={() => user.id}
                        >
                          <FaUserEdit />
                        </button>
                      </td>
                      <td>
                        <button
                          className="viewEmployeeBtn text-center"
                          onClick={() => handleDelete(user.id)}
                        >
                          <MdDeleteSweep />
                        </button>
                      </td>
                    </tr>
                    {/* Modal form*/}
                    <div className="modal" id={`id${user.id}`}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Edit Designation
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            {/* //////modal form */}

                            <form
                              onSubmit={submitHandle}
                              className="mt-3"
                              id="addbranchForm"
                            >
                              <div className="text-center" id="ressearch">
                                <b>Add Branch:</b>
                                <br />
                                <input
                                  style={{
                                    width: "271px",
                                    borderRadius: "6px",
                                    // marginLeft: "45vw",
                                    padding: "7px",
                                  }}
                                  type={"text"}
                                  className="text-center mb-2"
                                  name="CBankBranch"
                                  value={CBankBranch}
                                  onChange={changeHandler}
                                  placeholder="Add Branch"
                                  required
                                />
                                <br />
                                <b>Add Location:</b>
                                <br />
                                <input
                                  style={{
                                    width: "271px",
                                    borderRadius: "6px",
                                    // marginLeft: "45vw",
                                    padding: "7px",
                                  }}
                                  type={"text"}
                                  className="text-center mb-2"
                                  name="companylocation"
                                  value={companylocation}
                                  onChange={changeHandler}
                                  placeholder="Add Branch"
                                  required
                                />

                                <br />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>

                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => handleEdit(user.id)}
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <tr></tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default AddBranch;
