import { UserAction } from '../actions';
import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from 'axios';
const api = 'http://localhost:4000/api/signin';

function* UserSaga(action) {
	try {
		const { payload } = action;
		const { data } = yield call([Axios, 'post'], api, payload);
		if (data) {
			yield put(UserAction.loginSuccess());
		} else {
			throw false;
		}
	} catch {
		yield put(UserAction.loginFailure());
	}
}

export default function* watchLogin() {
	yield takeLatest(UserAction.LOGIN, UserSaga);
};