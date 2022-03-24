import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getListFromStorage();
  }, []);

  useEffect(() => {
    switch (status) {
      case 'active':
        setFilteredList(todoList.filter((t) => t.completed === false ));
        break;
      case 'completed':
        setFilteredList(todoList.filter((t) => t.completed === true ));
        break;
      default:
        setFilteredList(todoList);
    };

    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [status, todoList]);

  const getListFromStorage = () => {
    if (localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify([]));
    } else {
      const list = JSON.parse(localStorage.getItem('todoList'));
      setTodoList(list);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form
        inputText={ inputText }
        setInputText={ setInputText }
        todoList={ todoList }
        setTodoList={ setTodoList }
      />
      <div className='main-container'>
        <div className='main-wrapper'>
          <TodoList
            todoList={ todoList }
            setTodoList={ setTodoList }
            filteredList={ filteredList }
          />
          <FilterButtons setStatus={ setStatus }/>
        </div>
      </div>
    </div>
  );
}

export default App;
