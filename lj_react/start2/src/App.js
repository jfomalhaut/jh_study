import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Product from './routers/Product';

function App() {
	return (
		<BrowserRouter>
			{/* <ul>
				<li>
					<Link to="/home">To Home</Link>
				</li>
				<li>
					<Link to="/list">To List</Link>
				</li>
			</ul> */}
			<Switch>
				<Route path="/product/:type" exact component={Product} />

				<Route path="/home" render={(props) => (
					<Home history={props.history} name={'김지형'} />
				)}/>

				<Route path="/list/:name" render={(props) => (
					<List { ...props } />
				)} />
				<Redirect to="/product/all" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;