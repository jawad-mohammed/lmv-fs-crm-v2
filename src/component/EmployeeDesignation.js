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
  const submitHandler = async (e) => {
    //   e.preventDefault();
    const res = searchInput;

    console.log(res);

    const newUser = await fetch(`http://localhost:8000/emp/designation`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(res),
    });
  };
  const [userDetails, setUserDetails] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/lmv`);
    const jsonData = await response.json();
    setUserDetails(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
        </div>
        <div className="align-item-center flex">
          {/* this is form for posting designation req */}
          <form onSubmit={submitHandler}>
            <input
              type={"search"}
              className="text-center"
              name="searchInput"
              value={searchInput}
              onChange={changeHandler}
            />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="d-flex">
        <SideNav />
        <table className="table-bordered" id="tabledid">
          <thead>
            <tr>
              <th scope="col">
                <b>S.NO:</b>
              </th>
              <th scope="col">
                <b>Designation</b>
              </th>
              <th scope="col">
                <b>Edit</b>
              </th>
              <th scope="col">
                <b>Delete</b>
              </th>
            </tr>
          </thead>

          {userDetails.map((user) => {
            return (
              <tbody>
                <tr>
                  <td scope="col">{user.id}</td>
                  <td scope="col">{user.designation}</td>

                  <td scope="col">
                    <button
                      className="viewEmployeeBtn"
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <FaUserEdit />
                    </button>
                  </td>
                  <td scope="col">
                    <button className="viewEmployeeBtn">
                      <MdDeleteSweep />
                    </button>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            );
          })}
        </table>
        {/* <!-- Modal --> */}
        {/* EDIT MODAL */}
        {userDetails.map((user) => {

          
        })}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Designation
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <label>
                    <b>Designation:</b>
                  </label>
                  <input type={"text"} name="" value={data.value}></input>
                  <br />
                  {/* <label> <b>New Designation</b></label>
                  <input type={"text"} value={setData}></input> */}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
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
