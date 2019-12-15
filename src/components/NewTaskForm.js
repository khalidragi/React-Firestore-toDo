import React, { useState } from 'react';

const NewTaskForm = ({ newTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    newTask({ task, toDo: [] });
    setTask('');
  };

  return (
    <div className='input-field'>
      <form onSubmit={handleSubmit}>
        <i className='material-icons prefix'>add_box</i>
        <input
          id='task'
          type='text'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <label htmlFor='task'>New Task</label>
      </form>
    </div>
  );
};

export default NewTaskForm;
