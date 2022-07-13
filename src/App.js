import React,{useState} from "react";
import "./App.css";
import Crmlogin from "./component/Crmlogin";
import SideNav from "./component/SideNav";
import Crmregister from "./component/Crmregister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Crmfsfrm from "./component/Crmfsfrm";
import ViewEmployee from "./component/ViewEmployee";
import EmployeeDesignation from "./component/EmployeeDesignation";
import Logohead from "./component/Logohead";
import Otppage from "./component/Otppage";
// import Crmform from "../src/component/crm-form/src/Component/Crmform";
// import Crmform
// import AddEmployee from "./component/addEmployee";

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
          <Route path="Crmfsfrm" element={<Crmfsfrm />} />
          <Route path="ViewEmployee" element={<ViewEmployee  show={modalShow}
        onHide={() => setModalShow(false)} />} />
          <Route path="EmployeeDesignation" element={<EmployeeDesignation />} />
          <Route path="Otppage" element={<Otppage />} />


        </Routes>
      </BrowserRouter>
      
      {/* <Crmfsfrm/> */}
      {/* {<AddEmployee/>} */}
    </>
  );
}

export default App;
