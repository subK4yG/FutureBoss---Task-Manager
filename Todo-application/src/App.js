import './App.css';
import TodoWrapper from './components/TodoWrapper';
import { TaskProvider } from './context/TaskContext';  
function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TodoWrapper />
      </div>
    </TaskProvider>
  );
}

export default App;
