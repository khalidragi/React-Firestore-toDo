import React, { useState } from 'react';

const AddToDo = ({ addNewToDo }) => {
  const [toDo, setToDo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNewToDo(toDo);
    setToDo('');
    console.log(toDo);
  };

  return (
    <div className='input-field row'>
      <form onSubmit={handleSubmit} className='col s7'>
        <i className='material-icons prefix'>add_box</i>
        <input
          id='toDo'
          type='text'
          value={toDo}
          onChange={e => setToDo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddToDo;
