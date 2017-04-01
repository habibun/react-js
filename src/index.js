import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import './index.css';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';

const AboutPage = (props) => (
	<section>
		<h2>This is About page</h2>
		<div>{props.childen}</div>
		<Link activeClassName="active" to="/about/nestedone">Nested one</Link>
		{' '}
		<Link activeClassName="active" to="/about/nestedtwo">Nested two</Link>
	</section>
)

const HomePage = () => (
	<section>
		<h2>This is Home page</h2>
		<Link to="/about">About</Link>
	</section>
)

const NestedOne = () => (
	<section>
		<h2>Nested page 1</h2>
	</section>
)


const NestedTwo = () => (
	<section>
		<h2>Nested page 2</h2>
	</section>
)


const IndexRoutePage = () => (
	<h2>IndexRoutePage Page</h2>
)

ReactDOM.render(
  // <Todo />,
	<Router history={browserHistory}>
		<Route path="/" component={HomePage} />		
		<Route path="/about" component={AboutPage} >
			<IndexRoute component={IndexRoutePage} />
			<Route path="nestedone" component={NestedOne} />
			<Route path="nestedtwo" component={NestedTwo} />
		</Route>
	</Router>,

  document.getElementById('root')
);
