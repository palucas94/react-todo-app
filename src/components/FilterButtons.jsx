import React from 'react';

function FilterButtons() {
  return (
    <div className="buttons-container">
      <div className="butttons-wrapper">
        <button type='button' value='all'>All</button>
        <button type='button' value='active'>Active</button>
        <button type='button' value='completed'>Completed</button>
      </div>
    </div>
  );
}

export default FilterButtons;