import React from 'react';
import Items from '../jsons/fishes.json';
import { Comma, getDate } from '../customs';
import styled from 'styled-components';
import { GridItem } from '../components';

function List() {
	const hello = 'Hello';
	const now = new Date();

	return (
		<GridLayout>
			{Items.map(item => (
				<GridItem key={`GRID_ITEM${item.id}`} item={item} />
			))}
		</GridLayout>
	);
}

export default List;

const GridLayout = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 1000px;
	grid-gap: 20px;
	margin: 50px auto;
`;