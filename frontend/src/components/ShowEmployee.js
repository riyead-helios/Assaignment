import React, { useState, useEffect } from "react";
import "./style.css";
import UpdateEmployeeModel from "./UpdateEmployeeModel";
import { deleteEmployee } from "../services/EmployeeService";

const ShowEmployee = ({
  getEmployeeData,
  setIsUpdated,
  setEditModalShow,
  editModalShow,
  editEmployee,
  setEditEmployee,
  emp,
}) => {
  const handleUpdate = (e, emp) => {
    e.preventDefault();
    getEmployeeData();
    setEditModalShow(true);
    setEditEmployee(emp);
  };

  const handleDelete = (e, employeeId) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      deleteEmployee(employeeId).then(
        (result) => {
          alert(result);
          setIsUpdated(true);
          getEmployeeData();
        },
        (error) => {
          alert("Failed to Delete Employee");
        }
      );
    }
  };

  return (
    <><h2 className="edh">Employees Details Table</h2><div className="table">

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((emp, index) => (
            <tr key={emp.employeeId}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.password}</td>
              <td>
                <button onClick={(event) => handleUpdate(event, emp)}>
                  <i className="fa fa-edit"></i>
                </button>

                <button onClick={(e) => handleDelete(e, emp.employeeId)}>
                  <i className="fa fa-trash"></i>
                </button>
                <UpdateEmployeeModel
                  getEmployeeData={getEmployeeData}
                  setIsUpdated={setIsUpdated}
                  setEditModalShow={setEditModalShow}
                  setEditEmployee={setEditEmployee}
                  editModalShow={editModalShow}
                  editEmployee={editEmployee}
                  emp={emp} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  );
};

export default ShowEmployee;
