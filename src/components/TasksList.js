import React from 'react';
import firebase from '../firebase';

const TaskList = ({ tasks, selectedTask }) => {
  const selectTask = (e, id) => {
    selectedTask(e.target.innerText, id);
  };

  const deleteToDo = id => {
    firebase
      .firestore()
      .collection('toDos')
      .doc(id)
      .delete();
  };

  return (
    <ul className='collection'>
      {tasks
        ? tasks.map(task => {
            return (
              <a
                href='#!'
                className='collection-item cyan-text text-darken-3'
                key={task.id}
                onClick={e => selectTask(e, task.id)}>
                {task.task}
              </a>
            );
          })
        : null}
    </ul>
  );
};

export default TaskList;
