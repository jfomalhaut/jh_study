import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigator() {
	const count = useSelector(({ CountReducer }) => CountReducer.count);

	return (
		<header>
			<h1>{count}</h1>
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
			</ul>
		</header>
	);
}

export default Navigator;