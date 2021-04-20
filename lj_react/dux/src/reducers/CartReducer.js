import { CartAction } from '../actions';
const { ADD_TO_CART } = CartAction;

const initialState = {
	cart: []
};

const CartReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				// cart: [ 원래있던거, 새로 들어온거 ]
				cart: state.cart.concat({ ...action.item, qty: 1 }),
				// cart: [...state.cart, action.item ]
			};
		}
		default: {
			return state;
		}
	}
};

export default CartReducer;