import React from 'react';

function TodoItem({ item, todoList, setTodoList }) {
  const { id, text, completed } = item;

  return (
    <div className={`item-container ${completed ? 'completed' : ''} `}>
      <li className="todo-item" key={ id }>{ text }</li>
      <button className="complete-button">Complete</button>
      <button className="delete-button">Delete</button>
    </div>
  );
}

export default TodoItem;
