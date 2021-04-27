import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home, List, Cart, Login } from './routers';
import { Navigator } from './components';

function App() {
	return (
		<Router>
			<Navigator />
			<Switch>
				<Route path="/home" component={Home} exact />
				<Route path="/list" component={List} />
				<Route path="/cart" component={Cart} />
				<Route path="/login" component={Login} />
				<Redirect to="/home" />
			</Switch>
		</Router>
	);
}

export default App;