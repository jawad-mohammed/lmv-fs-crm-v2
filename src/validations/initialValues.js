export const addEmployeeInitialValues = () => {
  const initialValues = {
    Employeeid: "",
    userName: "",
    Address: "",
    Pincode: "",
    MNumber: "",
    BankName: "",
    BankBranch: "",
    IFSCCODE: "",
    AccountNo: "",
    AdharCard: "",
    PanCard: "",
    AlternateNo: "",
    email: "",
    state: "",
    designation: "",
    AssignedManager: "",
    companylocation: "",
    Status: "",
    AAddress: "",
    CBankBranch: "",
    district: "",
    city: "",
    officialNum:"",
    officialEmail:"",
    officialState:"",
    ZonalManager:""
  };
  return initialValues
};

      {/* for enabiling and diabling Assigned manager */}
                      /* {designation === 'Admin' ? null : (
              <div className="mb-3 ">
              <label htmlFor="mid">
                <b>ASSIGNED MANAGER:</b>
              </label>
              <InputGroup
                className="mb-3"
                {...register("AssignedManager", {
                  required: "Please Enter Your assigned Manager",
                  // pattern: {
                  //   value:password.trim().length>4,
                  //   message: "INVALIDE password",
                  // },
                })}
              >
                <FormControl
                  placeholder="Assigned Manager"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="AssignedManager"
                  value={AssignedManager}
                  onChange={changeHandler}
                  disabled={show}
                />
              </InputGroup>
              {errors.AssignedManager && (
                <small className="text-danger">
                  {errors.AssignedManager.message}
                </small>
              )}
            </div>
            )} */