import React from 'react';

function Form() {
  return (
    <div className='form-container'>
      <form className='form-wrapper'>
        <input
          className='form-input'
          placeholder='Add new to do...'
          type='text'
        />
        <button
          className='form-button'
          type='submit'
        >
          Form Button
        </button>
      </form>
    </div>  
  );
}

export default Form;
