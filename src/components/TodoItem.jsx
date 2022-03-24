import React from 'react';

function TodoItem() {
  return (
    <div className="item-container">
      <li className="todo-item"></li>
      <button className="complete-button">Complete</button>
      <button className="delete-button">Delete</button>
    </div>
  );
}

export default TodoItem;
