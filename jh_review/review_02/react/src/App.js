import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from "./routers/Home";
import List from "./routers/List";
import Profile from "./routers/Profile";

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
                <li>
                    <Link to="/profile"> To Profile </Link>
                </li>
            </ul>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/list">
                <List />
            </Route>
            <Route path="/profiles/:username">
                <Profile />
            </Route>
        </BrowserRouter>
    )
}

export default App;
