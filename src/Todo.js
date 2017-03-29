import React, { Component } from 'react';

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
            return <TodoList key={task.name} details={task} handleClick={this.changeStatus} index={index} />
          })
        }
      </ul>
    )
  }
}


class TodoList extends Component {

render(){

  
  return (
      <li onClick={()=>{
        this.props.handleClick(this.props.index)
      }} className={this.props.details.completed ? 'completed' : ''}>{this.props.details.name}</li>
  )
}
}

export default Todo;
