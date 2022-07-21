import { useState, useEffect,useMemo } from "react";
import SideNav from "./SideNav";
import Logohead from "./Logohead";
import EditEmployee from "./EditEmployee";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { MdDeleteSweep } from "react-icons/md";
import { FcSearch } from "react-icons/fc";

//import Pagination from "./Pagination";
import "./Pagination.css";
import PaginateCrmFs from "./PaginateCrmFs";

const ViewEmployee = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");

// const [selectedUser,setSelectedUser] = useState([])
//testing purpose ///////////////////////////
const [userList,setUserList] = useState([])  
/////////////////////////////////////////////////////////

const fetchData = async () => {
    const response = await fetch(`http://localhost:8001/viewEmployee/lmv`);
    const jsonData = await response.json();
    setAllUsers(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // for navigation
  const navigation=useNavigate()
  

  // delete page
  const handleClick = async (id) => {
     const confirm = window.confirm(`Are you sure to delete`)
     if(confirm){
       const deleteItem = await fetch(`http://localhost:8001/viewEmployee/lmv/${id}`, {
         method: "DELETE",
       });
       setAllUsers(allUsers.filter((user) => user.id !== id));
     }
     alert(`deleted your record`)
  };
  ////////////////////////////////////////


  // for editing
  const editHandler=async(employeeid)=>{
  // navigation("/EditEmployee")
   const deleteItem = await fetch(`http://localhost:8001/viewEmployee/lmv/${employeeid}`);
const  jsonData = await deleteItem.json()
  setUserList(jsonData)
  const selectedUser = jsonData
console.log(selectedUser);



}
  return (
    <>
{/* //////////////////////////////////// */}
{<Logohead />}
      {/* pagination */}
      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <u style={{ color: "white", width: "100vw" }}>
            <b>View Employee</b>
          </u>
        </h3>
      </div>
      <SideNav />
      <h5
        className=" mt-5 mb-3 text-center"
        id="empdeslabel3"
        style={{ color: "#00adff" }}
      >
        VIEW DESIGNATION
      </h5>

      <div className=" d-flex text" style={{ overflowX: "auto" }}>
        <div  className="mb-3 mt-3" style={{marginLeft:"110px"}}>
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
            >
              <label>
                <b>Status:  </b>
              </label>
              <select id="viewEmployeeSlct">
                <option value="Active">Active</option>
                <option value="In Active">In Active</option>
              </select>
            </div>
            <div className="d-flex">
              <form autoComplete="off">

              <input  id="viewEmployeeSearch"
                style={{
                  width: "271px",
                  borderRadius: "6px",
                  marginLeft: "35vw",
                  
                }}
                type="text"
                placeholder="Search..🔍"
                className="form-control"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
         
              
                </form>
            </div>
          </div>
          {/* end of search Form */}

          <table className=" table table-bordered mt-3 "  id="viewEmployeeTable" style={{width: "68vw",
    marginLeft:"100px"}}>
            <thead className=" table table-bordered">
              <tr style={{ background: "#00adff" }}>
                <th className="text-center" scope="col">
                  <b className="text-white">Employee ID</b>
                </th>
                <th className="text-center" scope="col">
                  <b className="text-white">Name</b>
                </th>
                <th className="text-center" scope="col">
                  <b className="text-white">Mobile</b>
                </th>
                <th className="text-center" scope="col">
                  <b className="text-white">Designation</b>
                </th>
                <th className="text-center" scope="col">
                  <b className="text-white">Status</b>
                </th>
                <th className="text-center text-white">Edit</th>
                <th className="text-center text-white">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers
              .filter((user)=>{
                if (search === "") {
                  return user;
                }  if (
                  user.employeeid.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return user;
                }  if (
                  user.username.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return user;
                }  if (
                  user.mnumber.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return user; 
                }
                if (
                  user.designation.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return user; 
                }
                if (
                  user.designation.toLocaleLowerCase().includes(search.toLocaleLowerCase()==user.status.active)
                ) {
                  return user.status; 
                }
                
              }).map((user) => (
                <tr key={user.id}>
                  <td className="text-center" scope="col">
                    {user.employeeid}
                  </td>
                  <td className="text-center" scope="col">
                    {user.username}
                  </td>
                  <td className="text-center" scope="col">
                    {user.mnumber}
                  </td>
                  <td className="text-center" scope="col">
                    {user.designation}
                  </td>
                  <td className="text-center" scope="col">
                    {user.status}
                  </td>
                  {/* edit button */}
                  <td className="text-center" scope="col">
                    <button className="viewEmployeeBtn">
                      <FaUserEdit  onClick={()=>editHandler(user.employeeid)}/>

                    </button>
                  </td>
                  {/* delete button */}

                  <td className="text-center" scope="col">
                    {/* <button
                      className="viewEmployeeBtn"
                      onClick={() => handleClick(user.id)}
                    >
                      <MdDeleteSweep />
                    </button> */}
                    <button
                      className="viewEmployeeBtn"
                      onClick={() => handleClick(user.id)}
                    >
                      <MdDeleteSweep/>
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

export default ViewEmployee;
