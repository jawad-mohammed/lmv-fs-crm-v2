import React,{useState} from "react";
import "./App.css";
import Crmlogin from "./component/Crmlogin";
import SideNav from "./component/SideNav";
import Crmregister from "./component/Crmregister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEmployee from './component/AddEmployee'
import ViewEmployee from "./component/ViewEmployee";
import EmployeeDesignation from "./component/EmployeeDesignation";
import Logohead from "./component/Logohead";
import Otppage from "./component/Otppage";
import AddBranch from "./component/AddBranch";
import EmployeeValidation from './validations/AddEmployeeValidation'

function App() {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crmlogin />} />
          <Route path="Logohead" element={<Logohead />} />
          <Route path="SideNav" element={<SideNav />} />
          <Route path="Crmregister" element={<Crmregister />} />
          <Route path="AddEmployee" element={<AddEmployee />} />
          <Route path="ViewEmployee" element={<ViewEmployee/>} />
          <Route path="EmployeeDesignation" element={<EmployeeDesignation />} />
          <Route path="Otppage" element={<Otppage />} />
          <Route path="AddBranch" element={<AddBranch />} />
          <Route path="EmployeeValidation" element={<EmployeeValidation />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
