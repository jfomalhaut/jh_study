import { QtyAction } from '../actions';
const { INCREMENT, DECREMENT } = QtyAction;

function QtyReducer (state, action) {
	switch (action.type) {
		case INCREMENT: {
			return state + action.add;
		}
		case DECREMENT: {
			return state;
		}
		default: {
			return state;
		}
	}
}

export default QtyReducer;