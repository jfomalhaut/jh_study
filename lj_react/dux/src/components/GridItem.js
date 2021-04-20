import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Comma, getDate } from '../customs';
import { CartAction } from '../actions';

function GridItem({ item }) {
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(CartAction.addToCart(item));
	};

	return (
		<Item>
			<img src={item.src} />
			<h5>{item.name}</h5>
			<p>{Comma(item.price)}원</p>
			<button onClick={addToCart}>담기</button>
			{/* <h1>{getDate(now)}</h1> */}
		</Item>
	);
}

export default GridItem;

const Item = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
	box-shadow: 0 0 15px rgba(0, 0, 0, .15);

	button {
		width: 100%;
		padding: 10px 0;
		cursor: pointer;
		border: none;
		outline: none;
		background: #222;
		color: #fff;
	}

	img {
		width: 100%;
	}
`;