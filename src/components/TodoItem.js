import React from 'react';

class TodoItem extends React.Component {

	constructor(props){
		super();

		this.state={
			isEditing: false
		}

		this.renderForm = this.renderForm.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.toggleState = this.toggleState.bind(this);
		this.updateItem = this.updateItem.bind(this);
	}

	updateItem(evt){
		evt.preventDefault();
		this.props.editTask(this.props.index, this.input.value);
		console.log(this.input.value);
	}

	renderForm(){
		return(
			<form onSubmit={this.updateItem}>
			<input type="text" ref={(value) => {
				this.input = value
			}} 
			defaultValue={this.props.details.name}/>
			<button type="submit">Update Item</button>
			</form>
		)
	}

	renderItem(){
		return(
			<li 
			onClick={()=>{
			this.props.handleClick(this.props.index)
			}} 
			className={this.props.details.completed ? 'completed' : ''}>
			{this.props.details.name}
			<button 
			onClick={(evt) => {
			evt.stopPropagation();
			this.props.deleteTask(this.props.index)
			}}>delete</button>
			<button 
			onClick={(evt) => {
			evt.stopPropagation();
			this.toggleState(this.props.index)
			}}>Edit Item</button>
			</li>
		)
	}

	toggleState(){
		const {isEditing} = this.state; 
		this.setState({
			isEditing: !isEditing
		});
	}

	render(){
		const {isEditing} = this.state; 
		return(
  			<section>
      			{
      				isEditing ?  this.renderForm() : this.renderItem()
      			}
  			</section>
		)
	}
}

export default TodoItem;