import React from 'react';

function DisplayList({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <strong>{item.API}</strong>: {item.Description}
        </li>
      ))}
    </ul>
  );
}

export default DisplayList;
