import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, setTodoList, filteredList }) {
  return (
    <div className="list-container">
      <div className="item-wrapper">
        <ul className="todo-list">
          {
            filteredList.map((i) => (
              <TodoItem
                item={ i }
                key={ i.id }
                todoList={ todoList }
                setTodoList={ setTodoList }
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
