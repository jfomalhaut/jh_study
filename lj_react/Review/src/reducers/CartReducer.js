import { CartAction } from '../actions';
const { ADD_TO_CART } = CartAction;

const initialState = [];

const CartReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TO_CART: {
			return state.concat(action.item);
		}
		default: {
			return state;
		}
	}
};

export default CartReducer;