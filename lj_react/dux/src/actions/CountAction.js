const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increase = () => ({ type: INCREMENT });
const decrease = () => ({ type: DECREMENT });

export default {
	INCREMENT,
	DECREMENT,
	increase,
	decrease	
};