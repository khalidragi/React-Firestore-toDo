import React, { Component } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TasksList';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    tasks: [
      {
        task: 'do demo'
      },
      {
        task: 'add new'
      }
    ]
  };

  newTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  };

  render() {
    return (
      <div className='App grey lighten-4'>
        <header className='App-header'>
          <blockquote>React-Firestore toDo</blockquote>
        </header>
        <div className='container row'>
          <div className='col s4 card-panel '>
            <TaskList tasks={this.state.tasks} />
            <NewTaskForm newTask={this.newTask} />
          </div>
          <div className='col s7 offset-3 right '>
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
