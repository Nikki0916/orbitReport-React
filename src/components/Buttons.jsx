import React from 'react';
import satData from '../components/satData.jsx';
import './styling.css';




function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
        <div className="flex-container"></div>
      
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
    
      <button onClick={() => setSat(satData)}>All Orbit</button>
    </div>
  );
}

export default Buttons;