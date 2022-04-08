import "./App.css";
import { useState } from "react";
import EmployeesList from "./components/EmployeesList";
import JobApplication from "./components/JobApplication";

export default function App() {
  // useState
  const [employees, setEmployees] = useState(["Sue", "Joe"]);

  // helper function
  const hireEmployee = (newFriend) => {
    // The spread operator takes an existing array and allows adding another element to it.
    setEmployees([...employees, newFriend]); // the ... is the spread operator
  };

  return (
    <div className='App'>
      <EmployeesList employees={employees} />
      <JobApplication hireEmployee={hireEmployee} />
    </div>
  );
}
