import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import './index.css';
import {Router, Route, browserHistory, IndexRoute, Link, Redirect} from 'react-router';
import { style } from 'typestyle';

const test = style({
	backgroundColor: 'yellow',
	$nest: {
		"& > h2": {
			backgroundColor: 'red',
		}
	}
});

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
		<div className={test}>
			<h2 className={test}>This is Home page</h2>
			<p>this is a test</p>
		</div>

		<Link to="/about">About</Link>
		{' '}
		{' '}
		<Link to="/querystring">Query string</Link>

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

const QueryString = (props) => (
	<section>
		<h3>Query string test </h3>
		<p>my param: {props.routeParams.id}</p>
	</section>
)

ReactDOM.render(
  // <Todo />,
	<Router history={browserHistory}>
		{/* <Redirect from="/" to="/about" /> */}		
		<Route path="/" component={HomePage} />		
		<Route path="/querystring(/:id)" component={QueryString} />
		<Route path="/about" component={AboutPage} >
			<IndexRoute component={IndexRoutePage} />
			<Route path="nestedone" component={NestedOne} />
			<Route path="nestedtwo" component={NestedTwo} />
		</Route>

	</Router>,

  document.getElementById('root')
);
