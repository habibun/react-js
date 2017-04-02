import React, { Component } from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import BindFunctions from "./utils";


class Todo extends Component {
  constructor(){
    super();

    BindFunctions.call(this, ['changeStatus', 'updateTask', 'addTask', 'deleteTask', 'editTask']);
    this.state = {
      tasks: [
        {
          name: "name 1",
          completed: false
        },
        {
          name: "name 2",
          completed: false
        },
        {
          name: "name 3",
          completed: false
        }
      ],
      currentTask: ''
    }
  }

  updateTask(newValue){
      this.setState({
        currentTask: newValue.target.value
      })
  }

  changeStatus(index){
      console.log(this.state.tasks[index]);
      let tasks = this.state.tasks;
      let task = tasks[index];
      task.completed = !task.completed;
      this.setState({
        tasks: tasks
      })
  }

  addTask(evt){
      evt.preventDefault();
      let tasks = this.state.tasks;
      let currentTask = this.state.currentTask;
      tasks.push({
        name: currentTask,
        completed: false
      })

      this.setState({
        tasks: tasks,
        currentTask: ''
      })
  }

  deleteTask(index){
      console.log(index);
      let tasks = this.state.tasks;
      tasks.splice(index, 1);

      this.setState({
        tasks: tasks
      })
  }

  editTask(index, newValue){
      let tasks = this.state.tasks;
      let task = tasks[index];
      task.name = newValue;

      this.setState({
        tasks: tasks
      });
  }

  render() {
    return (
      <section>
        <TodoForm 
          currentTask={this.state.currentTask}
          updateTask={this.updateTask}
          addTask={this.addTask}
        />
        <ul>
        {
          this.state.tasks.map((task, index) => {
            return <TodoItem 
              key={index} 
              details={task} 
              handleClick={this.changeStatus} 
              index={index} 
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              />
          })
        }
      </ul>
      </section>
    )
  }
}

export default Todo;
