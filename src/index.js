import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import './index.css';
import {
	BrowserRouter as Router, 
	Route,
	Link,
	NavLink,
} from 'react-router-dom';


const Home = () => (
	<h1>Home</h1>
)

const About = () => (
	<h1>About</h1>
)


const Links = () => (
	<ul>
		<li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
		<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
	</ul>
)


class App extends React.Component {
	render() {
		return (
			<Router>
				<section>
					<Links/>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</section>
			</Router>
		);
	}
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

