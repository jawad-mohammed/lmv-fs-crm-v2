import { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Logohead from "./Logohead";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

//import Pagination from "./Pagination";
import "./Pagination.css";
import PaginateCrmFs from "./PaginateCrmFs";

const ViewEmployee = () => {
  //const [users, setUsers] = useState(.slice(0, 40));
  const [allUsers, setAllUsers] = useState([]);
  const [search,setSearch]=useState("");

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/lmv`);
    const jsonData = await response.json();
    setAllUsers(jsonData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //pagination

  // Get current posts

  // Change page
  const handleClick = async (id) => {
    const deleteItem = await fetch(`http://localhost:8000/lmv/${id}`,{
       method:'DELETE'
    });
 setAllUsers(allUsers.filter((user)=>user.id !== id))

  };

  
  return (
    <>
      {<Logohead />}

      {/* pagination */}

      <div style={{ background: "#00adff" }}>
        <h3 className="text-center">
          <u style={{ color: "white", width: "100vw" }}>
            <b>View Employee</b>
          </u>
        </h3>
      </div>

      <div className=" d-flex text " style={{ overflowX: "auto" }}>
        <SideNav />
        <div id="viewEmployetable">
          {/* search Form */}
            <div>
             <input type="text" placeholder="Search.."
             className="search"
            //  value={search}
             onChange={(e)=>setSearch(e.target.value)}
             />
              <button style={{ background: "#00adff", color: "whitesmoke" }}>
                Search
              </button>
            </div>
            {/* <div className="ml-5"> */}
            {/* <select style={{ marginLeft: "274px" }}>
              <option value="Active">Active</option>
              <option value="In Active">In Active</option>
            </select> */}
            {/* </div> */}
          {/* end of search Form */}

          <table className=" table table-bordered mt-3 ">
            <thead>
              <tr style={{ background: "#00adff" }}>
                <th scope="col">
                  <b>Employee ID</b>
                </th>
                <th scope="col">
                  <b>Name</b>
                </th>
                <th scope="col">
                  <b>Mobile</b>
                </th>
                <th scope="col">
                  <b>Designation</b>
                </th>
                <th scope="col">
                  <b>Status</b>
                </th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } if (
                    val.employeeid===(search.value)
                  ) {
                    return val
                  } 
                }).map((user) => (
                  <tr key={user.id}>
                    <td scope="col">{user.employeeid}</td>
                    <td scope="col">{user.username}</td>
                    <td scope="col">{user.mnumber}</td>
                    <td scope="col">{user.designation}</td>
                    <td scope="col">{user.status}</td>
                    {/* edit button */}
                    <td scope="col">
                      <button className="viewEmployeeBtn">
                        <FaUserEdit />
                      </button>
                    </td>
                    {/* delete button */}

                    <td scope="col">
                      <button className="viewEmployeeBtn" onClick={()=>handleClick(user.id)}>
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

export default ViewEmployee;
