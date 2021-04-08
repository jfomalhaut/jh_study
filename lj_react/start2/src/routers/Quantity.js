import React, { useReducer, useState } from 'react';
import { QtyAction } from '../actions';
import { QtyReducer } from '../reducers';

function Quantity() {
	const [quantity, dispatch] = useReducer(QtyReducer, 0);

	const increment = () => {
		const payload = QtyAction.increment(300);
		console.log(payload);

		dispatch(payload);
	};

	const decrement = () => {
		dispatch({ type: 'DECREMENT' });
	};

	const onChangeHandler = (ev) => {
		
	};

	return (
		<div>
			<h1>Quantity : {quantity}</h1>
			<input value={quantity} onChange={onChangeHandler}/>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
		</div>
	);
};

export default Quantity;