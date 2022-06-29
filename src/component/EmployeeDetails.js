import React, { useState } from "react";
import logo from "../lmvlogo.jpeg";
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
import { FaCog, FaUserTie, FaColumns, FaThList, FaHeart } from "react-icons/fa";
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
  const [menuCollapse, setMenuCollapse] = useState(false);
  const addEmployee = useNavigate();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const addEmployeeForm = (e) => {
    e.preventDefault()
    addEmployee("/Crmfsfrm");
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {<img src={logo} className="elogo"/>}
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiAlignJustify /> : <FiAlignJustify />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <div className="sidebarcon">
              <Menu iconShape="square">
                <div className="sideuser">
                  <MenuItem active={true} icon={<FiHome />}>
                    Home
                  </MenuItem>
                  <MenuItem icon={<FaList />}>Dashboard</MenuItem>
                  <SubMenu title="USERS" icon={<FiUsers />}>
                    <MenuItem>
                      <button onClick={addEmployeeForm} className="sidebtn">
                        {menuCollapse ? "A" : "Add Employee"}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="sidebtn">
                        {menuCollapse ? "R" : "EMPLOYEE DESIGNATION"}
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="sidebtn">
                        {menuCollapse ? "E" : "EMPLOYEE VIEW EMPLOYEE"}
                      </button>
                    </MenuItem>
                  </SubMenu>
                </div>
              </Menu>
            </div>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
