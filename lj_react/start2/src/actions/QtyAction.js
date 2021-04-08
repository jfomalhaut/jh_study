const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (add) => ({ type: INCREMENT, add });
const decrement = () => ({ type: DECREMENT });

export default {
	INCREMENT,
	DECREMENT,
	increment,
	decrement	
};