import CountReducer from './CountReducer';
import CartReducer from './CartReducer';
import UserReducer from './UserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	CountReducer,
	UserReducer,
	CartReducer,
});

export default rootReducer;
