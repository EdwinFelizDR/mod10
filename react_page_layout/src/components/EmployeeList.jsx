import React, { useState } from "react";
import EmployeeListItem from "./EmployeeListItem.jsx";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      id: "1",
      name: "John Doe",
      title: "Software Engineer",
      image: "src/imgs/m1.jpg",
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "Project Manager",
      image: "src/imgs/f1.jpg",
    },
    {
      id: "3",
      name: "Bob Williams",
      title: "Developer I",
      image: "src/imgs/m2.jpg",
    },
    {
      id: "4",
      name: "Jennifer Duport",
      title: "Designer",
      image: "src/imgs/f2.jpg",
    },
  ]);

  return (
    <div className="employee-list">
      {employees.map(({ id, name, title, image }) => (
        <Link to={`/employee/${id}`} key={id}>
          <EmployeeListItem id={id} name={name} title={title} image={image} />
        </Link>
      ))}
    </div>
  );
}

export default EmployeeList;
