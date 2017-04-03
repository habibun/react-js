import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import './index.css';
import {Router, Route, browserHistory, IndexRoute, Link, Redirect} from 'react-router';
import { style } from 'typestyle';
import $ from "jquery";

const test = style({
	backgroundColor: 'yellow',
	$nest: {
		"& > h2": {
			backgroundColor: 'red',
		}
	}
});

class Fetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: []
		}
	}

	componentDidMount() {
		$.ajax({
			url: this.props.url,
			success: (data) => {
				this.setState({
					content: data
				})
			},
			error: (error) => {
				console.log("error", error)
			}
		})
	}

	render() {
		return(
			<section>
				{ this.props.children(this.state.content) }
			</section>
		)
	}
}

class App extends React.Component {
	render() {
		return(
			<section>
				<Fetch url="https://jsonplaceholder.typicode.com/posts" >
				{
					(data) => {
						return data.map((value, index) => {
							return <li key={index}>{value.title}</li>
						})
					}
				}
				</Fetch>

			</section>
			)
	}
}

const AboutPage = (props) => (
	<section>
		<h2>This is About page</h2>
		<div>{props.childen}</div>
		<Link activeClassName="active" to="/about/nestedone">Nested one</Link>
		{' '}
		<Link activeClassName="active" to="/about/nestedtwo">Nested two</Link>
	</section>
)

const HomePage = (props) => (
	<section>
		<div className={test}>
			<h2 className={test}>This is Home page</h2>
			<p>this is a test</p>
		</div>

		<Link to="/about">About</Link>
		{' '}
		{' '}
		<Link to="/querystring">Query string</Link>
		{props.children}

	</section>
)

const NestedOne = () => (
	<section>
		<h2>Nested page 1</h2>
	</section>
)

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}

	increaseCounter(){
		/*this.setState({
			counter: this.state.counter + 1
		}, () => {
			console.log(this.state.counter)
		})*/

		// console.log(this.state.counter)

		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1
			}
		}, () => {
		console.log(this.state.counter)
			
		})
		// console.log(this.state.counter)

	}

	render() {
		return(
			<section>
			{this.state.counter}
			<button onClick={this.increaseCounter.bind(this)}>Add </button>
			</section>
		)
	}
}


const NestedTwo = () => (
	<section>
		<h2>Nested page 2</h2>
	</section>
)


const IndexRoutePage = () => (
	<h2>IndexRoutePage Page</h2>
)

const QueryString = (props) => (
	<section>
		<h3>Query string test </h3>
		<p>my param: {props.routeParams.id}</p>
	</section>
)

ReactDOM.render(
  <Counter/>,
  document.getElementById('root')
);
