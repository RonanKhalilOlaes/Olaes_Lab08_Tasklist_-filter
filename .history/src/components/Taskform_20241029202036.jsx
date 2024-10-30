import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input 
        type="text" 
        placeholder="New Task" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
