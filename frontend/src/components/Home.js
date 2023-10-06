import React, { useState, useEffect } from "react";

import "./style.css";
import { getEmployees, addEmployee } from "../services/EmployeeService";

import ShowEmployee from "./ShowEmployee";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getEmployeeData = () => {
    getEmployees().then((data) => {
      setEmployees(data);
    });
  };

  useEffect(() => {
    getEmployeeData();
  }, [isUpdated]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.email || !newEmployee.password) {
      alert("Please fill in all fields.");
      return;
    }
    addEmployee(newEmployee)
      .then((response) => {
        setEmployees([...employees, response]);
        alert("Employee added successfully!");
        setIsUpdated(true);
        setNewEmployee({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        alert("Failed to Add Employee");
        console.error(error);
      });
  };

  let AddModelClose = () => setAddModalShow(false);

  return (
    <div>
      <div>
      <h1 className="header">Crud with React and DRF</h1>
      
      </div>
      <div className="login_form_container">
        <form onSubmit={handleAddEmployee} className="login_form">
          {/* <h2>Employees Entry Form</h2> */}
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              value={newEmployee.name}
              placeholder="write your name"
              className="input_text"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-envelope"></i>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              value={newEmployee.email}
              placeholder="write your email"
              className="input_text"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              className="input_text"
              value={newEmployee.password}
              placeholder="write your password"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" id="login_button">
            <a>Add Employee</a>
          </button>
          <div className="footer">
            <p>This Is</p>
            <p>Amazing</p>
          </div>
        </form>
      </div>

      <ShowEmployee
        getEmployeeData={getEmployeeData}
        setIsUpdated={setIsUpdated}
        setEditModalShow={setEditModalShow}
        setEditEmployee={setEditEmployee}
        editModalShow={editModalShow}
        editEmployee={editEmployee}
        emp={employees}
      />
    </div>
  );
};

export default Home;


