import React from 'react';
import { useDispatch } from 'react-redux';
import { CountAction } from '../actions';

function Home() {
	const dispatch = useDispatch();

	const increment = () => {
		dispatch(CountAction.increase());
	};

	return (
		<div>
			<h1>Home Component</h1>
			<button onClick={increment}>increment</button>
		</div>
	);
}

export default Home;