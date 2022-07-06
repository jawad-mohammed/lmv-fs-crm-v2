import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FaCog, FaUserTie, FaColumns, FaThList, FaHeart, } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiAlignJustify,
  FiUsers,
  FiFile,
  FiLoader,
  FiArchive,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import Crmfsfrm from "./Crmfsfrm";
// import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const addEmployee = useNavigate();
  const ViewEmployee=useNavigate()
  const Empesignation=useNavigate()
  const ViewEmployeeForm= (e) => {
    e.preventDefault()
    addEmployee("/ViewEmployee");
  };


  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const addEmployeeForm = (e) => {
    e.preventDefault()
    addEmployee("/Crmfsfrm");
  };
  const employeeDesignation=(e)=>{
    e.preventDefault();
    Empesignation("/EmployeeDesignation")
  }
 

  return (
    <>
           
     <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiAlignJustify /> : <FiAlignJustify />}
            </div>
      <div id="header">
          <SidebarHeader>
           
          </SidebarHeader>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarContent>
            <div className="sidebarcon">
              <Menu iconShape="square">
                <div className="sideuser">
                  <MenuItem active={true} icon={<FiHome />}>
                    Home
                  </MenuItem>
                  <MenuItem icon={<FaList />}>Dashboard</MenuItem>
                  <SubMenu title="USERS" icon={<FiUsers />} className="pro-inner-list-item">
                    <MenuItem>
                      <button onClick={addEmployeeForm} className="sidebtn">
                        {menuCollapse ? "A" : "Add Employee"}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={employeeDesignation} className="sidebtn">
                        {menuCollapse ? "R" : "EMPLOYEE DESIGNATION"}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={ViewEmployeeForm}  className="sidebtn">
                        {menuCollapse ? "E" : "EMPLOYEE VIEW EMPLOYEE"}
                      </button>
                    </MenuItem>
                  </SubMenu>
                </div>
              </Menu>
            </div>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
