import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import { List, Cart } from './routers';

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/list">List</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path="/list" component={List} exact />
				<Route path="/cart" component={Cart} />
				<Redirect to="/list" />
			</Switch>
		</Router>
	);
}

export default App;