import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className='collection '>
      <div className=''>
        {tasks.map(task => {
          return (
            <a href='#' className='collection-item '>
              <h6>{task.task}</h6>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
