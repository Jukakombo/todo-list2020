import './App.css';
import TodoForm from './compoenets/TodoForm';
import TodoHeader from './compoenets/TodoHeader';

function App() {
  return (
    <div className="app">
      <TodoHeader />
      <TodoForm />
    </div>
  );
}

export default App;
