import React, { useState } from "react";

export default function JobApplication(props) {
  let hireEmployee = props.hireEmployee;
  let [name, setName] = useState("");

  // 2b. helper functions
  function handleSubmit(e) {
    e.preventDefault(); // prevents a submit button from submitting a form (i.e. input onChange section)
    hireEmployee(name); // runs the helper function, that we created in App.js to update App.js state
  }

  //   3. JSX SECTION
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Hire Employee</button>
      </form>
    </div>
  );
}
