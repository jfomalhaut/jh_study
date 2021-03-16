import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';

function App() {
	return (
		<BrowserRouter>
			<ul>
				<li>
					<Link to="/home">To Home</Link>
				</li>
				<li>
					<Link to="/list">To List</Link>
				</li>
			</ul>
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/list">
				<List />
			</Route>
		</BrowserRouter>
	);
};

export default App;