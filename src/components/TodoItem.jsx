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
    setTodoList(todoList.map((i) => {
      if (i.id === id) {
        return { ...item, deleted: true }
      }
      return i;
    }));
  };

  const onTransitionEnd = (id) => {
    setTodoList(todoList.filter((i) => i.id !== id ));
  };

  return (
    <div
      onTransitionEnd={() => onTransitionEnd(id) }
      className={`item-container ${completed ? 'completed' : ''} ${item.deleted ? 'deleted' : ''}`}
    >
      <li className="todo-item" key={ id }>{ text }</li>
      <button
        className="complete-button"
        onClick={ completeHandler }
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button
        className="delete-button"
        onClick={ deleteHandler }
      >
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default TodoItem;
