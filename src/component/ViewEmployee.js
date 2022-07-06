import { useState,useEffect } from "react";
import EmployeeDetails from "./EmployeeDetails";

const ViewEmployee = () => {
const [allUsers,setAllUsers] = useState([])
const fetchData = async()=>{
  const response = await fetch(`http://localhost:8000/lmv`)
  const jsonData = await response.json()
  setAllUsers(jsonData)
}
useEffect(()=>{
fetchData()
},[])
  return (
    <>
      <h1 className="text-center mt-5" style={{color:"#3fa2db"}}>VIEW EMPLOYEE</h1>
      
      <div className="container">
        <EmployeeDetails />
        <table className="table-bordered " id="tabled">
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
              
            {allUsers.map((user) => (
              <tr >
                <td scope="col">{user.employeeid}</td>
                <td scope="col">{user.username}</td>
                <td scope="col">{user.MNumber}</td>
                <td scope="col">{user.designation}</td>
                <td scope="col">{user.tatus}</td>
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

export default ViewEmployee;
