import React, { Component } from 'react';
import TodoItem from "./components/TodoItem";

class Todo extends Component {
  constructor(){
    super();
    this.changeStatus = this.changeStatus.bind(this);
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
      ]
    }
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

  render() {
    return (
      <ul>
        {
          this.state.tasks.map((task, index) => {
            return <TodoItem key={task.name} details={task} handleClick={this.changeStatus} index={index} />
          })
        }
      </ul>
    )
  }
}

export default Todo;
