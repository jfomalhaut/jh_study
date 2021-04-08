import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Items from '../jsons/items.json';
import ProductItem from '../components/ProductItem';

function Product({ match: { params: { type } } }) {
	const [list, setList] = useState(Items);

	const transType = (_type) => {
		switch(_type) {
			case 'fishes': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
		}
	};

	useEffect(() => {
		if (type === 'all') {
			setList(Items);
		} else {
			const _type = transType(type);
			const newList = Items.filter(item => item.type === _type);
			setList(newList);
		}
	}, [type]);

	return (
		<Container type={type}>
			<nav>
				<Link className={type === 'all' && 'active' } style={{ color: type === 'all' ? 'dodgerblue' : '#666' }} to="/product/all">All</Link>
				<Link className={type === 'fishes' && 'active' } style={{ color: type === 'fishes' ? 'dodgerblue' : '#666' }} to="/product/fishes">Fishes</Link>
				<Link className={type === 'fruit' && 'active' } style={{ color: type === 'fruit' ? 'dodgerblue' : '#666' }} to="/product/fruit">Fruit</Link>
				<Link className={type === 'vegetable' && 'active' } style={{ color: type === 'vegetable' ? 'dodgerblue' : '#666' }} to="/product/vegetable">Vegetable</Link>
			</nav>
			<section>
				{list.map(item => (
					<ProductItem item={item} key={`PODUCT_ITEM${item.id}`} />
				))}
			</section>
		</Container>
	);
};

export default Product;

const Container = styled.main`
	width: 1000px;
	margin: 0 auto;

	nav {
		padding: 20px 0;
		a {
			color: #000;
			text-decoration: unset;
			font-size: 25px;
			font-weight: bold;
			margin-right: 10px;
			
			&:link, &:visited {
				color: #000;
				text-decoration: unset;
			}
			&.active {
				color: tomato !important;
			}
		}
	}

	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		${'' /* display: flex;
		flex-wrap: wrap; */}
		${'' /* justify-content: space-between; */}
	}
`;