import { getEmployees } from "../services/EmployeeService";
import React, { useState, useEffect } from "react";
import "./style.css";
import ShowEmployee from "./ShowEmployee";

const Blog = () => {
  const [employees, setEmployees] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editEmployee, setEditEmployee] = useState([]);

  const getEmployeeData = () => {
    getEmployees().then((data) => {
      setEmployees(data);
    });
  };

  useEffect(() => {
    getEmployeeData();
  }, [isUpdated]);

  return (
    <div>
      <h1 className="header">Blog Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam minus voluptate hic delectus </p>
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

export default Blog;






