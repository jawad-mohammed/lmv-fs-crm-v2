import { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Logohead from "./Logohead";
import { MdDeleteSweep } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const EmployeeDesignation = () => {
  // EDIT MODAL
  const [userDetails, setUserDetails] = useState([]);
  const [editData, setEditData] = useState("");

  const [data, setData] = useState({
    searchInput: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { searchInput } = data;
  //edit modal

  //change handler
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //post req for designation handler

  var body = {
    searchInput,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8001/designation/post",
      data: body,
    });
    console.log(data);
  };

  /////////////////////////////////////////////////////////////
  //@get request

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8001/designation/api/v1`);
    const jsonData = await response.json();
    setUserDetails(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, [userDetails]);
  ////////////////////////////////////////////////////////
  //@update req
  const handleEdit = async (id) => {
    try {
      const data = body;

      const response = await fetch(
        `http://localhost:8001/designation/put/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      console.log("edited");
    } catch (err) {
      console.error(err.message);
    }
  };

  //delete record
  const handleDelete = async (id) => {
    const confirm = window.confirm(`Are You Sure You Want To Delete`);
    if (confirm) {
      const deleteItem = await fetch(
        `http://localhost:8001/designation/api/v1/role/${id}`,
        {
          method: "DELETE",
        }
      );
      setUserDetails(userDetails.filter((user) => user.id !== id));
      alert("Successfully Deleted ");
    }
  };

  return (
    <>
      {<Logohead />}

      <div className="text-center">
        <div style={{ background: "#00adff" }}>
          <h3 className="text-center">
            <u style={{ color: "white", width: "100vw" }}>
              <b>Employeee Designation</b>
            </u>
          </h3>
          <SideNav />
        </div>
        {/* add Designation form for the table */}
        <div className="text-center mb-3">
          <h5 className=" mt-3" id="empdeslabel1" style={{ color: "#00adff" }}>
            ADD DESIGNATION
          </h5>
          {/* this is form for posting designation req */}

          {/* ////<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></> */}
          <form className="mt-5" onSubmit={submitHandler}>
            <div className="text-center" id="ressearch">
              <input
                style={{
                  width: "271px",
                  borderRadius: "6px",
                  marginLeft: "85px",
                }}
                type={"text"}
                className="text-center mb-2"
                name="searchInput"
                value={searchInput}
                onChange={changeHandler}
                placeholder="Add Designation"
                required
              />

              <br />
              <button
                className="btn b-border-3 mt-3"
                style={{
                  backgroundColor: "#00adff",
                  color: "whitesmoke",
                  marginLeft: "72px",
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex text-center">
        <div className="mx-auto">
          <div className="text-center mb-3">
            <h5 className=" mt-3" id="empdeslabel2">
              DESIGNATION DETAILS
            </h5>
          </div>
          <table
            className="table-white  table-bordered   color-white ml-auto mr-auto"
            id="empdestable"
          >
            <thead>
              <tr
                className="table-info color-white"
                style={{ background: "#00adff" }}
              >
                <th scope="row">
                  <b>S.NO:</b>
                </th>
                <th>
                  <b>Designation</b>
                </th>
                <th>
                  <b>Edit</b>
                </th>
                <th>
                  <b>Delete</b>
                </th>
              </tr>
            </thead>

            {userDetails.map((user) => {
              return (
                <tbody className="align-center" key={user.id}>
                  <tr className="table-info ">
                    <td className="text-center">{user.id}</td>
                    <td className="text-center">{user.designation}</td>

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
                  <tr></tr>
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

                          <form>
                            <label>
                              <b>Designation::</b>
                            </label>
                            <input
                              type="text"
                              name={user.designation}
                              value={user.designation}
                              // id={`id${user.id}`}
                              onChange={(e) => setEditData(e.target.value)}
                            ></input>
                            <br />
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
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeDesignation;
