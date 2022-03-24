import React from 'react';

function FilterButtons({ setStatus }) {
  const statusHandler = ({ target: { value } }) => {
    setStatus(value);
  };

  return (
    <div className="buttons-container">
      <div className="buttons-wrapper">  
        <button type='button' value='all' onClick={ statusHandler }>All</button>
        <button type='button' value='active' onClick={ statusHandler }>Active</button>
        <button type='button' value='completed' onClick={ statusHandler }>Completed</button>
      </div>
    </div>
  );
}

export default FilterButtons;