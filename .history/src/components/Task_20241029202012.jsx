import React from 'react';

function Task({ task, toggleTaskStatus, deleteTask }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <input 
        type="checkbox" 
        checked={task.isCompleted} 
        onChange={() => toggleTaskStatus(task.id)} 
        disabled={task.isCompleted} // Disable checkbox if task is completed
      />
      <p style={{ flex: 1, margin: '0 10px', textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.name}
      </p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
