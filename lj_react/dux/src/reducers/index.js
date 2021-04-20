import CountReducer from './CountReducer';
import CartReducer from './CartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	CountReducer,
	CartReducer,
});

export default rootReducer;
