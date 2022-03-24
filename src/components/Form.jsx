import React from 'react';

function Form({ inputText, setInputText, todoList, setTodoList }) {
  const inputHandler = ({ target: { value } }) => {
    setInputText(value);
  };

  const randomId = () => Math.random() * 10000;
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: randomId(),
        text: inputText,
        completed: false,
      }
    ]);
    setInputText('');
  };

  return (
    <div className='form-container'>
      <form className='todo-form'>
        <input
          className='form-input'
          placeholder='Add new to do...'
          type='text'
          value={ inputText }
          onChange={ inputHandler }
        />
        <button
          className='form-button'
          type='submit'
          onClick={ submitHandler }
        >
          <i className="fa-regular fa-square-plus"></i>
        </button>
      </form>
    </div>  
  );
}

export default Form;
