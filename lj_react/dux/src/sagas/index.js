import { spawn } from 'redux-saga/effects';
import watchLogin from './UserSaga';

export default function* rootSaga() {
	yield spawn(watchLogin);
};