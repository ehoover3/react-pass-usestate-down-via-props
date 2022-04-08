import React from "react";

export default function EmployeesList(props) {
  let { employees } = props;
  let employeesList = employees.map((employee) => <li>{employee}</li>);

  return (
    <div>
      <h1>Employees List</h1>
      <div>{employeesList}</div>
    </div>
  );
}
