import React from "react";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeDesignation = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center mt-5" style={{ color: "#3fa2db" }}>
          VIEW EMPLOYEE
        </h1>
      </div>
      <div className="container">
        <EmployeeDetails />
        <div className="align-item-center flex" id="tabled">

        <input type={"search"}  className="text-center" /><button>SUBMIT</button>
        </div>
        <table className="table-bordered" id="tabled">
          <thead>
            <tr>
              <th scope="col">
                <b>S.NO:</b>
              </th>
              <th scope="col">
                <b>Designation</b>
              </th>
              <th scope="col">
                <b>Delete</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">IMRAN</td>
              <td scope="col">Software Developer</td>
              <td scope="col">
                <button className="viewEmployeeBtn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeDesignation;
