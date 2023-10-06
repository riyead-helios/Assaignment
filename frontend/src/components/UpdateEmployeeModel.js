import React from "react";
import "./style.css";
import { updateEmployee } from "../services/EmployeeService";

const UpdateEmployeeModel = ({
  getEmployeeData,
  setIsUpdated,
  setEditModalShow,
  editModalShow,
  editEmployee,
}) => {
  const handleUpdateEmployee = (updatedEmployee) => {
    updateEmployee(updatedEmployee.employeeId, updatedEmployee)
      .then((result) => {
        alert(result);
        getEmployeeData();
        setIsUpdated(true);
        setEditModalShow(false);
      })
      .catch((error) => {
        alert("Failed to Update Employee");
        console.error(error);
      });
  };

  return (
    <div>
      {editModalShow && (
        <div className="modal-overlay active">
          <div className="modal-container active">
            <div className="modal-header">
              <h5 className="modal-title">Update Employee Information</h5>
              <button
                className="modal_close"
                onClick={() => setEditModalShow(false)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateEmployee({
                    ...editEmployee,
                    name: e.target.name.value,
                    email: e.target.email.value,
                    password: e.target.password.value,
                  });
                }}
              >
                <div>
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    required
                    defaultValue={editEmployee.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="input"
                    required
                    defaultValue={editEmployee.email}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="label">Password</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="input"
                    required
                    defaultValue={editEmployee.password}
                  />
                </div>
                <div>
                  <button type="submit">Submit</button>
                  <button type="button" onClick={() => setEditModalShow(false)}>
                    Go Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateEmployeeModel;
