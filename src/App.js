import "./App.css";
import Crmlogin from "./component/Crmlogin";
import EmployeeDetails from "./component/EmployeeDetails";
import Crmregister from "./component/Crmregister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Crmfsfrm from "./component/Crmfsfrm";
// import Crmform from "../src/component/crm-form/src/Component/Crmform";
// import Crmform
// import AddEmployee from "./component/addEmployee";  

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crmlogin />} />
          <Route path="employeeDetails" element={<EmployeeDetails />} />
          <Route path="Crmregister" element={<Crmregister />} />
          <Route path="Crmfsfrm" element={<Crmfsfrm />} />
        </Routes>
      </BrowserRouter>
      {/* <Crmfsfrm/> */}
      {/* {<AddEmployee/>} */}
    </>
  );
}

export default App;
