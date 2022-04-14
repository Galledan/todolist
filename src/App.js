import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './App.css'

function App() {
  
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>    
    </div>
  );
}

export default App;
