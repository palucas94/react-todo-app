import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

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
    </div>
  );
}

export default App;
