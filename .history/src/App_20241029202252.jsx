import { useState } from 'react';
import Task from './components/Task.jsx';
import TaskForm from './components/Taskform.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All'); // New filter state

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, isCompleted: false }]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const pendingTasksCount = tasks.filter(task => !task.isCompleted).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.isCompleted;
    if (filter === 'Pending') return !task.isCompleted;
    return true; // 'All' filter
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Task Planner</h1>
      <TaskForm addTask={addTask} />
      
      <div style={{ margin: '10px 0' }}>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
      </div>

      <h3>{pendingTasksCount} tasks remaining</h3>
      <div>
        {filteredTasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            toggleTaskStatus={toggleTaskStatus} 
            deleteTask={deleteTask} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
