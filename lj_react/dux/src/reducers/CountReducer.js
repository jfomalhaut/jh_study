import { CountAction } from "../actions";
const { INCREMENT, DECREMENT } = CountAction;

const initialState = {
	count: 0
};

const CountReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT: {
			return {
				...state,
				count: state.count + 1
			};
		}
		case DECREMENT: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default CountReducer;