import React from 'react';

function TodoItem({ item, todoList, setTodoList }) {
  const { id, text, completed } = item;

  const completeHandler = () => {
    setTodoList(todoList.map((i) => {
      if (i.id === id) {
        return { ...item, completed: !i.completed }
      }
      return i;
    }));
  };

  const deleteHandler = () => {
    setTodoList(todoList.filter((i) => i.id !== id ));
  };

  return (
    <div className={`item-container ${completed ? 'completed' : ''} `}>
      <li className="todo-item" key={ id }>{ text }</li>
      <button className="complete-button" onClick={ completeHandler }>Complete</button>
      <button className="delete-button" onClick={ deleteHandler }>Delete</button>
    </div>
  );
}

export default TodoItem;
