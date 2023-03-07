// Person.js

import React from "react";
import "./Person.css";

const Person = ({ person, onClick }) => {
  return (
    <div className="person">
            
      <div className="person-header">
        <div className="person-name">{person.name}</div>
        
      </div>
      <div className="person-experience">
        <ul>
          {person.experience.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="person-read-more">
        <button onClick={onClick}>Close</button>
      </div>
    </div>
  );
};

export default Person;
