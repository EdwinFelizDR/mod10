import React from 'react';

function EmployeeListItem({ id, image, name, title }) {
  return (
    <div className="employee-list-item">
        <img class="w-10 h-10 rounded-full" src={image} />
        <h2>{name}</h2>
        <p>{title}</p>
    </div>
  );
}

export default EmployeeListItem;
