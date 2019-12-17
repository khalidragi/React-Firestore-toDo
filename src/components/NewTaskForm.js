import React, { useState } from 'react';

const NewTaskForm = ({ addNewTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNewTask(task);
    setTask('');
  };

  return (
    <div className='input-field'>
      <form onSubmit={handleSubmit}>
        <input
          id='task'
          type='text'
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder='Add New Task'
        />
      </form>
    </div>
  );
};

export default NewTaskForm;
