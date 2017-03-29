import React, { Component } from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";


class Todo extends Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
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
            return <TodoItem key={task.name} details={task} handleClick={this.changeStatus} index={index} />
          })
        }
      </ul>
      </section>
    )
  }
}

export default Todo;
