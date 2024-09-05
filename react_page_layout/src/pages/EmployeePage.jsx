import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeePage({ employees }) {
  const { id } = useParams();
  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="employee-page">
      <img src={employee.image} alt={`${employee.name}`} />
      <h2>{employee.name}</h2>
      <p>{employee.title}</p>
      
    </div>
  );
}

export default EmployeePage;
