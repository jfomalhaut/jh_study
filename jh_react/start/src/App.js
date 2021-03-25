import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/home"> To Home </Link>
                </li>
                <li>
                    <Link to="/list"> To List </Link>
                </li>
            </ul>
            
            <Route path="/home" render={(props) => (
                <Home history={props.history} />
            )}/>

            <Route path="/list/:name" render={(props) => (
                <List {...props} />
            )}>
                <List />
            </Route>
        </BrowserRouter>
    );
};

export default App;