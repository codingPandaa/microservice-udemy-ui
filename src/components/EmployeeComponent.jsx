import React, { useEffect, useState } from "react";
import { getEmployeeById } from "../service/api";
import { useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [employee, setEmployee] = useState({});
  const [department, setDepartment] = useState({});
  const [organization, setOrganization] = useState({});

  //   const { id } = useParams();

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    let response = await getEmployeeById(5);
    console.log(response.data.employeeDto.firstName);
    setEmployee(response.data.employeeDto);
    setDepartment(response.data.departmentDto);
    setOrganization(response.data.organizationDto);
  };

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="card-body">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <p>
              <strong>Employee first name:</strong> {employee.firstName}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Employee last name:</strong> {employee.lastName}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Employee email:</strong> {employee.email}
            </p>
          </div>
        </div>
        <h3 className="card-body">View Department Details</h3>
        <div className="card-body">
          <div className="row">
            <p>
              <strong>Department name:</strong> {department.departmentName}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Department description:</strong> {department.departmentDescription}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Department code:</strong> {department.departmentCode}
            </p>
          </div>
        </div>
        <h3 className="card-body">View Organization Details</h3>
        <div className="card-body">
          <div className="row">
            <p>
              <strong>Organization name:</strong> {organization.organizationName}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Organization description:</strong> {organization.organizationDescription}
            </p>
          </div>
          <div className="row">
            <p>
              <strong>Organization code:</strong> {organization.organizationCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
