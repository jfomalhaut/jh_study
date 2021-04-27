const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const SET_STATUS = 'SET_STATUS';

const login = (payload) => ({ type: LOGIN, payload });
const loginSuccess = () => ({ type: LOGIN_SUCCESS });
const loginFailure = () => ({ type: LOGIN_FAILURE });
const setStatus = () => ({ type: SET_STATUS });

export default {
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SET_STATUS,
	login,
	loginSuccess,
	loginFailure,
	setStatus,
};