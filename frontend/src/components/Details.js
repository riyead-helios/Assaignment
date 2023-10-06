import React from "react";
import { getEmployee } from "../services/EmployeeService";
import { useParams } from "react-router-dom";
import "./style.css";

const Details = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = React.useState(null);

  React.useEffect(() => {
    getEmployee(employeeId)
      .then((data) => {
        setEmployee(data);
      })
      .catch((error) => {
        console.error("Error fetching employee data: ", error);
      });
  }, []);

  return (
    <>
      <div style={{ color: "black" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          This is Details Page
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          fugit unde saepe reprehenderit nihil corporis repellat delectus
          veritatis quaerat illo quis rem dolor architecto nam sunt,
          exercitationem ipsam itaque eum.
        </p>

        <div className="project-container">
          {employee ? (
            <div className="employee-details">
              <h2>Employee Details</h2>
              <p>
                <i className="fa fa-solid fa-id-badge"></i>{" "}
                {employee.employeeId}
              </p>
              <p>
                <i className="fa fa-user"></i> {employee.name}
              </p>
              <p>
                <i className="fa fa-envelope"></i> {employee.email}
              </p>
              <p>
                <i className="fa fa-unlock-alt"></i> {employee.password}
              </p>
            </div>
          ) : (
            <p style={{ color: "red" }}>
              You have not selected any specific employee
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
