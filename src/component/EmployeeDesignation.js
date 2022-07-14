import { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Logohead from "./Logohead";
import { MdDeleteSweep } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

const EmployeeDesignation = () => {
  //
  const [data, setData] = useState({
    searchInput: "",
  });
  const { searchInput } = data;
  //change handler
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //post req for designation handler
  // EDIT MODAL
  const [userDetails, setUserDetails] = useState([]);
  const [designation, setDesignation] = useState(userDetails.designation);

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = searchInput;

    console.log(res);

    const newUser = await fetch(`http://localhost:8000/emp/designation`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(res),
    });
  };
  /////////////////////////////////////////////////////////////
  //@get request

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/lmv`);
    const jsonData = await response.json();
    setUserDetails(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  ////////////////////////////////////////////////////////
  //@update req

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
        <div className="text-center mb-3">
          <h5 className=" mt-3" id="empdeslabel1" style={{ color: "#00adff" }}>
            ADD DESIGNATION
          </h5>
          {/* this is form for posting designation req */}
          <form onSubmit={submitHandler} className="mt-5">
            <div className="text-center" id="ressearch">
              <input
                style={{
                  width: "271px",
                  borderRadius: "6px",
                  marginLeft: "85px",
                }}
                type={"search"}
                className="text-center mb-2"
                name="searchInput"
                value={searchInput}
                onChange={changeHandler}
                placeholder="Add Designation"
              />
              <br />
              <button
                className="btn b-border-3 mt-3"
                style={{
                  backgroundColor: "#00adff",
                  color: "whitesmoke",
                  marginLeft: "72px",
                }}
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
            <h5
              className=" mt-3"
              id="empdeslabel2"
              
            >
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
                <tbody className="align-center">
                  <tr className="table-info " key={user.id}>
                    <td className="text-center">{user.id}</td>
                    <td className="text-center">{user.designation}</td>

                    <td>
                      <button
                        className="viewEmployeeBtn text-center"
                        type="button"
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setDesignation(userDetails.designation)}
                      >
                        <FaUserEdit />
                      </button>
                    </td>
                    <td>
                      <button className="viewEmployeeBtn text-center">
                        <MdDeleteSweep />
                      </button>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              );
            })}
          </table>
        </div>
        {/* <!-- Modal --> */}

        {/* EDIT MODAL */}
        {/* pagination */}

        {/*  */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
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
                <form>
                  <label>
                    <b>Designation:</b>
                  </label>
                  <input
                    type={"text"}
                    name=""
                    value={userDetails.designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  ></input>
                  <br />
                  {/* <label> <b>New Designation</b></label>
                  <input type={"text"} value={setData}></input> */}
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
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default EmployeeDesignation;
