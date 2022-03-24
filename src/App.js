import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
