import React, { useEffect, useState } from 'react';

const PRICE = 7000;
const FEE = 3000;

function Counter() {
	const [count, setCount] = useState(0);
	const [fee, setFee] = useState(0);

	const increasement = () => {
		setCount(count + 1);
	};

	const dereasement = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		const total = count * PRICE;
		const _fee = total < 30000 ? FEE : 0;
		setFee(_fee);
	}, [count]);

	// 처음 실행할 때
	useEffect(() => {
		console.log('첫실행! init');
	}, []);

	return (
		<div>
			<h1>PRICE: {PRICE}원</h1>
			<h1>Count: <span style={{ color: '#FF0000' }}>{count}</span></h1>
			<button onClick={increasement}>increasement</button>
			<button onClick={dereasement}>dereasement</button>
			<h1>TOTAL AMOUNT: {PRICE * count}원</h1>
			<h1>FEE: {fee}원</h1>
			<h1>TOTAL : { PRICE * count + fee }원</h1>
		</div>
	);
};

export default Counter;