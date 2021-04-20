import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
	// CartReducer 는 곧 CartReducer의 state가 된다.
	const cart = useSelector(({ CartReducer }) => CartReducer);
	return (
		<div>
			<h1>Cart: {cart.length}개</h1>
		</div>
	);
}

export default Cart;