import React, { useEffect, useState } from 'react';
import { UserLogin } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../actions';

function Login() {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({ username: '', password: '' });
	const { username, password } = info;

	const { logged, status } = useSelector(state => state.UserReducer);

	const onChangeHandler = (ev) => {
		const { target: { value, name } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	const login = async (ev) => {
		ev.preventDefault();
		dispatch(UserAction.login(info));

		// try {
		// 	const result = await UserLogin(info);
		// 	console.log(result);
		// } catch {
		// 	console.log('failure!');
		// }
	};

	useEffect(() => {
		if (status > 0) {
			alert('로그인 실패!');
			dispatch(UserAction.setStatus());
		}
	}, [status])

	useEffect(() => {
		if (logged) {
			alert('로그인 성공! 메인 페이지로 이동합니다');
		}
	}, [logged])

	return (
		<form onSubmit={login}>
			<input type="text" name="username" value={username} onChange={onChangeHandler} />
			<input type="password" name="password" value={password} onChange={onChangeHandler} />
			<button>login!</button>
		</form>
	);
}

export default Login;