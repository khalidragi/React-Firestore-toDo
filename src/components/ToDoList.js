import React, { useState } from 'react';
import AddToDo from './AddToDo';

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const addNewToDo = todo => {
    setToDos([...toDos, todo]);
    console.log(todo);
  };

  return (
    <>
      <ul className='collection with-header row '>
        <li className='collection-header'>
          <AddToDo addNewToDo={addNewToDo} />
          <div className='divider'></div>
          <h5>Tasks</h5>
        </li>
        {toDos.map(todo => {
          return (
            <li className='collection-item'>
              <div>
                {todo}
                <a href='#!' className='secondary-content'>
                  <i className='material-icons'>delete_sweep</i>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
