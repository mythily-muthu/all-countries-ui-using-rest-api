import axios from "axios";
import React, { useState } from "react";

const CreateEmployee = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    mobile_number: "",
  });

  const createNewEmployee = async () => {
    console.log("hi");
    axios.post("http://localhost:8800/employees", employeeDetails);
  };

  return (
    <div>
      <input
        type="text"
        value={employeeDetails.name}
        onChange={(e) => {
          setEmployeeDetails({ ...employeeDetails, name: e.target.value });
        }}
      />
      <input
        type="email"
        value={employeeDetails.email}
        required={true}
        onChange={(e) => {
          setEmployeeDetails({ ...employeeDetails, email: e.target.value });
        }}
      />

      <input
        type="number"
        value={employeeDetails.mobile_number}
        onChange={(e) => {
          setEmployeeDetails({
            ...employeeDetails,
            mobile_number: e.target.value,
          });
        }}
      />
      <button type="submit" onClick={() => createNewEmployee()}>
        create Employee
      </button>
    </div>
  );
};

export default CreateEmployee;
