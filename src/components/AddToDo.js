import React, { useState } from 'react';

const AddToDo = ({ addNewToDo, currentTaskId }) => {
  const [toDo, setToDo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNewToDo(toDo);
    setToDo('');
  };

  return (
    <div className='input-field row'>
      <form onSubmit={handleSubmit} className='col s10'>
        <input
          id='toDo'
          type='text'
          value={toDo}
          onChange={e => setToDo(e.target.value)}
          placeholder='Add New ToDo'
        />
      </form>
    </div>
  );
};

export default AddToDo;
