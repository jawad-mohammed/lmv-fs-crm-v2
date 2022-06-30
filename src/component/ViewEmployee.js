import React from "react";
import EmployeeDetails from "./EmployeeDetails";

const viewEmployee = () => {
  const values = [
    {
      id: 1,
      name: "imran",
      mobile: 6300027879,
      Designation: "Software Engineer",
      Status: "active",
    },
    {
      id: 2,
      name: "Arvind",
      mobile: 965153125,
      Designation: "Software Engineer",
      Status: "active",
    },
    {
      id: 3,
      name: "jawad",
      mobile: 1234654789,
      Designation: "Software Engineer",
      Status: "active",
    },
  ];
  console.log(values);
  return (
    <>
      <h1 className="text-center mt-5" style={{color:"#3fa2db"}}>VIEW EMPLOYEE</h1>
      <div className="container">
        <EmployeeDetails />
        <table className="table-bordered" id="tabled">
          <thead>
            <tr>
              <th scope="col"><b>Employee ID</b></th>
              <th scope="col"><b>Name</b></th>
              <th scope="col"><b>Mobile</b></th>
              <th scope="col"><b>Designation</b></th>
              <th scope="col"><b>Status</b></th>
              <th scope="col"><b>Edit</b></th>
            </tr>
          </thead>
          <tbody>
              
            {values.map((user) => (
              <tr >
                <td scope="col">{user.id}</td>
                <td scope="col">{user.name}</td>
                <td scope="col">{user.mobile}</td>
                <td scope="col">{user.Designation}</td>
                <td scope="col">{user.Status}</td>
                <td scope="col">
                  <button className="viewEmployeeBtn">EDIT</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default viewEmployee;
