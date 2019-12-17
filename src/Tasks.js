import firebase from './firebase';

class Tasks {
  constructor(task) {
    this.task = task;
    this.toDos = firebase.firestore.collection('toDos');
  }

  async addToDo(todo) {
    const todo = {
      todo,
      task: this.task
    };

    const response = await this.toDos.add(todo);
    return response;
  }
}

export default Tasks;
