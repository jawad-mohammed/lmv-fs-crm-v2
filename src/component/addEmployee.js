// import React, { useState, useEffect } from 'react';
// // import { useFormik } from 'formik';
// import axios from 'axios';
// import './AddEmployee.css';
// // import { useHistory } from 'react-router';
// import PayrollService from '../../config/index';
// import MinDate from '../MinDate';
// import { Validate } from '../helper/validationSchemaAddEmployee';
// // import { getAssignedManagerIds, getEmployeeDetails } from '../api';

// function AddEmployee() {
// //   const history = useHistory();
//   const [state, setstate] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [empid, setEmpid] = useState(false);
//   const [emailid, setEmailId] = useState(false);
//   const [phone, setPhone] = useState(false);
//   const [account, setAccount] = useState(false);
//   const [aadhar, setAadhar] = useState(false);
//   const [pan, setpan] = useState(false);
//   const [designations, setDesignations] = useState([]);
//   const [roles, setRoles] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [branches, setBranches] = useState([]);
//   const [role, setRole] = useState('admin');
// //   const [assignedmanagerids, setAssignedManagerIds] = useState([]);

// //   useEffect(async () => {
// //     const token = sessionStorage.getItem('token');
// //     await axios.get('../data.json').then((res) => setstate(Object.keys(res.data)));
// //     await axios.get(PayrollService.PayrollService.baseURL + '/api/get-designations', { headers: { Authorization: token } }).then((res) => setDesignations(res.data));
// //     await axios.get(PayrollService.PayrollService.baseURL + '/api/get-roles', { headers: { Authorization: token } }).then((res) => {
// //       setRoles(res.data);
// //     });

// //     await axios
// //       .get(PayrollService.PayrollService.baseURL + '/api/get-location', { headers: { Authorization: token } })
// //       .then((res) => setLocations(res.data))
// //       .catch((err) => console.error(err));
// //   }, []);

//   // console.log(Validate(role))
// //   const formik = useFormik({
// //     initialValues: {
// //       employeeId: '',
// //       dateOfJoining: '',
// //       epfUanNumber: '',
// //       firstName: '',
// //       department: '',
// //       accountNumber: '',
// //       lastName: '',
// //       designation: '',
// //       branchName: '',
// //       email: '',
// //       employeeType: '',
// //       password: '',
// //       location: '',
// //       phoneNumber: '',
// //       dob: '',
// //       address1: '',
// //       address2: '',
// //       aadhaarNumber: '',
// //       pancard: '',
// //       pincode: '',
// //       states: '',
// //       cities: '',
// //       country: '',
// //       grossSalary: '',
// //       role: '',
// //       branch: '',
// //       ifsc: '',
// //       regime: '',
// //       bankName: '',
// //       assignedManagerId: '',
// //       fatherContact: '',
// //       motherOrHusbandContact: '',
// //       employeeDetails: '',
// //     },

//     // onSubmit: async (values, onSubmitprops) => {
//     //   console.log(values);
//     //   const token = sessionStorage.getItem('token');
//     //   const obj = {
//     //     employeeid: values.employeeId,
//     //     email: values.email,
//     //     phoneNumber: values.phoneNumber,
//     //     accountNumber: values.accountNumber,
//     //     aadhaarNumber: values.aadhaarNumber,
//     //     pancard: values.pancard,
//     //   };

