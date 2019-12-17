import React, { useState, useEffect } from 'react';
import AddToDo from './AddToDo';
import firebase from '../firebase';

const ToDoList = ({ toDoList, currentTask, currentTaskId }) => {
  const [toDos, setToDos] = useState([]);

  const addNewToDo = todo => {
    firebase
      .firestore()
      .collection('toDos')
      .doc(currentTaskId)
      .collection('toDos')
      .add({ todo });
  };

  const deleteToDo = id => {
    firebase
      .firestore()
      .collection('toDos')
      .doc(currentTaskId)
      .collection('toDos')
      .doc(id)
      .delete();
  };

  return (
    <>
      {currentTask ? (
        <>
          <ul className='collection with-header row '>
            <li className='collection-header'>
              <h5 className='cyan-text text-darken-4'>{currentTask}</h5>
            </li>

            {toDos
              ? [...toDoList].map(todo => {
                  return (
                    <li
                      className='collection-item grey-text text-darken-1'
                      key={todo.id}>
                      <div>
                        {todo.todo}
                        <a href='#!' className='secondary-content'>
                          <i
                            className='material-icons red-text'
                            onClick={() => deleteToDo(todo.id)}>
                            delete_sweep
                          </i>
                        </a>
                      </div>
                    </li>
                  );
                })
              : null}
          </ul>
          <AddToDo addNewToDo={addNewToDo} />
        </>
      ) : null}
    </>
  );
};

export default ToDoList;
