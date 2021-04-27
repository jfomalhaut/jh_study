import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigator() {
	const count = useSelector(({ CountReducer }) => CountReducer.count);
	const cart = useSelector(({ CartReducer }) => CartReducer.cart);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<header>
			{cart.map(item => (
				<span>{item.name}</span>
			))}
			
			<h1>{cart.length}</h1>
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/list">List</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>
					<Link to="/login">login</Link>
				</li>
			</ul>
		</header>
	);
}

export default Navigator;