//     //   await axios
//     //     .post(PayrollService.PayrollService.baseURL + '/api/remove/validate-details', obj, { headers: { Authorization: token } })
//     //     .then((res) => {
//     //       // console.log("add employee response", res)
//     //       if (res.data === 'EmployeeId Already exists') {
//     //         return setEmpid((value) => !value);
//     //       }
//     //       if (res.data === 'Email Already exists') {
//     //         return setEmailId((val) => !val);
//     //       }
//     //       if (res.data === 'Phone Number Already exists') {
//     //         return setPhone((val) => !val);
//     //       }
//     //       if (res.data === 'Account Number Already exists') {
//     //         return setAccount((val) => !val);
//     //       }
//     //       if (res.data === 'Aadhar Number Already exists') {
//     //         return setAadhar((val) => !val);
//     //       }
//     //       if (res.data === 'Pancard Number Already exists') {
//     //         return setpan((val) => !val);
//     //       }
//     //       if (res.data === 'No Duplicate Values Found') {
//     //         axios
//     //           .post(PayrollService.PayrollService.baseURL + '/api/employee-details', values, { headers: { Authorization: token } })
//     //           .then((res) => res.config.data)
//     //           .catch((err) => console.log(err));
//     //         onSubmitprops.setSubmitting(false);
//     //         onSubmitprops.resetForm();
//     //         window.alert('Employee Added Successfully');
//     //         // history.push('/view-employee');
//     //       }
//     //     })
//     //     .catch((err) => console.log(err));
//     // },
//     // validatio420nSchema: Validate(role),
// //   });
//   // console.log(Validate(role))

//   const date = new Date();
//   const employeeType = ['LMVIT', 'LMVFS', 'LMVIS', 'LMVIBS'];
//   const department = ['ADMIN', 'HR', 'Personal Loan', 'Backed Operations', 'Finance', 'Investments', 'Home Loan', 'Insurance', 'Business Loan', 'IT', 'Zeo Operational Manager', 'Sales', 'Telecaller'];
//   const selectedStatesHandle = async (e) => {
//     formik.handleChange(e);
//     await axios.get('../data.json').then((res) => setCities(res.data[e.target.value]));
//   };
//   const onselectBranchHandle = async (e) => {
//     // console.log(e.target.value);
//     formik.handleChange(e);
//     const token = sessionStorage.getItem('token');
//     await axios
//       .get(PayrollService.PayrollService.baseURL + `/api/get-branches/${e.target.value}`, { headers: { Authorization: token } })
//       .then((res) => setBranches(res.data))
//       .catch((err) => console.log(err));
//   };

//   const onKeyDownHandle = (e) => {
//     e.preventDefault();
//     return false;
//   };

//   const onSelectRoleHandler = (e, formik) => {
//     // console.log('e',e.target.value,formik)
//     formik.handleChange(e);
//     if (formik.values.employeeType === '') {
//       formik.values.role = '';
//       return window.alert('Please select employee type');
//     }
//     if (formik.values.location === '') {
//       formik.values.role = '';
//       return window.alert('Please select location');
//     }
//     if (formik.values.branch === '') {
//       formik.values.role = '';
//       return window.alert('Please select branch');
//     } else {
//     //   getAssignedManagerIds(formik)
//     //     .then((res) => {
//     //       if (!Array.isArray(res)) {
//     //         setAssignedManagerIds([]);
//     //       } else {
//     //         setAssignedManagerIds(res);
//     //       }
//     //     })
//         // .catch((err) => console.log(err));
//     }
//     setRole(e.target.value);
//   };

//   return (
//     <>
//       <div className="d-flex justify-content-end mr-3">
//         <div className="validate-alerts col-11 col-md-6 col-lg-4 col-xl-3">
//           {empid && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               <strong>EmployeeId Already Exists</strong>
//               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setEmpid((value) => !value)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//           )}

//           {emailid && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               <strong>Email is Already Exists</strong>
//               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setEmailId((value) => !value)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//           )}
//           {phone && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               <strong>Phone Number Already Exists</strong>
//               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setPhone((value) => !value)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//           )}
//           {account && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               <strong>Account Number Already Exists</strong>
//               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setAccount((value) => !value)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//           )}
//           {aadhar && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               <strong>Aadhar Number Already Exists</strong>
//               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setAadhar((value) => !value)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//           )}
//           {pan && (
//             <div className="alert alert-danger alert-dismissible fade show" role="alert">
//               <strong>Pancard Number Already Exists</strong>
//               <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setpan((value) => !value)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="d-flex justify-content-center mt-4 mb-2 text-primary">
//         <h5 className="heading col-10 col-sm-6 col-xl-4 ">Add Employee</h5>
//       </div>
//       <div className="container employeeform p-0">

//       </div>
//     </>
//   );
// }
// export default AddEmployee;