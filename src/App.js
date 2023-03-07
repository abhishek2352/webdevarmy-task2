// App.js

import React, { useState } from "react";
import "./App.css";
import Person from "./Person";
import people from "./data/people";

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="app">
      
        <div className="people-list">
        {people.map(person => (
          <div
            key={person.name}
            onClick={() => setSelectedPerson(person)}
            className="person-name"
          >
            {person.name}
          </div>
        ))}
      </div>
      <div className="person-info">
        {selectedPerson ? (
          <Person person={selectedPerson} onClick={() => setSelectedPerson(null)} />
        ) : (
          <div className="selected-person">Click on a person to see their details</div>
        )}
      </div>
    </div>
  );
}

export default App;
