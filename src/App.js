import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

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
      />
      <FilterButtons />
    </div>
  );
}

export default App;
