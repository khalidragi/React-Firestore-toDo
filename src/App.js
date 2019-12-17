import React, { useState, useEffect } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TasksList';
import ToDoList from './components/ToDoList';
import firebase from './firebase';

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [currentTaskId, setCurrentTaskId] = useState('');
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('toDos')
      .onSnapshot(snap => {
        const toDos = snap.docs.map(todo => {
          const data = todo.data();
          data['id'] = todo.id;
          return data;
        });
        setToDos(toDos);
      });
  }, []);

  const selectedTask = (task, id) => {
    setCurrentTask(task);
    setCurrentTaskId(id);
    firebase
      .firestore()
      .collection('toDos')
      .doc(id)
      .collection('toDos')
      .onSnapshot(snap => {
        const toDos = snap.docs.map(todo => {
          const data = todo.data();
          data['id'] = todo.id;
          return data;
        });
        setToDoList(toDos);
      });
    console.log(toDoList);
  };

  const addNewTask = task => {
    firebase
      .firestore()
      .collection('toDos')
      .add({
        task: task
      });
  };

  return (
    <div className='App grey lighten-4'>
      <nav className='nav-wrapper cyan darken-3'>
        <div className='brand-logo left'>
          <h5>React-Firestore toDo</h5>
        </div>
      </nav>
      <div className='container row'>
        <div className='col s4'>
          <TaskList tasks={toDos} selectedTask={selectedTask} />
          <NewTaskForm addNewTask={addNewTask} />
        </div>
        <div className='col s7 offset-3 right '>
          <ToDoList
            toDoList={toDoList}
            currentTask={currentTask}
            currentTaskId={currentTaskId}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
