import React from 'react';
import styled from 'styled-components';

function ProductItem({ item: { id, name, price, type } }) {
	return (
		<PItem type={type}>
			<figure/>
			<article>
				<h1>{name}</h1>
				<h1>{price}원</h1>
			</article>
		</PItem>
	)
};

export default ProductItem;

const PItem = styled.div`
	box-shadow: 0 0 15px rgba(0, 0, 0, .2);
	${'' /* width: calc((100% - 20px * 3) / 4);
	&:not(:nth-child(4n)) {
		margin-right: 20px;
	} */}

	figure {
		margin: 0;
		height: 150px;
		background-color: ${props => 
			props.type === 1 ? '#0071b3' : 
			props.type === 2 ? '#C9242B' : '#198942' 
		};
	}
	article {
		padding: 0 10px;
	}
`;