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

			<Route path="/home" render={(props) => (
				<Home history={props.history} name={'김지형'} />
			)}/>

			<Route path="/list/:name" render={(props) => (
				<List { ...props } />
			)} />
		</BrowserRouter>
	);
};

export default App;