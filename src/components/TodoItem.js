import React from 'react';

const TodoItem = (props) => {
  return (
      <li 
	      onClick={()=>{
	        props.handleClick(props.index)
	      }} 
	      className={props.details.completed ? 'completed' : ''}>
	      {props.details.name}
	      <button 
	      onClick={(evt) => {
	      	evt.stopPropagation();
	      	props.deleteTask(props.index)
	      }}>delete</button>
      </li>
  )
}

export default TodoItem;