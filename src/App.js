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
    switch (status) {
      case 'active':
        setFilteredList(todoList.filter((t) => t.completed === false ));
        break;
      case 'completed':
        setFilteredList(todoList.filter((t) => t.completed === true ));
        break;
      default:
        setFilteredList(todoList);
    }
  }, [status, todoList]);

  return (
    <div className="App">
      <Header />
      <Form
        inputText={ inputText }
        setInputText={ setInputText }
        todoList={ todoList }
        setTodoList={ setTodoList }
      />
      <TodoList
        todoList={ todoList }
        setTodoList={ setTodoList }
        filteredList={ filteredList }
      />
      <FilterButtons setStatus={ setStatus }/>
    </div>
  );
}

export default App;
