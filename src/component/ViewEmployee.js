import { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Logohead from "./Logohead";
import { FaUserEdit } from "react-icons/fa";


const ViewEmployee = () => {
  const [allUsers, setAllUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/lmv`);
    const jsonData = await response.json();
    setAllUsers(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {<Logohead />}

      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <u style={{ color: "white", width: "100vw" }}>
            <b>View Employee</b>
          </u>
        </h3>
      </div>

      <div className="d-flex">
        <SideNav />
        <table className="table-bordered " id="tabledid">
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
                <td scope="col">{user.mnumber}</td>
                <td scope="col">{user.designation}</td>
                <td scope="col">{user.status}</td>
                <td scope="col">
                  <button className="viewEmployeeBtn"><FaUserEdit/></button>
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
