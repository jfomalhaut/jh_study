import React, { useEffect, useRef, useState } from 'react';

const field = { 
	user: '', 
	age: '', 
	phone: '' 
};

function Input() {
	const userRef = useRef();
	const [list, setList] = useState([]);
	const [info, setInfo] = useState(field);
	const { user, age, phone } = info;

	const onChangeData = (ev) => {
		const { target: { value, name } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	const register = (ev) => {
		ev.preventDefault();
		const newList = list.concat(info);
		setList(newList);
		setInfo(field);
		userRef.current.focus();
	};

	const remove = (idx) => {
		const newList = list.filter((item, index) => index !== idx);
		setList(newList);
	};

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		console.log(list);
	}, [list]);

	return (
		<div>
			<form onSubmit={register}>
				<input value={user} name="user" onChange={onChangeData} ref={userRef} />
				<input value={age} name="age" onChange={onChangeData} />
				<input value={phone} name="phone" onChange={onChangeData} />
				<article>
					<button>등록</button>
				</article>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={`PHONEBOOK${idx}`}>
						<div>{idx + 1}</div>
						<div>{item.user}</div>
						<div>{item.age}</div>
						<div>{item.phone}</div>
						<button onClick={() => remove(idx)}>remove</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Input;